import bg from '../public/home/images/policy-section-bg-image.jpg'
import { Navbar } from './components/Navbar';

export function PolicyPage({ cart }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-purple-900/70"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-40 right-40 w-6 h-6 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-pink-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-yellow-400 rounded-full opacity-25 animate-ping"></div>
      </div>

      <div className="relative z-20">
        <Navbar cart={cart} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-6 drop-shadow-2xl">
            OUR POLICIES
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto drop-shadow-lg">
            We are value creators with hyperfocus on quality, trust, and customer satisfaction
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mb-4">
              What We Provide
            </h2>
            <p className="text-lg text-blue-100">Comprehensive policies designed for your peace of mind</p>
          </div>

          {/* Policy Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">

            {/* Return Policy */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-blue-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 text-center">🔄</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Return Policy</h3>
                <p className="text-blue-100 text-center leading-relaxed">
                  The product can be returned within 7 days of purchase. Return shipping charges will be borne by the customer. Items must be in original condition with all packaging and accessories.
                </p>
              </div>
            </div>

            {/* Delivery Policy */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-green-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 text-center">🚚</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Delivery</h3>
                <p className="text-blue-100 text-center leading-relaxed">
                  We offer Cash on Delivery service. Pay only when you receive your order at your doorstep. Safe and secure delivery within Pakistan.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}