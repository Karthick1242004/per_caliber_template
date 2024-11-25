import React from 'react';
import { ExternalLink } from 'lucide-react';

export function SupportSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="bg-[#fcca44] p-3 rounded-xl inline-block mb-6">
              <img 
                src="https://perawallet.s3.amazonaws.com/images/support.svg"
                alt="Support"
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-4xl font-bold mb-6">We got your back.</h2>
            <p className="text-gray-600 text-lg mb-8">
              Our whole team is here to support you: Our community. At Pera Wallet, our top priority is being a trustworthy source of info about Algorand and crypto in general. We are here to help.
            </p>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-8">
                <span className="text-gray-600">Community</span>
                {['Discord', 'Reddit', 'Twitter'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-black hover:text-gray-700 flex items-center gap-1"
                  >
                    {platform}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <div className="flex gap-8">
                <span className="text-gray-600">You need help?</span>
                <a
                  href="#"
                  className="text-black hover:text-gray-700"
                >
                  Get Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}