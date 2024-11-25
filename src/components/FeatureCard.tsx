import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isNew?: boolean;
}

export function FeatureCard({ title, description, imageUrl, isNew }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
      {isNew && (
        <span className="inline-block bg-[#4bea88] text-black text-sm font-medium px-2.5 py-1 rounded-full mb-4">
          NEW
        </span>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="h-48 flex items-center justify-center mb-6">
        <img src={imageUrl} alt={title} className="max-h-full w-auto" />
      </div>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
}