import React from 'react';
import { HeroBannerData } from '../types';

interface HeroProps {
  data: HeroBannerData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const handleCtaClick = () => {
    document.getElementById('offer_cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Media (Video or Image) */}
      <div className="absolute inset-0 z-0">
        {data.media.video_src ? (
           <video 
             autoPlay 
             muted 
             loop 
             playsInline 
             className="w-full h-full object-cover"
             poster={data.media.placeholder_src || data.media.src}
           >
             <source src={data.media.video_src} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
        ) : (
          <img
            src={data.media.placeholder_src || data.media.src}
            alt={data.media.alt}
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg max-w-4xl mx-auto">
          {data.headline}
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-light">
          {data.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Primary CTA */}
          <button
            onClick={handleCtaClick}
            className="w-full sm:w-auto bg-brand-gold hover:bg-yellow-400 text-brand-blue font-extrabold text-lg py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] transition transform hover:-translate-y-1"
          >
            {data.cta_primary} <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>

          {/* Secondary CTA (Phone) */}
          <a
            href={`tel:${data.cta_secondary.replace(/[^\d]/g, '')}`}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-lg py-4 px-8 rounded-lg transition"
          >
            <i className="fa-solid fa-phone mr-2"></i>
            {data.cta_secondary}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;