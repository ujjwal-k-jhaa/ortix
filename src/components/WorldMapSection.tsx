import React, { useState } from 'react';
import { MapPin, Clock, Anchor, PhoneCall, CheckCircle } from 'lucide-react';

interface LocationHub {
  id: string;
  name: string;
  location: string;
  role: string;
  localTime: string;
  vesselsInPort: number;
  clearanceTime: string;
  phone: string;
}

export const WorldMapSection: React.FC = () => {
  const [activeHubId, setActiveHubId] = useState<string>('santorini');

  const hubs: LocationHub[] = [
    {
      id: 'santorini',
      name: 'Serenity Cove Station',
      location: 'Santorini, Greece',
      role: 'Primary Mediterranean Operations Center',
      localTime: '16:45 EET',
      vesselsInPort: 18,
      clearanceTime: '1.8 hrs',
      phone: '+30 2286 041 900',
    },
    {
      id: 'rotterdam',
      name: 'North Sea Euro Gateway',
      location: 'Rotterdam, Netherlands',
      role: 'Continental Intermodal Relay',
      localTime: '15:45 CET',
      vesselsInPort: 34,
      clearanceTime: '2.1 hrs',
      phone: '+31 10 252 8000',
    },
    {
      id: 'longbeach',
      name: 'Pacific Freight Gate',
      location: 'Long Beach, California, USA',
      role: 'Transpacific Automated Terminal',
      localTime: '06:45 PST',
      vesselsInPort: 27,
      clearanceTime: '2.4 hrs',
      phone: '+1 562 283 7000',
    },
    {
      id: 'singapore',
      name: 'Straits Logistics Apex',
      location: 'Port of Singapore',
      role: 'APAC Cross-Dock Hub',
      localTime: '22:45 SGT',
      vesselsInPort: 52,
      clearanceTime: '1.2 hrs',
      phone: '+65 6771 7000',
    },
  ];

  const activeHub = hubs.find((h) => h.id === activeHubId) || hubs[0];

  return (
    <section id="locations" className="py-12 sm:py-14 bg-[#F8FAFC] border-t border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-slate-400 mb-2">
            FIND LOCATION <span className="text-[#2563EB]">🌐</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight">
            Wide-Reaching Customer Care.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Worldwide carrier coordination, dedicated port marshals, and frictionless customs support across all major maritime corridors.
          </p>
        </div>

        {/* Map Display Card */}
        <div className="relative rounded-3xl bg-white border border-slate-200/80 shadow-xs p-4 sm:p-6 overflow-visible">
          
          {/* Authentic Full Map Graphic */}
          <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center">
            <img
              src="/assets/extracted/world_map_full.png"
              alt="Meridian Wide-Reaching Customer Care World Map with Serenity Cove Global Hubs"
              className="w-full h-auto object-contain block drop-shadow-xs max-h-[500px]"
              loading="eager"
            />
          </div>

          {/* Terminal & Dispatcher Interactive Bar */}
          <div className="mt-4 sm:mt-5 pt-4 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 bg-[#F8FAFC] p-4 sm:p-5 rounded-2xl">
            
            {/* Hub Selector Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 mr-2 uppercase tracking-wider">
                Select Terminal:
              </span>
              {hubs.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setActiveHubId(hub.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    activeHubId === hub.id
                      ? 'bg-[#0F172A] text-white shadow-2xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-[#2563EB] hover:text-[#2563EB]'
                  }`}
                >
                  {hub.location.split(',')[0]}
                </button>
              ))}
            </div>

            {/* Active Terminal Telemetry Details */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Local Time: <strong className="text-slate-900">{activeHub.localTime}</strong></span>
              </div>

              <div className="flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Berths Active: <strong className="text-slate-900">{activeHub.vesselsInPort}</strong></span>
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Avg Clearance: <strong className="text-slate-900">{activeHub.clearanceTime}</strong></span>
              </div>

              <a
                href={`tel:${activeHub.phone}`}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[11px] font-semibold text-slate-800 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
              >
                <PhoneCall className="w-3 h-3 text-[#2563EB]" /> Contact Port Agent
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
