import { Navbar } from './components/Navbar';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function CartPage({ cart, setCart, addOrder }) {
   const [checkoutForm, setCheckoutForm] = useState({
     name: '',
     email: '',
     phone: '',
     address: ''
   });

   const [orderSuccess, setOrderSuccess] = useState(false);
   const [isPlacingOrder, setIsPlacingOrder] = useState(false);
   const [emailError, setEmailError] = useState('');

  // Calculate delivery date (10 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 10);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * (item.quantity || 1));
    }, 0);
  };

  const DELIVERY_CHARGES = 500;

  const calculateTotal = () => {
    return calculateSubtotal() + DELIVERY_CHARGES;
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== productId));
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsPlacingOrder(true);

    const templateParams = {
      to_email: 'mianmuizzgull@gmail.com',
      from_name: checkoutForm.name,
      from_email: checkoutForm.email,
      phone: checkoutForm.phone,
      address: checkoutForm.address,
      cart_items: cart.map(item => `${item.name} - Rs. ${item.price} x${item.quantity || 1}`).join('\n'),
      subtotal: `Rs. ${calculateSubtotal().toFixed(2)}`,
      delivery_charges: `Rs. ${DELIVERY_CHARGES}`,
      total: `Rs. ${calculateTotal().toFixed(2)}`,
      delivery_date: deliveryDate.toLocaleDateString()
    };

    // Create order object
    const orderData = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      deliveryDate: deliveryDate.toISOString(),
      customer: {
        name: checkoutForm.name,
        email: checkoutForm.email,
        phone: checkoutForm.phone,
        address: checkoutForm.address
      },
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
        image: item.image
      })),
      subtotal: calculateSubtotal(),
      deliveryCharges: DELIVERY_CHARGES,
      total: calculateTotal(),
      status: 'Processing'
    };

    emailjs.send(
      'service_7e7ydxo', // Replace with your EmailJS service ID
      'template_0qtzrwf', // Replace with your EmailJS template ID
      templateParams,
      '_Lfa8KvpjeKLnL4fc' // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      // Add order to state (this will also save to localStorage via useEffect)
      addOrder(orderData);

      setIsPlacingOrder(false);
      setOrderSuccess(true);
      setCart([]);
      setCheckoutForm({ name: '', email: '', phone: '', address: '' });
      setTimeout(() => setOrderSuccess(false), 3000);
    }, (error) => {
      console.log('Failed to send email:', error.text);
      setIsPlacingOrder(false);
      alert('Failed to place order. Please try again.');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cart={cart} />
      {orderSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 text-center">
          <p className="font-semibold">Your order has been placed successfully!</p>
          <p className="text-sm">Check your email for confirmation.</p>
        </div>
      )}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-xl">Your cart is empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cart Items */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b py-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">Rs. {item.price} </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity || 1}
                        onChange={(e) => {
                          const newQuantity = parseInt(e.target.value) || 1;
                          updateQuantity(item.id, newQuantity);
                        }}
                        className="w-16 px-2 py-1 bg-gray-100 rounded text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>Rs. {calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Charges:</span>
                  <span>Rs. {DELIVERY_CHARGES}</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-xl font-bold text-gray-900">
                  <span>Total:</span>
                  <span>Rs. {calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

              {/* Delivery Information */}
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10a2 2 0 002 2h4a2 2 0 002-2V11M9 11h6" />
                  </svg>
                  <h3 className="text-lg font-semibold text-blue-900">Estimated Delivery</h3>
                </div>
                <p className="text-blue-800">
                  Your order will reach you till <span className="font-bold">{deliveryDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </p>
              </div>
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Subtotal:</span>
                  <span>Rs. {calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Delivery Charges:</span>
                  <span>Rs. {DELIVERY_CHARGES}</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total:</span>
                  <span>Rs. {calculateTotal().toFixed(2)}</span>
                </div>
              </div>
              <form onSubmit={handleCheckout}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={checkoutForm.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={checkoutForm.email}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Prevent anything after .com
                      if (!value.includes('.com') || value.endsWith('.com')) {
                        setEmailError('');
                        handleInputChange(e);
                      } else {
                        setEmailError('Cannot enter text after .com');
                      }
                    }}
                    required
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
                      emailError ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-red-600">{emailError}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={checkoutForm.phone}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Only allow numbers
                      if (/^\d*$/.test(value)) {
                        handleInputChange(e);
                      }
                    }}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    value={checkoutForm.address}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isPlacingOrder}
                  className={`w-full cursor-pointer py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    isPlacingOrder
                      ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}