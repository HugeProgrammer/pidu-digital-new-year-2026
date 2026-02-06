
import React, { useEffect, useState } from 'react';

const wishes = [
  "Chúc PIDU Digital một năm mới bứt phá – sáng tạo – tăng trưởng mạnh mẽ.",
  "2026 – Khẳng định vị thế, vươn tầm quốc tế, kiến tạo giá trị bền vững.",
  "Chúc toàn thể nhân viên PIDU một năm mới tràn đầy hạnh phúc, sức khỏe và thịnh vượng.",
  "Đoàn kết là sức mạnh, sáng tạo là chìa khóa. Chúc PIDU chinh phục mọi đỉnh cao."
];

const Wishes: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % wishes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center py-20 px-4 relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent"></div>
      
      <div className="relative z-10 mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#D4AF37]/50"></div>
            <span className="text-sm tracking-[0.6em] text-[#D4AF37] uppercase font-bold">Lời chúc khai xuân</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]/50"></div>
        </div>
      </div>
      
      <div className="relative h-48 md:h-56 flex items-center justify-center">
        {wishes.map((wish, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-1000 transform max-w-4xl px-8
              ${index === i 
                ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                : 'opacity-0 -translate-y-10 scale-110 blur-xl pointer-events-none'
              }`}
          >
            <p className="text-3xl md:text-5xl font-serif leading-[1.3] font-bold gold-gradient-text italic">
              {wish}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-16 relative z-10">
        {wishes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`group relative h-2 transition-all duration-500 rounded-full 
              ${index === i ? 'w-16 bg-[#D4AF37]' : 'w-4 bg-white/10 hover:bg-white/30'}`}
          >
             {index === i && <div className="absolute -inset-2 bg-[#D4AF37]/20 blur-md rounded-full"></div>}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Wishes;
