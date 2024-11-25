import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Very Slick UX - Really solid interface and overall UX. Best wallet I've used. Easy to set up different wallets for the long term..",
    author: "Angel Press",
    platform: "apple"
  },
  {
    text: "I started using Algorand Wallet not too long ago and I absolutely love it! the UI is simple and easy to navigate..",
    author: "Martin Ekstrom Bothman",
    platform: "android"
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#6B46FE] text-white rounded-lg px-4 py-2 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <span className="text-xl">4.9/5 · 4,500+ reviews</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Our community loves Pera<br />Wallet
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8">
              <p className="text-xl mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <span className="font-medium">{testimonial.author}</span>
                <img 
                  src={`https://perawallet.s3.amazonaws.com/images/${testimonial.platform}.svg`}
                  alt={testimonial.platform}
                  className="h-5 w-5"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}