import React from 'react';
import { Wallet } from 'lucide-react';
import { FeaturesSection } from './components/FeaturesSection';
import { LearnMoreSection } from './components/LearnMoreSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SupportSection } from './components/SupportSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Wallet className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">pera</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-900">Home</a>
              <a href="#" className="text-gray-900">Pera Explorer</a>
              <a href="#" className="text-gray-900">ASA Verification</a>
              <a href="#" className="text-gray-900">QR Generator</a>
              <a href="#" className="text-gray-900">Get Support</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-900">Pera Explorer</button>
              <button className="bg-[#6B46FE] text-white px-6 py-2 rounded-lg">
                Download
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simply the best Algorand wallet
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Pera Wallet is the easiest and safest way to store, buy and swap on the Algorand blockchain.
              Discover & connect decentralized applications (dApps) on any device.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center shadow-lg hover:shadow-xl transition-shadow">
                <span className="mr-2">🖥️</span>
                Launch Pera Web
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center shadow-lg hover:shadow-xl transition-shadow">
                <span className="mr-2">📱</span>
                Download Pera Mobile
              </button>
            </div>
          </div>

          {/* Images Section */}
          <div className="hero-pattern mt-16">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-center items-end pt-16 pb-32">
                <div className="relative flex flex-col lg:flex-row justify-center items-end gap-8 px-4">
                  <img
                    src="https://perawallet.s3.amazonaws.com/images/pera-web.png"
                    alt="Pera Web Interface"
                    className="hidden lg:block w-[600px] object-contain relative z-10 transform hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="https://perawallet.s3.amazonaws.com/images/pera-mobile.png"
                    alt="Pera Mobile Interface"
                    className="w-[300px] md:w-[400px] object-contain relative z-10 transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Learn More Section */}
      <LearnMoreSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Support Section */}
      <SupportSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />

      {/* Marquee Footer */}
      <div className="bg-black text-white overflow-hidden py-4">
        <div className="marquee">
          <div className="marquee-content">
            <span className="mx-4">SECURE</span>
            <span className="mx-4">GREEN</span>
            <span className="mx-4">FAST</span>
            <span className="mx-4">DECENTRALIZED</span>
            <span className="mx-4">OPEN-SOURCE</span>
            <span className="mx-4">COMMUNITY-DRIVEN</span>
            <span className="mx-4">SECURE</span>
            <span className="mx-4">GREEN</span>
            <span className="mx-4">FAST</span>
            <span className="mx-4">DECENTRALIZED</span>
            <span className="mx-4">OPEN-SOURCE</span>
            <span className="mx-4">COMMUNITY-DRIVEN</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;