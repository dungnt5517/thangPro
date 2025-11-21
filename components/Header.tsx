import React, { useState, useEffect } from 'react';

interface HeaderProps {
  title: string;
  phone: string;
}

const Header: React.FC<HeaderProps> = ({ title, phone }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brandName = title.split('-')[0].trim() || title;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-brand-blue/90 backdrop-blur-md shadow-xl py-3 border-b border-white/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">
            <span className="text-transparent bg-clip-text bg-gold-gradient">
              {brandName}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:block text-slate-200 hover:text-brand-gold transition font-medium text-sm tracking-widest uppercase"
          >
            Dịch vụ
          </button>
          <button
            onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:block text-slate-200 hover:text-brand-gold transition font-medium text-sm tracking-widest uppercase"
          >
            Quy trình
          </button>
          <a
            href={`tel:${phone.replace(/[^\d]/g, '')}`}
            className="bg-gold-gradient text-brand-blue font-bold py-3 px-6 rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            <i className="fa-solid fa-phone-volume"></i>
            <span className="hidden sm:inline">{phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;