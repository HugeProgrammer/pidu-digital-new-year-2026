
import React, { useState, useRef } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Audio play blocked", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-8 right-8 z-[100]">
      {/* Epic Cinematic Music Placeholder - Royalty Free Or Epic Style */}
      <audio 
        ref={audioRef} 
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" 
      />
      
      <button 
        onClick={toggleMusic}
        className="flex items-center gap-3 group bg-black/40 backdrop-blur-md border border-[#D4AF37]/30 px-4 py-2 rounded-full hover:bg-[#D4AF37]/20 transition-all duration-500 hover:scale-105 shadow-lg"
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
            {isPlaying ? (
                <div className="flex gap-1 items-end h-4">
                    <div className="w-1 bg-[#D4AF37] animate-[music-bar_0.8s_ease-in-out_infinite]"></div>
                    <div className="w-1 bg-[#D4AF37] animate-[music-bar_1.2s_ease-in-out_infinite]"></div>
                    <div className="w-1 bg-[#D4AF37] animate-[music-bar_1.0s_ease-in-out_infinite]"></div>
                </div>
            ) : (
                <div className="text-[#D4AF37]">▶</div>
            )}
            <div className={`absolute inset-0 rounded-full border-2 border-[#D4AF37]/20 ${isPlaying ? 'animate-ping' : ''}`}></div>
        </div>
        <span className="text-[10px] tracking-[0.3em] font-bold text-[#D4AF37] uppercase">
          {isPlaying ? 'BẬT NHẠC' : 'KHÁM PHÁ'}
        </span>
      </button>

      <style>{`
        @keyframes music-bar {
            0%, 100% { height: 4px; }
            50% { height: 16px; }
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
