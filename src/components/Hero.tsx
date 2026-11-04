import React, { useState } from 'react';
import { ArrowRight, Search, CheckCircle2, ShieldCheck, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import { PartnerLogos } from './PartnerLogos';

interface HeroProps {
  onLearnMoreClick: () => void;
  onEstimateRateClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLearnMoreClick, onEstimateRateClick }) => {
  const [activeTrackingResult, setActiveTrackingResult] = useState<any | null>(null);

  const handleSampleTrack = () => {
    setActiveTrackingResult({
      id: 'MRDN-8842-US',
      vessel: 'CMA CGM ANTOINE DE SAINT EXUPERY',
      carrier: 'Meridian Ocean Freight Alliance',
      origin: 'Shenzhen Yantian Port (YTL)',
      destination: 'Rotterdam Gateway (RTM)',
      status: 'On Water · In Transit (Mediterranean Corridor)',
      eta: 'November 14, 2026',
      progress: 68,
      milestones: [
        { title: 'Origin Wharf Gate-In', date: 'Oct 24, 04:15', done: true, location: 'Shenzhen' },
        { title: 'Customs Export Clearance', date: 'Oct 25, 11:20', done: true, location: 'Port Authority' },
        { title: 'Vessel Loaded & Departed', date: 'Oct 27, 08:30', done: true, location: 'Berth 04' },
        { title: 'Suez Canal Transit', date: 'Nov 02, 14:00', done: true, location: 'Port Said' },
        { title: 'Estimated Berth Discharge', date: 'Nov 14, 18:00', done: false, location: 'Rotterdam ECT' },
      ],
    });
  };

  return (
    <section className="relative pt-6 md:pt-10 pb-0 overflow-hidden bg-white hero-glow">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Top Headline + Value Prop Split matching exact design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-6 md:mb-8">
          
          {/* Headline Column */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-6xl md:text-[66px] lg:text-[74px] font-extrabold text-[#0F172A] tracking-tight leading-[1.04]">
              Seamless <br />
              Cargo <span className="font-editorial-serif font-semibold italic text-[#2563EB]">Control</span>
            </h1>
          </div>

          {/* Right Sub-text & Action */}
          <div className="lg:col-span-5 flex flex-col items-start lg:pt-2 space-y-4 sm:space-y-5">
            <div className="flex items-start gap-2.5">
              <span className="text-[#2563EB] text-xl select-none leading-none mt-0.5">✦</span>
              <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-sm">
                Ship confidently with up to 84% savings from top carriers. Join 130,000+ merchants saving time and money.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F172A] rounded-full hover:bg-[#2563EB] transition-all shadow-xs cursor-pointer hover:translate-x-0.5"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleSampleTrack}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50/50 transition-all cursor-pointer shadow-2xs"
              >
                <Search className="w-3.5 h-3.5 text-[#2563EB]" />
                Track Sample Cargo
              </button>
            </div>
          </div>
        </div>

        {/* Live Container Tracking Result Drawer */}
        {activeTrackingResult && (
          <div className="mb-6 p-5 sm:p-6 bg-white border border-blue-100 rounded-3xl shadow-xl transition-all animate-in fade-in max-w-4xl mx-auto ring-1 ring-blue-50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3.5 border-b border-slate-100 gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                    Meridian Cargo Telemetry
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-900 bg-blue-50 text-[#2563EB] px-2.5 py-0.5 rounded-full border border-blue-100">
                    {activeTrackingResult.id}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {activeTrackingResult.vessel} ({activeTrackingResult.carrier})
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="text-[11px] text-slate-500 block">Estimated Arrival</span>
                  <span className="text-xs font-bold text-blue-700">{activeTrackingResult.eta}</span>
                </div>
                <button
                  onClick={() => setActiveTrackingResult(null)}
                  className="text-xs text-slate-400 hover:text-black p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Route Lane */}
            <div className="py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Origin Port</span>
                <p className="text-xs font-bold text-slate-800">{activeTrackingResult.origin}</p>
              </div>

              <div className="flex-1 max-w-md w-full px-2">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                  <span>Transit Progress</span>
                  <span className="font-bold text-slate-900">{activeTrackingResult.progress}% Completed</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#2563EB] h-full rounded-full transition-all duration-500" style={{ width: `${activeTrackingResult.progress}%` }} />
                </div>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Destination Port</span>
                <p className="text-xs font-bold text-slate-800">{activeTrackingResult.destination}</p>
              </div>
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-3 border-t border-slate-100">
              {activeTrackingResult.milestones.map((m: any, i: number) => (
                <div key={i} className="text-left">
                  <div className="flex items-center gap-1 mb-1">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${m.done ? 'text-[#2563EB]' : 'text-slate-300'}`} />
                    <span className="text-[10px] font-semibold text-slate-400">{m.date}</span>
                  </div>
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">{m.title}</p>
                  <span className="text-[10px] text-slate-500">{m.location}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hero Visual: Red Cargo + Blue Container with Compact Grounding Shadow */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center pt-1 pb-2">
          <img
            src="/assets/extracted/hero_containers_transparent.png"
            alt="Meridian Seamless Cargo Control Red and Blue Shipping Containers"
            className="w-full h-auto object-contain max-h-[420px] drop-shadow-lg select-none relative z-10"
            loading="eager"
          />
          <div className="w-4/5 h-5 bg-slate-950/10 blur-lg rounded-full -mt-3 z-0 pointer-events-none" />
        </div>

      </div>

      {/* Clean Vector Partner Logos Full-Width Strip */}
      <div className="mt-5 sm:mt-6">
        <PartnerLogos />
      </div>
    </section>
  );
};
