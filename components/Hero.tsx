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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {data.media.video_src ? (
           <video 
             autoPlay 
             muted 
             loop 
             playsInline 
             className="w-full h-full object-cover opacity-90"
             poster={data.media.placeholder_src || data.media.src}
           >
             <source src={data.media.video_src} type="video/mp4" />
           </video>
        ) : (
          <img
            src={data.media.placeholder_src || data.media.src}
            alt={data.media.alt}
            className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]" 
            style={{ animation: 'none', transition: 'transform 10s ease' }} // Just static clean high res for now or slow zoom
          />
        )}
        
        {/* Gradients for Luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-slate-900/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-24">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-brand-gold/50 bg-brand-gold/10 backdrop-blur-sm animate-fade-in-up">
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">Premium Cleaning Service</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl max-w-5xl mx-auto animate-fade-in-up delay-100">
          {data.headline}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
          {data.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up delay-300">
          {/* Primary CTA */}
          <button
            onClick={handleCtaClick}
            className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gold-gradient py-4 px-10 font-bold text-brand-blue shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 uppercase tracking-wider text-sm">
              {data.cta_primary} <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </span>
            <div className="absolute inset-0 -z-10 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
          </button>

          {/* Secondary CTA */}
          <a
            href={`tel:${data.cta_secondary.replace(/[^\d]/g, '')}`}
            className="group w-full sm:w-auto rounded-full border border-white/30 bg-white/5 backdrop-blur-sm py-4 px-10 font-bold text-white transition-all hover:bg-white/10 hover:border-white/50 uppercase tracking-wider text-sm"
          >
            <i className="fa-solid fa-phone mr-2 text-brand-gold"></i>
            {data.cta_secondary}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;