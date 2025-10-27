import { NavLink, useLocation } from "react-router-dom";
import logo from '../../public/home/images/Custom NOVUS Logo with Nebula Effect.png';

export function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-full">
      <nav className="bg-black h-15 flex justify-between items-center">
        <div>
          <img src={logo} className="w-35 ml-10" />
        </div>
        <div className="flex justify-center items-center ml-30 gap-10 mr-50">
          <NavLink to='/' className={currentPath === '/' ? 'text-amber-50 cursor-pointer underline underline-offset-6' : 'text-amber-50 cursor-pointer'}>Home</NavLink>
          <NavLink to='/policy' className={currentPath === '/policy' ? 'text-amber-50 cursor-pointer underline underline-offset-6' : 'text-amber-50 cursor-pointer'}>Policy</NavLink>
          <NavLink to='/contact' className={currentPath === '/contact' ? 'text-amber-50 cursor-pointer underline underline-offset-6' : 'text-amber-50 cursor-pointer'}>Contact</NavLink>
          <NavLink to='/explore' className={currentPath === '/explore' ? 'text-amber-50 cursor-pointer underline underline-offset-6' : 'text-amber-50 cursor-pointer'}>Explore</NavLink>
        </div>
        <div>
          <NavLink>
            <button className="text-white pr-20 cursor-pointer">
              Sign Up
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}