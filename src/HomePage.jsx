import './App.css';
import { Navbar } from './components/Navbar';
import heroImage from '../public/home/images/hero-image.png';
import bg from '../public/home/images/home-background.jpg';
import { NavLink } from 'react-router-dom';
import { ExplorePage } from './ExplorePage';

export function HomePage({ cart }) {

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${bg})`}}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/70 to-purple-900/80"></div>

      {/* Animated particles background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-indigo-400 rounded-full opacity-30 animate-pulse"></div>
      </div>



      {/* Navbar */}
      <div className="relative z-20">
        <Navbar cart={cart} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">

        {/* Welcome Text */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-6 drop-shadow-2xl">
            NOVUS
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-xl">
            BUSINESS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-16 max-w-7xl mx-auto">
          {/* Left Text */}
          <div className="text-center lg:text-left space-y-6 animate-slide-in-left">
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              Buy Now
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                or Regret Later
              </span>
            </h3>
            <center className="text-xl md:text-2xl text-purple-100 max-w-md drop-shadow-md">
              Select for yourself the watches you want.
            </center>
          </div>

          {/* Center Image */}
          <div className="relative group animate-float flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-spin-slow"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <img
                src={heroImage}
                alt="Luxury Watch"
                className="w-80 h-80 md:w-96 md:h-96 object-contain transform group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="text-center lg:text-right space-y-6 animate-slide-in-right">
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              Where
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Elegance
              </span>
              Meets Time
            </h3>
            <p className="text-xl md:text-2xl text-blue-100 max-w-md drop-shadow-md">
              Welcome to our Website. <br /> Explore and Order Watches
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 animate-fade-in-up-delayed">
          <button className="group relative bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white font-bold py-4 px-12 rounded-2xl text-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-black/50 border-2 border-white/30 overflow-hidden">
            <span className="relative z-10 group-hover:text-blue-300 transition-colors duration-300">Order Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <NavLink to="/explore">
            <button className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-2xl text-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/50 border-2 border-white/40 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3 group-hover:text-yellow-200 transition-colors duration-300">
                Explore Collection
                <svg className="w-6 h-6 group-hover:translate-x-2 group-hover:-rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </NavLink>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1.2s ease-out 0.3s both;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1.2s ease-out 0.6s both;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up 1s ease-out 0.9s both;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
}