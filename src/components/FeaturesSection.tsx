import React from 'react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: "Secure and Decentralized",
    description: "Pera Wallet is a self-custodial wallet, giving you complete control of your crypto. All wallet information is kept securely on your devices.",
    imageUrl: "https://perawallet.s3.amazonaws.com/images/cards/secure.png"
  },
  {
    title: "Buy, Send & Store",
    description: "Buy crypto with a credit card. Choose the best deal for you. Manage your entire DeFi & NFT portfolio across every Algorand Wallet you own.",
    imageUrl: "https://perawallet.s3.amazonaws.com/images/cards/buy.png"
  },
  {
    title: "Algorand NFTs at their best",
    description: "Send, store and easily view all of your Algorand NFTs right in your wallet. Explore and buy them using Pera NFT Aggregator.",
    imageUrl: "https://perawallet.s3.amazonaws.com/images/cards/nfts.png"
  },
  {
    title: "Swap Instantly",
    description: "Swap Algorand tokens (ASAs) on Pera Mobile, anytime with ease. Making use of the most reliable providers, such as Tinyman.",
    imageUrl: "https://perawallet.s3.amazonaws.com/images/cards/swap.png",
    isNew: true
  },
  {
    title: "Use dApps on any device",
    description: "Use any dApp on the Algorand ecosystem with our state-of-the-art Wallet Connect support. Discover new decentralized applications and use them without leaving your wallet.",
    imageUrl: "https://perawallet.s3.amazonaws.com/images/cards/dapps.png",
    isNew: true
  },
  {
    title: "Price Charts & Portfolio",
    description: "You can closely track & analyze your favorite Algorand Standard Assets with Pera Portfolio. Powered by Vestige.fi.",
    imageUrl: "https://perawallet.s3.amazonaws.com/images/cards/portfolio.png"
  },
  {
    title: "Ledger Supported",
    description: "Pera Wallet has full support for all Ledger Nano models so you can easily add another layer of security to your wallet. Don't have one yet? Shop Ledger",
    imageUrl: "https://perawallet.s3.amazonaws.com/images/cards/ledger.png"
  },
  {
    title: "Easy Onboarding & Simple Use",
    description: "Get started with crypto and connect to web3 with just a few taps.",
    imageUrl: "https://perawallet.s3.amazonaws.com/images/cards/onboarding.png"
  }
];

export function FeaturesSection() {
  return (
    <section className="bg-[#F5F5F5] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-16">Everything you<br />need in one wallet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              isNew={feature.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
}