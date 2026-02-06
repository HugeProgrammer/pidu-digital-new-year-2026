
import React from 'react';

const CEOSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="relative group cursor-pointer mb-16">
        {/* Cinematic Spotlight Backlight */}
        <div className="absolute -inset-10 bg-gradient-to-b from-[#D4AF37]/30 to-transparent rounded-full blur-[80px] group-hover:blur-[120px] transition-all duration-1000"></div>
        
        {/* Main Photo Frame */}
        <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden gold-border p-1.5 shadow-[0_0_100px_rgba(212,175,55,0.2)] transition-all duration-1000 group-hover:shadow-[0_0_150px_rgba(212,175,55,0.4)] spotlight">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
            alt="Giám đốc PIDU Digital" 
            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 animate-shine opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute -top-10 -left-10 text-5xl group-hover:scale-125 transition-transform duration-700">🏆</div>
        <div className="absolute bottom-0 -right-5 text-4xl animate-bounce">🧧</div>
      </div>

      <div className="relative z-10 space-y-6">
        <div className="inline-block px-6 py-2 border border-[#D4AF37]/30 rounded-full mb-4">
            <span className="text-xs tracking-[0.8em] font-bold text-[#D4AF37] uppercase">Visionary Leader</span>
        </div>
        
        <h3 className="text-5xl md:text-7xl font-serif font-black gold-gradient-text tracking-tight">Nguyễn Văn A</h3>
        <p className="text-xl md:text-2xl text-white/80 tracking-[0.4em] uppercase font-light">
            Founder & CEO – <span className="font-bold text-white">PIDU Digital</span>
        </p>
        
        <div className="max-w-3xl mx-auto mt-12 px-6">
            <p className="text-xl md:text-3xl font-serif italic text-white/70 leading-relaxed relative">
                <span className="absolute -top-8 -left-8 text-8xl text-[#D4AF37]/10">"</span>
                Năm 2026 sẽ là cột mốc lịch sử. Chúng ta không chỉ đi cùng nhau, chúng ta cùng nhau kiến tạo tương lai số bền vững và thịnh vượng.
                <span className="absolute -bottom-16 -right-8 text-8xl text-[#D4AF37]/10">"</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
