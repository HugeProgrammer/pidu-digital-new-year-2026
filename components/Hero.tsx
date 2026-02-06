
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#D4AF37]/5 rounded-full blur-[150px] animate-pulse"></div>
      
      {/* Floating Ornaments */}
      <div className="absolute top-[20%] left-[10%] animate-float opacity-30 pointer-events-none">
        <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-transparent rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-[20%] right-[10%] animate-float opacity-30 pointer-events-none" style={{ animationDelay: '1s' }}>
        <div className="w-32 h-32 bg-gradient-to-tr from-[#D4AF37] to-transparent rounded-full blur-2xl"></div>
      </div>
      <div className="absolute top-10 right-20 text-5xl animate-bounce opacity-20">🧧</div>
      <div className="absolute bottom-40 left-20 text-4xl animate-float opacity-20">🪙</div>

      <div className="text-center px-4 relative z-10 scale-90 md:scale-100">
        <div className="inline-block mb-10">
          <div className="relative">
            <span className="text-6xl animate-pulse block">🐲</span>
            <div className="absolute -inset-4 bg-white/20 blur-xl rounded-full animate-ping"></div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-serif font-black mb-8 gold-gradient-text tracking-tighter uppercase leading-[0.9]">
          Chúc Mừng <br />
          Năm Mới 2026
        </h1>
        
        <div className="h-0.5 w-48 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-10 opacity-50"></div>
        
        <div className="space-y-4">
            <h2 className="text-xl md:text-4xl font-light tracking-[0.4em] uppercase text-white/90">
                PIDU <span className="font-bold gold-gradient-text">Digital</span>
            </h2>
            <p className="text-sm md:text-lg text-[#D4AF37] tracking-[0.6em] font-semibold uppercase animate-pulse">
                Together We Go Further
            </p>
        </div>
      </div>

      {/* Vertical Side Texts */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="[writing-mode:vertical-rl] text-white/10 font-serif text-8xl tracking-widest pointer-events-none uppercase">
          AN KHANG
        </div>
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="[writing-mode:vertical-rl] text-white/10 font-serif text-8xl tracking-widest pointer-events-none uppercase">
          THỊNH VƯỢNG
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
