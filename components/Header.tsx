import React, { useState, useEffect } from 'react';

interface HeaderProps {
  title: string;
  phone: string;
}

const Header: React.FC<HeaderProps> = ({ title, phone }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extract main brand name if possible, otherwise use title
  const brandName = title.split('-')[0].trim() || title;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-blue/95 shadow-lg py-2 backdrop-blur-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo Area */}
          <div className="text-2xl font-bold text-white">
            <span className="text-brand-gold border-2 border-brand-gold px-2 py-1 rounded-md">
              {brandName.substring(0, 5)}
            </span>
            <span className="ml-1">{brandName.substring(5)}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => document.getElementById('offer_cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:block text-white hover:text-brand-gold transition font-medium"
          >
            Liên hệ
          </button>
          <a
            href={`tel:${phone.replace(/[^\d]/g, '')}`}
            className="bg-brand-gold text-brand-blue font-bold py-2 px-4 rounded-full hover:bg-yellow-400 transition shadow-md animate-pulse flex items-center gap-2"
          >
            <i className="fa-solid fa-phone"></i>
            <span className="hidden sm:inline">GỌI NGAY</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;