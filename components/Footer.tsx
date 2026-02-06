
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="mb-6 opacity-30 hover:opacity-100 transition-opacity">
          <span className="font-serif font-bold text-2xl gold-gradient-text tracking-widest">PIDU DIGITAL</span>
        </div>
        <p className="text-xs md:text-sm tracking-widest text-[#D4AF37]/50 uppercase">
          &copy; 2026 PIDU Digital. Happy New Year.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
