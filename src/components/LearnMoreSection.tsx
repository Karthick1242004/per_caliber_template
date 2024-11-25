import React from 'react';
import { ArrowRight } from 'lucide-react';

export function LearnMoreSection() {
  return (
    <section className="bg-[#1C1C1C] relative overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Learn More Card */}
        <div className="bg-[#6B46FE] rounded-3xl p-8 md:p-12 relative overflow-hidden mb-24">
          <div className="absolute inset-0 bg-[url('https://perawallet.s3.amazonaws.com/images/cards/learn-more-background.png')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Learn more about<br />Algorand & Crypto
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Build your crypto knowledge with Pera Learn. Find out everything about Algorand.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-black/80 transition-colors">
                Start here
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <img
              src="https://perawallet.s3.amazonaws.com/images/cards/learn-more.png"
              alt="Learn More"
              className="w-full md:w-[400px] h-auto"
            />
          </div>
        </div>

        {/* Community Section */}
        <div className="text-center">
          <div className="inline-block bg-[#fcca44] p-3 rounded-xl mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="black"/>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for the Algorand<br />community
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Pera Wallet is built in the open, with a transparent and community driven roadmap
          </p>
          <div className="text-center text-white/60">
            <p className="mb-2">Do you have an idea about a new feature you would love to see?</p>
            <p>Submit your feedback on our roadmap!</p>
          </div>
        </div>
      </div>
    </section>
  );
}