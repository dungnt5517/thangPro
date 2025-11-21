import React from 'react';
import { BeforeAfterSliderData } from '../types';
import BeforeAfterSlider from './BeforeAfterSlider';

interface SocialProofProps {
  data: BeforeAfterSliderData;
}

const SocialProof: React.FC<SocialProofProps> = ({ data }) => {
  return (
    <section id="portfolio" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">{data.headline}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{data.description}</p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="mt-8">
           <BeforeAfterSlider beforeImage={data.before_image} afterImage={data.after_image} />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;