import React from 'react';

interface FloatingCTAProps {
  phone: string;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ phone }) => {
  return (
    <a
      href={`tel:${phone.replace(/[^\d]/g, '')}`}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-brand-gold text-brand-blue rounded-full shadow-[0_0_20px_rgba(245,158,11,0.6)] hover:scale-110 transition-transform duration-300 animate-bounce hover:animate-none"
      aria-label="Call Now"
    >
      <span className="absolute w-full h-full rounded-full bg-brand-gold opacity-75 animate-ping"></span>
      <i className="fa-solid fa-phone text-2xl relative z-10"></i>
    </a>
  );
};

export default FloatingCTA;