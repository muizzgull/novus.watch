import { Navbar } from "./components/Navbar";
import { useState } from 'react';

export function ProductDetails({ selectedProduct, cart, setCart, cartMessage, setCartMessage }) {
  const [mainImage, setMainImage] = useState(selectedProduct.image);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function changeImage(newImageSrc, index) {
    setMainImage(newImageSrc);
    setSelectedIndex(index);
  }

  function addToCart(product) {
    const existingItem = cart.find(p => p.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setCartMessage('Product added to cart!');
    setTimeout(() => setCartMessage(''), 2000);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cart={cart} />
      {cartMessage && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-bounce">
          {cartMessage}
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Image Section */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <img
                    className="w-full h-96 object-contain rounded-2xl"
                    src={mainImage}
                    alt={selectedProduct.name}
                  />
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-4 overflow-x-auto pb-4">
                <div
                  className={`flex-shrink-0 p-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedIndex === -1
                      ? 'ring-4 ring-blue-500 bg-blue-50 scale-110'
                      : 'hover:scale-105 bg-white shadow-lg'
                  }`}
                  onClick={() => changeImage(selectedProduct.image, -1)}
                >
                  <img
                    className="w-20 h-20 object-cover rounded-xl"
                    src={selectedProduct.image}
                    alt="Primary thumbnail"
                  />
                </div>

                {selectedProduct.moreImages.map((imageObj, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 p-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                      selectedIndex === index
                        ? 'ring-4 ring-blue-500 bg-blue-50 scale-110'
                        : 'hover:scale-105 bg-white shadow-lg'
                    }`}
                    onClick={() => changeImage(imageObj.image, index)}
                  >
                    <img
                      className="w-20 h-20 object-cover rounded-xl"
                      src={imageObj.image}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="space-y-8">
              {/* Product Title and Price */}
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {selectedProduct.name}
                </h1>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-blue-600">
                    Rs. {selectedProduct.price.toLocaleString()}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
              </div>

              {/* Product Type */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Category</h3>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium">
                  {selectedProduct.type}
                </span>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Delivery Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Delivery Information</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Delivery Charges:</span>
                  <span className="font-bold text-green-600 text-lg">
                    {selectedProduct.deliveryCharges}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={() => addToCart(selectedProduct)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  🛒 Add to Cart
                </button>

                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="font-medium">Add to Wishlist</span>
                </div>
              </div>

              {/* Additional Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                  <div className="text-2xl mb-2">🚚</div>
                  <div className="font-semibold text-gray-900">Free Shipping</div>
                  <div className="text-sm text-gray-600">On orders over Rs. 5000</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                  <div className="text-2xl mb-2">🔄</div>
                  <div className="font-semibold text-gray-900">Easy Returns</div>
                  <div className="text-sm text-gray-600">7-days return policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}