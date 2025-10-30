import { Navbar } from "./components/Navbar";
import bg from '../public/home/images/contact-section-bg-image.jpg'

export function ContactPage() {
  return (
    <div className='h-screen' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />

      <div className="main flex justify-center items-center mt-9">
        <div className="box-container bg-red-800 w-100 h-110 lg:w-120 lg:h-150 rounded-3xl flex flex-col justify-center items-center gap-20">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          <h1 className="text-white font-bold text-2xl">@  &nbsp; novus.watch@protonmail.com</h1>
        </div>
      </div>
    </div>
  );
}