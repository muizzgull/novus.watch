import bg from '../public/home/images/policy-section-bg-image.jpg'
import { Navbar } from './components/Navbar';

export function PolicyPage() {
  return (
    <div className='h-screen' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />

      <div className='heading-one-container flex justify-center mt-10'>
        <p className='text-white text-6xl font-bold'>We are value creators <br /> &nbsp; &nbsp; &nbsp; with hyperfocus</p>
      </div>
      <div className='heading-two-container flex justify-center'>
        <p className='text-blue-600 text-4xl font-bold mt-10'>What we Provide</p>
      </div>
      <div className='cards-container flex justify-center gap-15 mt-10'>
        <div className='card flex flex-col gap-7 text-white justify-center items-center bg-purple-800 w-65 h-90 rounded-3xl hover:w-70 hover:h-95 transition-all duration 3000 cursor-pointer'>
          <h1 className='text-3xl text-white font-bold tracking-wide'>Return Policy</h1>
          <p className='pl-2 '>The product can be returned within a week. The return charges will be given by the customer.</p>
        </div>
      </div>
    </div>
  );
}