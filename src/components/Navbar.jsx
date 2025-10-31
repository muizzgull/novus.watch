import { NavLink, useLocation } from "react-router-dom";
import logo from '../../public/home/images/Custom NOVUS Logo with Nebula Effect.png';

export function Navbar({ cart = [] }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <div className="w-full">
      <nav className="bg-black h-auto min-h-15 flex flex-col md:flex-row justify-between items-center p-2 sm:p-3 md:p-4">
        <div className="flex justify-center md:justify-start mb-2 md:mb-0">
          <img src={logo} className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-35 ml-0 md:ml-2 lg:ml-10 max-w-full h-auto" alt="Logo" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-10 px-2 md:px-4">
          <NavLink to='/' className={`${currentPath === '/' ? 'underline underline-offset-6' : ''} text-amber-50 cursor-pointer text-sm sm:text-base md:text-lg hover:text-amber-200 transition-colors duration-200 whitespace-nowrap`}>Home</NavLink>
          <NavLink to='/policy' className={`${currentPath === '/policy' ? 'underline underline-offset-6' : ''} text-amber-50 cursor-pointer text-sm sm:text-base md:text-lg hover:text-amber-200 transition-colors duration-200 whitespace-nowrap`}>Policy</NavLink>
          <NavLink to='/contact' className={`${currentPath === '/contact' ? 'underline underline-offset-6' : ''} text-amber-50 cursor-pointer text-sm sm:text-base md:text-lg hover:text-amber-200 transition-colors duration-200 whitespace-nowrap`}>Contact</NavLink>
          <NavLink to='/explore' className={`${currentPath === '/explore' ? 'underline underline-offset-6' : ''} text-amber-50 cursor-pointer text-sm sm:text-base md:text-lg hover:text-amber-200 transition-colors duration-200 whitespace-nowrap`}>Explore</NavLink>
          <NavLink to='/liked' className={`${currentPath === '/liked' ? 'underline underline-offset-6' : ''} text-amber-50 cursor-pointer text-sm sm:text-base md:text-lg hover:text-amber-200 transition-colors duration-200 whitespace-nowrap`}>Liked</NavLink>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <NavLink to='/cart' className={`${currentPath === '/cart' ? 'underline underline-offset-6' : ''} text-amber-50 cursor-pointer text-sm sm:text-base md:text-lg hover:text-amber-200 transition-colors duration-200 whitespace-nowrap flex items-center gap-1 mr-4`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3" />
              </svg>
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </div>
        </div>
        <div className="hidden md:block">
          {/* Additional elements can go here if needed */}
        </div>
      </nav>
    </div>
  );
}
