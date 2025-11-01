import { Navbar } from "./components/Navbar";
import bg from '../public/home/images/contact-section-bg-image.jpg';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export function ContactPage({ cart }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const templateParams = {
        to_email: 'mianmuizzgull@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        contact_type: 'Contact Form Inquiry'
      };

      await emailjs.send(
        'service_qref42f', // Replace with your EmailJS service ID
        'template_ognutm8', // Replace with your EmailJS template ID
        templateParams,
        'wgoq7xcLbnYxDE_Iy' // Replace with your EmailJS public key
      );

      setSubmitMessage('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-red-900/60 to-pink-900/70"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-red-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-40 right-40 w-6 h-6 bg-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-yellow-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-orange-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-purple-400 rounded-full opacity-15 animate-pulse"></div>
      </div>

      <div className="relative z-20">
        <Navbar cart={cart} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-pink-200 mb-6 drop-shadow-2xl">
            CONTACT US
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-pink-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto drop-shadow-lg">
            Get in touch with our expert team. We're here to help you find the perfect timepiece.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Email</h3>
                      <p className="text-red-100">novus.watch@protonmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Phone</h3>
                      <p className="text-red-100">+92 3355525295</p>
                      <p className="text-red-100">+92 3349118856</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Location</h3>
                      <p className="text-red-100">Karachi, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Business Hours</h3>
                      <p className="text-red-100">Mon - Sat: 9AM - 9PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/novus.watch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-xl">📷</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                {submitMessage && (
                  <div className={`p-3 rounded-xl text-center font-medium ${
                    submitMessage.includes('successfully')
                      ? 'bg-green-500/20 text-green-200 border border-green-500/30'
                      : 'bg-red-500/20 text-red-200 border border-red-500/30'
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-2xl hover:shadow-red-500/25 disabled:shadow-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}