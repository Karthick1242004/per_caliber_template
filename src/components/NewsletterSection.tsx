import React from 'react';
import { Mail } from 'lucide-react';

export function NewsletterSection() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="bg-white/10 p-3 rounded-xl inline-block mb-6">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Keep up with the latest
              </h2>
              <p className="text-white/80">
                Subscribe to our newsletter to get the latest Pera Wallet news.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white/40"
                />
                <button className="bg-[#6B46FE] text-white px-6 py-3 rounded-lg hover:bg-[#5835E0] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}