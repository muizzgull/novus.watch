import './App.css';
import { Navbar } from './components/Navbar';
import heroImage from '../public/home/images/hero-image.png';
import bg from '../public/home/images/home-background.jpg';
import { NavLink } from 'react-router-dom';
import { ExplorePage } from './ExplorePage';

export function HomePage() {
  
  return (
    <div className='home-page-container h-screen' style={{backgroundImage: `url(${bg})`}}>
      <Navbar />

      <div className='heading-container flex justify-center ml-3'>
        <p className='text-blue-900 font-bold text-5xl mt-5 md:text-6xl lg:text-9xl rm'>WELCOME</p>
      </div>

      <div className='hero-image-container flex justify-center items-center mt-10 gap-5'>
        <p className='ml-10 font-bold font text-2xl md:text-3xl lg:text-4xl text-blue-800'>Where Elegance <br /> Meets Time. </p>
        <img src={heroImage} className='w-40 lg:w-60 ' />
        <p className='mr-10 font-bold font text-2xl md:text-3xl lg:text-4xl text-blue-800'>Buy now, <br /> or Regret Later.</p>
      </div>

      <div className='buttons flex justify-center mt-10 ml-4 gap-6'>
        <button className='bg-black cursor-pointer text-white rounded-4xl w-25 h-10 font-bold text-sm'>
          Order Now
        </button>

        <NavLink to='/explore'>
          <button className='bg-white cursor-pointer hover:bg-black transition-colors duration 1000 hover:text-white text-black rounded-4xl w-25 h-10 font-bold'>
            Explore
          </button>
        </NavLink>
      </div>
    </div>
  );
}