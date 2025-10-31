import { Navbar } from './components/Navbar';
import { useNavigate } from 'react-router-dom';

export function ExplorePage({ products, likedProducts, setLikedProducts, cart, setCart, cartMessage, setCartMessage }) {
  const navigate = useNavigate();

  function likePost(product) {
    if (likedProducts.some(p => p.id === product.id)) {
      setLikedProducts(likedProducts.filter(p => p.id !== product.id));
    } else {
      setLikedProducts([...likedProducts, product]);
    }
  }

  function handleShowDetails(product) {
    navigate(`/product/${product.id}`);
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-purple-900/70"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-indigo-400 rounded-full opacity-30 animate-pulse"></div>
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
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-6 drop-shadow-2xl">
            EXPLORE OUR COLLECTION
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto drop-shadow-lg">
            Discover for yourself what you want.
          </p>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
                {/* Product Image */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img
                    className="relative w-full h-48 object-cover rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500"
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mb-4 drop-shadow-lg">
                    {product.price} PKR
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleShowDetails(product)}
                      className="w-full bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-900 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-black/50 text-sm"
                    >
                      Show Details
                    </button>

                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 text-sm"
                    >
                      Add to Cart
                    </button>

                    {/* Like Button */}
                    <div className="flex justify-center">
                      {likedProducts.some(p => p.id === product.id) ? (
                        <svg onClick={() => likePost(product)} className="w-8 h-8 cursor-pointer text-red-500 hover:scale-110 transition-transform duration-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      ) : (
                        <svg onClick={() => likePost(product)} className="w-8 h-8 cursor-pointer text-gray-400 hover:text-red-400 hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
