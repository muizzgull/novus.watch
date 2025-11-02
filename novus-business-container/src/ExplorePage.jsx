import { Navbar } from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';

export function ExplorePage({ products, likedProducts, setLikedProducts, cart, setCart, cartMessage, setCartMessage }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

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

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = priceFilter === 'all' ||
        (priceFilter === 'under5000' && product.price < 5000) ||
        (priceFilter === '5000-10000' && product.price >= 5000 && product.price <= 10000) ||
        (priceFilter === 'over10000' && product.price > 10000);
      return matchesSearch && matchesPrice;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

    return filtered;
  }, [products, searchTerm, priceFilter, sortBy]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/80 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

      {/* Advanced Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-70 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60 animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-ping" style={{animationDuration: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-50 animate-bounce" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-40 animate-pulse" style={{animationDuration: '6s'}}></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/6 right-1/6 w-1 h-16 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent rotate-45 animate-pulse" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/6 left-1/6 w-16 h-1 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse" style={{animationDuration: '4s'}}></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
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
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 mb-4 drop-shadow-2xl animate-pulse" style={{animationDuration: '4s'}}>
              EXPLORE
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
              OUR COLLECTION
            </h2>
          </div>
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </div>

          {/* Enhanced Search and Filters */}
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              {/* Search Bar */}
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-cyan-200 mb-2">Search Products</label>
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Type to search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-white/20 to-white/10 border border-white/40 rounded-2xl text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/25"
                  />
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <label className="block text-sm font-semibold text-purple-200 mb-2">Price Range</label>
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="w-full px-4 py-4 bg-gradient-to-r from-white/20 to-white/10 border border-white/40 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/25"
                >
                  <option value="all" className="bg-slate-800 text-white">All Prices</option>
                  <option value="under5000" className="bg-slate-800 text-white">Under 5000 PKR</option>
                  <option value="5000-10000" className="bg-slate-800 text-white">5000-10000 PKR</option>
                  <option value="over10000" className="bg-slate-800 text-white">Over 10000 PKR</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-semibold text-pink-200 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-4 bg-gradient-to-r from-white/20 to-white/10 border border-white/40 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/25"
                >
                  <option value="name" className="bg-slate-800 text-white">Name (A-Z)</option>
                  <option value="price-low" className="bg-slate-800 text-white">Price: Low to High</option>
                  <option value="price-high" className="bg-slate-800 text-white">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="relative mb-8">
                <div className="text-8xl animate-bounce">🔍</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 animate-fade-in">No products found</h3>
              <p className="text-cyan-200 text-lg max-w-md mx-auto leading-relaxed">
                Try adjusting your search terms or filter criteria to discover amazing products
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
                >
                  Clear Search
                </button>
                <button
                  onClick={() => setPriceFilter('all')}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
                >
                  Show All
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
                  <p className="text-cyan-200 text-lg font-medium">
                    Showing {filteredAndSortedProducts.length} of {products.length} exquisite timepieces
                  </p>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredAndSortedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-700 shadow-2xl hover:shadow-cyan-500/30 overflow-hidden animate-fade-in-up"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* Product Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full shadow-lg">
                        FEATURED
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className="relative mb-6 overflow-hidden rounded-2xl group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-purple-400/20 to-pink-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img
                        className="relative w-full h-56 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-700"
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>

                      {/* Hover overlay with quick actions */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                        <div className="flex gap-3">
                          <button
                            onClick={() => handleShowDetails(product)}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                            aria-label="Quick view"
                          >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => addToCart(product)}
                            className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                            aria-label="Add to cart"
                          >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="text-center relative z-10">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors duration-300 leading-tight line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="mb-4">
                        <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 drop-shadow-lg">
                          {product.price.toLocaleString()} PKR
                        </p>
                        <p className="text-sm text-cyan-300 mt-1">Premium Quality</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-3">
                        <button
                          onClick={() => handleShowDetails(product)}
                          className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-900/50 flex items-center justify-center gap-2 group-hover:shadow-cyan-500/20"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Explore Details
                        </button>

                        {/* Like Button */}
                        <div className="flex justify-between items-center">
                          <button
                            onClick={() => addToCart(product)}
                            className="flex-1 mr-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3" />
                            </svg>
                            Add to Cart
                          </button>

                          {likedProducts.some(p => p.id === product.id) ? (
                            <button
                              onClick={() => likePost(product)}
                              className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-500/50"
                              aria-label="Unlike product"
                            >
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                              </svg>
                            </button>
                          ) : (
                            <button
                              onClick={() => likePost(product)}
                              className="p-3 bg-white/15 backdrop-blur-sm rounded-2xl hover:bg-white/25 transition-all duration-300 transform hover:scale-110 border border-white/20"
                              aria-label="Like product"
                            >
                              <svg className="w-5 h-5 text-gray-300 hover:text-red-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
