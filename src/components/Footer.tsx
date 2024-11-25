import React from 'react';
import { Wallet } from 'lucide-react';

const footerLinks = {
  Products: [
    { name: 'Pera iOS', href: '#' },
    { name: 'Pera Android', href: '#' },
    { name: 'Pera Web', href: '#' },
    { name: 'Pera Explorer', href: '#' },
    { name: 'Algorand ASA Verification', href: '#' },
    { name: 'Pera QR Code Generator', href: '#' },
  ],
  Company: [
    { name: 'Support Center', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Join Our Team', href: '#' },
    { name: 'Media Kit', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Roadmap (Request Feature)', href: '#' },
    { name: 'Bug Bounty', href: '#' },
  ],
  'Additional Resources': [
    { name: 'Open Source Repos', href: '#' },
    { name: 'Algorand Governance', href: '#' },
    { name: 'Algorand Foundation', href: '#' },
    { name: 'Algorand Developer Portal', href: '#' },
    { name: 'Pera Technical & API Docs', href: '#' },
  ],
  Legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Discord', href: '#' },
  { name: 'Reddit', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Telegram', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <Wallet className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">pera</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Your Algorand journey starts here</span>
            <img src="https://perawallet.s3.amazonaws.com/images/apple.svg" alt="App Store" className="h-8" />
            <img src="https://perawallet.s3.amazonaws.com/images/google-play.svg" alt="Google Play" className="h-8" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} Pera Wallet. All rights reserved.
          </div>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}