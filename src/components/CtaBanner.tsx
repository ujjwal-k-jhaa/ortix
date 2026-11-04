import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onStartShippingClick: () => void;
  onScheduleDemoClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onStartShippingClick,
  onScheduleDemoClick,
}) => {
  return (
    <section id="cta-banner" className="pt-10 sm:pt-12 pb-8 sm:pb-10 bg-white relative">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Modern Royal Cobalt & Deep Ocean CTA Card with proper layering */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#1D4ED8] bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB] py-12 sm:py-14 px-6 sm:px-10 text-center text-white shadow-[0_24px_50px_-12px_rgba(29,78,216,0.35)] border border-white/20">
          
          {/* Subtle Grid Pattern Overlay on separate layer to prevent CSS collision */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          {/* Apple Glass Ambient Radial Highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.25)_0%,_transparent_70%)] pointer-events-none" />

          {/* Card Content Container */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Headline with perfectly positioned relative flourish */}
            <div className="relative inline-block mb-6">
              {/* Top Flourish: 3 Angled Strokes 彡 anchored cleanly to the top-left of the text */}
              <svg 
                className="absolute -top-5 -left-4 sm:-top-6 sm:-left-7 w-7 h-6 sm:w-8 sm:h-7 text-white/90 drop-shadow-sm select-none" 
                viewBox="0 0 34 26" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 22L12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M14 18L22 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M24 14L30 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                Are You Ready to <br />
                <span className="font-editorial-serif font-semibold italic text-white block mt-1.5 drop-shadow-sm">
                  Get Started?
                </span>
              </h2>
            </div>

            {/* Sub-copy for modern conversion clarity */}
            <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto mb-6 leading-relaxed font-normal">
              Connect your channels, access pre-negotiated tier-1 carrier discounts, and start printing discounted shipping labels in under 2 minutes.
            </p>

            {/* Buttons Row with robust responsive touch targets */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              <button
                onClick={onStartShippingClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#0F172A] rounded-full hover:bg-black transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Start Shipping Now <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScheduleDemoClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-white/10 border border-white/50 backdrop-blur-md rounded-full hover:bg-white/20 hover:border-white transition-all active:scale-[0.98] cursor-pointer"
              >
                Schedule a Demo
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
