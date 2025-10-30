import bg from '../public/home/images/policy-section-bg-image.jpg'
import { Navbar } from './components/Navbar';

export function PolicyPage() {
  return (
    <div className='min-h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />

      <div className='heading-one-container flex justify-center mt-5 sm:mt-8 md:mt-10 px-4'>
        <p className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center'>We are value creators <br /> &nbsp; &nbsp; &nbsp; with hyperfocus</p>
      </div>
      <div className='heading-two-container flex justify-center px-4'>
        <p className='text-blue-600 text-2xl sm:text-3xl md:text-4xl font-bold mt-6 sm:mt-8 md:mt-10 text-center'>What we Provide</p>
      </div>
      <div className='cards-container flex justify-center mt-6 sm:mt-8 md:mt-10 px-4'>
        <div className='card flex flex-col gap-4 sm:gap-5 md:gap-7 text-white justify-center items-center bg-purple-800 w-full max-w-xs sm:max-w-sm md:w-65 h-auto min-h-80 sm:min-h-85 md:h-90 rounded-3xl hover:scale-105 transition-all duration-3000 cursor-pointer p-4 sm:p-6'>
          <h1 className='text-xl sm:text-2xl md:text-3xl text-white font-bold tracking-wide text-center'>Return Policy</h1>
          <p className='text-sm sm:text-base md:text-lg text-center leading-relaxed'>The product can be returned within a week. The return charges will be given by the customer.</p>
        </div>
      </div>
    </div>
  );
}