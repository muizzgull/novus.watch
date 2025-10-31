import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export function Navbar({ cart = [] }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full relative z-50">
      <nav className="bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-lg bg-opacity-95 border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo Section */}
            <div className="flex-shrink-0">
              <div className="group cursor-pointer">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 hover:from-purple-300 hover:via-pink-300 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 drop-shadow-lg">
                  NOVUS
                </h1>
                <div className="h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              <NavLink
                to='/'
                className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 group ${
                  currentPath === '/'
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full ${
                  currentPath === '/' ? 'w-full' : ''
                }`}></span>
              </NavLink>

              <NavLink
                to='/policy'
                className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 group ${
                  currentPath === '/policy'
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Policy
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full ${
                  currentPath === '/policy' ? 'w-full' : ''
                }`}></span>
              </NavLink>

              <NavLink
                to='/contact'
                className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 group ${
                  currentPath === '/contact'
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Contact
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full ${
                  currentPath === '/contact' ? 'w-full' : ''
                }`}></span>
              </NavLink>

              <NavLink
                to='/explore'
                className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 group ${
                  currentPath === '/explore'
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Explore
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full ${
                  currentPath === '/explore' ? 'w-full' : ''
                }`}></span>
              </NavLink>

              {/* Cart Icon with Badge */}
              <div className="relative">
                <NavLink
                  to='/cart'
                  className={`relative flex items-center gap-2 px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 group ${
                    currentPath === '/cart'
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <div className="relative">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3" />
                    </svg>
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse shadow-lg border-2 border-black">
                        {totalItems > 99 ? '99+' : totalItems}
                      </span>
                    )}
                  </div>
                  <span className="hidden lg:inline">Cart</span>
                </NavLink>
              </div>

              <NavLink
                to='/orders'
                className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 group ${
                  currentPath === '/orders'
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="hidden lg:inline">Orders</span>
                </span>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 group-hover:w-full ${
                  currentPath === '/orders' ? 'w-full' : ''
                }`}></span>
              </NavLink>

              <NavLink
                to='/liked'
                className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 group ${
                  currentPath === '/liked'
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="hidden lg:inline">Liked</span>
                </span>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 transition-all duration-300 group-hover:w-full ${
                  currentPath === '/liked' ? 'w-full' : ''
                }`}></span>
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 shadow-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to='/'
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
              >
                Home
              </NavLink>
              <NavLink
                to='/policy'
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
              >
                Policy
              </NavLink>
              <NavLink
                to='/contact'
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
              >
                Contact
              </NavLink>
              <NavLink
                to='/explore'
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
              >
                Explore
              </NavLink>
              <NavLink
                to='/cart'
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3" />
                </svg>
                Cart {totalItems > 0 && `(${totalItems})`}
              </NavLink>
              <NavLink
                to='/orders'
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Orders
              </NavLink>
              <NavLink
                to='/liked'
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Liked
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
