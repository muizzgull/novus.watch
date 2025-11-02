import { Navbar } from "./components/Navbar";
// import { likedProducts } from "./likedProducts";
import { useState } from "react";
import { ProductDetails } from "./ProductDetails";



export function LikedPage({ likedProducts, setLikedProducts, cart, setCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartMessage, setCartMessage] = useState('');

  function likePost(product) {
    if(likedProducts.some(p => p.id === product.id)) {
      setLikedProducts(likedProducts.filter(p => p.id !== product.id));
    } else {
      setLikedProducts([...likedProducts, product]);
    }
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

  if (selectedProduct) {
    return <ProductDetails selectedProduct={selectedProduct} cart={cart} setCart={setCart} cartMessage={cartMessage} setCartMessage={setCartMessage} />
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-pink-900/60 to-red-900/70"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-pink-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-40 right-40 w-6 h-6 bg-red-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-yellow-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-orange-400 rounded-full opacity-25 animate-ping"></div>
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

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-red-200 mb-6 drop-shadow-2xl">
            ❤️ YOUR LIKED PRODUCTS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-red-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto drop-shadow-lg">
            Your favorite pieces, carefully curated and saved just for you
          </p>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto">
          {(likedProducts || []).length === 0 ? (
            <div className="text-center">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-16 max-w-2xl mx-auto shadow-2xl">
                <div className="text-8xl mb-6">💖</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">No Liked Products Yet</h3>
                <p className="text-pink-100 text-lg mb-8">
                  Start exploring our collection and save your favorite pieces here!
                </p>
                <a href="/explore" className="inline-block bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  Explore Collection
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {(likedProducts || []).map((likedProduct, i) => (
                <div key={i} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-pink-500/25 overflow-hidden">
                  {/* Heart Icon Overlay */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>

                  <div className="relative z-10 text-center">
                    {/* Product Image */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <img
                        className="relative w-full h-48 object-cover rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500"
                        src={likedProduct.image}
                        alt={likedProduct.name}
                      />
                    </div>

                    {/* Product Info */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors duration-300">
                      {likedProduct.name}
                    </h3>
                    <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mb-6 drop-shadow-lg">
                      {likedProduct.price} PKR
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => setSelectedProduct(likedProduct)}
                        className="w-full bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-900 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-black/50"
                      >
                        Show Details
                      </button>

                      <button
                        onClick={() => addToCart(likedProduct)}
                        className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/50"
                      >
                        Add to Cart
                      </button>

                      {/* Like Button */}
                      <button
                        onClick={() => likePost(likedProduct)}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/50"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        Remove from Liked
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}