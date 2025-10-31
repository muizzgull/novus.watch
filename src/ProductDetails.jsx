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
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Navbar cart={cart} />
      {cartMessage && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {cartMessage}
        </div>
      )}
      <div className="flex flex-col lg:flex-row justify-center items-center grow p-4 gap-6 lg:gap-8">
        <div className="img-container rounded-2xl bg-gray-100 w-full max-w-sm sm:max-w-md lg:w-120 lg:h-140 flex flex-col justify-center items-center p-4">
          <img className="w-48 sm:w-56 md:w-60 max-w-full h-auto" src={mainImage} alt={selectedProduct.name} />

          <div className="more-images flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-2 mt-4 overflow-x-auto">
            <div
              className={`flex justify-center items-center h-16 sm:h-18 md:h-20 flex-shrink-0 ${selectedIndex === -1 ? 'border-3 rounded-2xl border-black' : ''} p-1`}
            >
              <img
                className="w-8 sm:w-9 md:w-10 cursor-pointer"
                onClick={() => changeImage(selectedProduct.image, -1)}
                src={selectedProduct.image}
                alt="Primary thumbnail"
              />
            </div>

            {selectedProduct.moreImages.map((imageObj, index) => (
              <div
                key={index}
                className={`flex justify-center rounded-2xl items-center h-16 sm:h-18 md:h-20 flex-shrink-0 ${selectedIndex === index ? 'border-3 border-black' : ''} p-1`}
              >
                <img
                  className="w-8 sm:w-9 md:w-10 cursor-pointer"
                  onClick={() => changeImage(imageObj.image, index)}
                  src={imageObj.image}
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="product-details flex flex-col w-full max-w-lg lg:max-w-none lg:ml-8 justify-between">
          <div className="flex flex-col gap-2 mt-4 lg:mt-8">
            <h1 className="name-container font-rm text-xl sm:text-2xl md:text-3xl font-extrabold text-center lg:text-left">{selectedProduct.name}</h1>
            <h1 className="font-bold text-red-700 text-lg sm:text-xl mt-3 sm:mt-5 text-center lg:text-left"><span className="text-black">Price: </span> Rs. {selectedProduct.price}</h1>
          </div>
          <div className="type-container mt-3 sm:mt-5">
            <h1 className="font-rm font-bold text-lg sm:text-xl md:text-2xl text-center lg:text-left">Type</h1>
            <p className="text-center lg:text-left">{selectedProduct.type}</p>
          </div>
          <div className="description-container max-w-full lg:max-w-110 xl:max-w-200 mt-4 sm:mt-6">
            <h1 className="font-rm font-xxb text-lg sm:text-xl md:text-2xl text-center lg:text-left">Description</h1>
            <p className="description wrap-break-word font-medium text-sm sm:text-base text-center lg:text-left">{selectedProduct.description}</p>
          </div>
          <div className="delivery-charges-container pt-3">
            <h1 className="font-rm font-xxb text-lg sm:text-xl md:text-2xl text-center lg:text-left">Delivery Charges:</h1>
            <p className="font-bold text-red-700 text-lg sm:text-xl text-center lg:text-left">{selectedProduct.deliveryCharges}</p>
            <div className="flex justify-center lg:justify-start flex-col items-center lg:items-start mt-4 gap-4">
              <button onClick={() => addToCart(selectedProduct)} className='bg-blue-600 cursor-pointer text-white rounded-full w-full sm:w-32 md:w-40 h-10 sm:h-11 md:h-12 font-bold text-sm sm:text-base hover:bg-blue-700 transition-colors duration-300'>Add to Cart</button>
              <div className="flex justify-center lg:justify-start">
                <svg className="size-6 sm:size-7 md:size-8 cursor-default" xmlns="" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323">
                  <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                </svg>
                <p className="text-sm sm:text-base ml-2">Liked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}