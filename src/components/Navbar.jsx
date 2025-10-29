import { NavLink, useLocation } from "react-router-dom";
import logo from '../../public/home/images/Custom NOVUS Logo with Nebula Effect.png';

export function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-full">
      <nav className="bg-black h-15 flex flex-col md:flex-row justify-between items-center p-4">
        <div>
          <img src={logo} className="w-20 md:w-35 ml-2 md:ml-10" alt="Logo" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 pr-4 md:gap-10">
          <NavLink to='/' className={currentPath === '/' ? 'text-amber-50 cursor-pointer underline underline-offset-6' : 'text-amber-50 cursor-pointer'}>Home</NavLink>
          <NavLink to='/policy' className={currentPath === '/policy' ? 'text-amber-50 cursor-pointer underline underline-offset-6' : 'text-amber-50 cursor-pointer'}>Policy</NavLink>
          <NavLink to='/contact' className={currentPath === '/contact' ? 'text-amber-50 cursor-pointer underline underline-offset-6' : 'text-amber-50 cursor-pointer'}>Contact</NavLink>
          <NavLink to='/explore' className={currentPath === '/explore' ? 'text-amber-50 cursor-pointer underline underline-offset-6' : 'text-amber-50 cursor-pointer'}>Explore</NavLink>
          <NavLink to='/liked' className={currentPath === '/liked' ? 'text-amber-50 cursor-pointer underline underline-offset-6' : 'text-amber-50 cursor-pointer'}>Liked</NavLink>
        </div>
        <div>
          {/* Additional elements can go here if needed */}
        </div>
      </nav>
    </div>
  );
}
