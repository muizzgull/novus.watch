import { NavLink, useLocation } from "react-router-dom";
import logo from '../../public/home/images/Custom NOVUS Logo with Nebula Effect.png';

export function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

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
        <div className="hidden md:block">
          {/* Additional elements can go here if needed */}
        </div>
      </nav>
    </div>
  );
}
