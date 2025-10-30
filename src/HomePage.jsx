import './App.css';
import { Navbar } from './components/Navbar';
import heroImage from '../public/home/images/hero-image.png';
import bg from '../public/home/images/home-background.jpg';
import { NavLink } from 'react-router-dom';
import { ExplorePage } from './ExplorePage';

export function HomePage() {

  return (
    <div className='home-page-container min-h-screen bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bg})`}}>
      <Navbar />

      <div className='heading-container flex justify-center px-4 pt-5'>
        <p className='text-blue-900 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-rm text-center'>WELCOME</p>
      </div>

      <div className='hero-image-container flex flex-col sm:flex-row justify-center items-center mt-5 sm:mt-10 gap-3 sm:gap-5 px-4'>
        <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-800 text-center sm:text-left'>Where Elegance <br /> Meets Time.</p>
        <img src={heroImage} className='w-32 sm:w-40 md:w-48 lg:w-56 xl:w-60 max-w-full h-auto' />
        <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-800 text-center sm:text-right'>Buy now, <br /> or Regret Later.</p>
      </div>

      <div className='buttons flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-10 gap-4 sm:gap-6 px-4'>
        <button className='bg-black cursor-pointer text-white rounded-4xl w-32 sm:w-36 md:w-40 h-10 sm:h-12 font-bold text-sm hover:bg-gray-800 transition-colors duration-300'>
          Order Now
        </button>

        <NavLink to='/explore'>
          <button className='bg-white cursor-pointer hover:bg-black transition-colors duration-300 hover:text-white text-black rounded-4xl w-32 sm:w-36 md:w-40 h-10 sm:h-12 font-bold text-sm border-2 border-black'>
            Explore
          </button>
        </NavLink>
      </div>
    </div>
  );
}