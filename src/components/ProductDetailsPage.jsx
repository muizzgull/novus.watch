import { Navbar } from './Navbar';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function ProductDetailsPage({ products, likedProducts, setLikedProducts, cart, setCart, cartMessage, setCartMessage }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (products.length > 0) {
      const product = products.find(p => p.id === id);
      if (product) {
        setSelectedProduct(product);
        setMainImage(product.image);
      } else {
        navigate('/explore');
      }
    }
  }, [id, products, navigate]);

  if (!selectedProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

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

  function likePost(product) {
    if (likedProducts.some(p => p.id === product.id)) {
      setLikedProducts(likedProducts.filter(p => p.id !== product.id));
    } else {
      setLikedProducts([...likedProducts, product]);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-40 right-40 w-6 h-6 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-pink-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-yellow-400 rounded-full opacity-25 animate-ping"></div>
      </div>

      <Navbar cart={cart} />

      {/* Success Message */}
      {cartMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl z-50 animate-fade-in border-2 border-white/20">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xl font-bold">{cartMessage}</span>
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center min-h-screen p-4 lg:p-8">
        {/* Product Images Section */}
        <div className="img-container rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 w-full max-w-sm sm:max-w-md lg:w-120 lg:h-140 flex flex-col justify-center items-center p-6 shadow-2xl mb-8 lg:mb-0 lg:mr-8">
          <img
            className="w-48 sm:w-56 md:w-60 max-w-full h-auto rounded-2xl shadow-lg mb-4"
            src={mainImage}
            alt={selectedProduct.name}
          />

          {/* Thumbnail Images */}
          <div className="more-images flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-2 mt-4 overflow-x-auto w-full justify-center">
            <div
              className={`flex justify-center items-center h-16 sm:h-18 md:h-20 flex-shrink-0 rounded-2xl p-1 cursor-pointer transition-all duration-300 ${
                selectedIndex === -1 ? 'border-3 border-blue-400 bg-blue-400/20' : 'hover:bg-white/10'
              }`}
              onClick={() => changeImage(selectedProduct.image, -1)}
            >
              <img
                className="w-8 sm:w-9 md:w-10 rounded-lg"
                src={selectedProduct.image}
                alt="Primary thumbnail"
              />
            </div>

            {selectedProduct.moreImages && selectedProduct.moreImages.map((imageObj, index) => (
              <div
                key={index}
                className={`flex justify-center items-center h-16 sm:h-18 md:h-20 flex-shrink-0 rounded-2xl p-1 cursor-pointer transition-all duration-300 ${
                  selectedIndex === index ? 'border-3 border-blue-400 bg-blue-400/20' : 'hover:bg-white/10'
                }`}
                onClick={() => changeImage(imageObj.image, index)}
              >
                <img
                  className="w-8 sm:w-9 md:w-10 rounded-lg"
                  src={imageObj.image}
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="product-details flex flex-col w-full max-w-lg lg:max-w-none lg:ml-8 justify-between">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl">
            <div className="flex flex-col gap-4">
              <h1 className="name-container font-black text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 text-center lg:text-left">
                {selectedProduct.name}
              </h1>

              <h1 className="font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 text-center lg:text-left">
                Rs. {selectedProduct.price}
              </h1>
            </div>

            <div className="type-container mt-6">
              <h1 className="font-bold text-xl md:text-2xl text-white text-center lg:text-left">Type</h1>
              <p className="text-blue-100 text-center lg:text-left mt-2">{selectedProduct.type}</p>
            </div>

            <div className="description-container max-w-full lg:max-w-110 xl:max-w-200 mt-6">
              <h1 className="font-bold text-xl md:text-2xl text-white text-center lg:text-left">Description</h1>
              <p className="description text-blue-100 text-sm md:text-base text-center lg:text-left mt-2 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            <div className="flex justify-center lg:justify-start flex-col items-center lg:items-start mt-6 gap-4">
              <button
                onClick={() => addToCart(selectedProduct)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50"
              >
                Add to Cart
              </button>

              <div className="flex justify-center lg:justify-start">
                {likedProducts.some(p => p.id === selectedProduct.id) ? (
                  <svg onClick={() => likePost(selectedProduct)} className="w-8 h-8 cursor-pointer text-red-500 hover:scale-110 transition-transform duration-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                ) : (
                  <svg onClick={() => likePost(selectedProduct)} className="w-8 h-8 cursor-pointer text-gray-400 hover:text-red-400 hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )}
                <p className="text-blue-100 ml-2 text-sm md:text-base">Like</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}