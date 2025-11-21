import React from 'react';

interface FooterProps {
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  // Extract clean name
  const name = companyName.split('-')[0].trim();

  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <p className="font-medium text-white mb-2">{name}</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;