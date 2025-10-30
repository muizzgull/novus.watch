import { Navbar } from "./components/Navbar";
import bg from '../public/home/images/contact-section-bg-image.jpg'

export function ContactPage() {
  return (
    <div className='min-h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />

      <div className="main flex justify-center items-center mt-6 sm:mt-8 md:mt-9 px-4 py-8">
        <div className="box-container bg-red-800 w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-120 h-auto min-h-110 sm:min-h-120 md:min-h-130 lg:h-150 rounded-3xl flex flex-col justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">Contact Us</h1>
          <h1 className="text-white font-bold text-lg sm:text-xl md:text-2xl text-center break-all sm:break-normal">@ novus.watch@protonmail.com</h1>
        </div>
      </div>
    </div>
  );
}