import React from 'react';

export const PartnerLogos: React.FC = () => {
  return (
    <div className="w-full py-4 sm:py-5 border-t border-b border-slate-200/60 bg-white/60">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-5 sm:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          
          {/* Lightbox */}
          <div className="flex items-center gap-2 text-slate-800 hover:text-[#2563EB] transition-colors cursor-default">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs sm:text-sm font-bold tracking-tight">Lightbox</span>
          </div>

          {/* Nietzsche */}
          <div className="flex items-center gap-2 text-slate-800 hover:text-[#2563EB] transition-colors cursor-default">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.5-6.5l-2.1 2.1m-8.8 8.8l-2.1 2.1m0-13l2.1 2.1m8.8 8.8l2.1 2.1" strokeLinecap="round" />
            </svg>
            <span className="text-xs sm:text-sm font-bold tracking-tight">Nietzsche</span>
          </div>

          {/* GlobalBank */}
          <div className="flex items-center gap-2 text-slate-800 hover:text-[#2563EB] transition-colors cursor-default">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              <polygon points="12 7 17 10 17 14 12 17 7 14 7 10 12 7" fill="currentColor" opacity="0.3" />
            </svg>
            <span className="text-xs sm:text-sm font-bold tracking-tight">GlobalBank</span>
          </div>

          {/* Spherule */}
          <div className="flex items-center gap-2 text-slate-800 hover:text-[#2563EB] transition-colors cursor-default">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="8" />
              <ellipse cx="12" cy="12" rx="8" ry="3" />
            </svg>
            <span className="text-xs sm:text-sm font-bold tracking-tight">Spherule</span>
          </div>

          {/* FeatherDev */}
          <div className="flex items-center gap-2 text-slate-800 hover:text-[#2563EB] transition-colors cursor-default">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
              <line x1="16" y1="8" x2="2" y2="22" />
              <line x1="17.5" y1="15" x2="9" y2="15" />
            </svg>
            <span className="text-xs sm:text-sm font-bold tracking-tight">FeatherDev</span>
          </div>

          {/* Lightbox */}
          <div className="hidden sm:flex items-center gap-2 text-slate-800 hover:text-[#2563EB] transition-colors cursor-default">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs sm:text-sm font-bold tracking-tight">Lightbox</span>
          </div>

          {/* Boltshift */}
          <div className="flex items-center gap-2 text-slate-800 hover:text-[#2563EB] transition-colors cursor-default">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <polygon points="13 6 8 13 12 13 11 18 16 11 12 11 13 6" fill="currentColor" />
            </svg>
            <span className="text-xs sm:text-sm font-bold tracking-tight">Boltshift</span>
          </div>

        </div>
      </div>
    </div>
  );
};
