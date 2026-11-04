import React, { useState } from 'react';
import { ArrowRight, Check, X, Shield, ArrowUpRight } from 'lucide-react';

interface SolutionItem {
  id: string;
  title: string;
  description: string;
  photo: string;
  tag: string;
  features: string[];
  specs: string;
}

export const LogisticSolutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  const solutions: SolutionItem[] = [
    {
      id: 'international-shipping',
      title: 'International Shipping',
      description:
        'We manage global shipping from origin to destination, providing both air and sea freight options to suit your timeline and budget.',
      photo: '/assets/extracted/photo_intl.png',
      tag: 'Air & Ocean Freight',
      features: ['Full Container Load (FCL)', 'Less than Container Load (LCL)', 'Charter Flight Expedited', 'Automated Bill of Lading'],
      specs: '220+ Countries & Territories Served',
    },
    {
      id: 'last-mile-delivery',
      title: 'Last-Mile Delivery',
      description:
        'Our reliable last-mile delivery service ensures that your products reach the final destination efficiently, providing tracking and real-time updates.',
      photo: '/assets/extracted/photo_lastmile.png',
      tag: 'Express Dispatch',
      features: ['Dynamic Routing AI', 'Recipient SMS / Live ETA', 'Proof of Delivery (POD) Signature', 'Temperature-Controlled Fleets'],
      specs: '99.4% On-Time Delivery Metric',
    },
    {
      id: 'warehousing-distribution',
      title: 'Warehousing & Distribution',
      description:
        'Our strategically located warehouses ensure fast, secure storage and distribution of your products. With flexible storage options.',
      photo: '/assets/extracted/photo_warehouse.png',
      tag: 'Cross-Docking & Storage',
      features: ['Bonded Customs Facilities', 'Barcode WMS Inventory Sync', 'Same-day Pick & Pack', 'Climate-Controlled Racks'],
      specs: '1.2M+ sq. ft. Multi-hub Network',
    },
    {
      id: 'supply-optimization',
      title: 'Supply Optimization',
      description:
        'Our expert team analyzes and improves your supply chain, eliminating bottlenecks and optimizing shipping routes for peak profitability.',
      photo: '/assets/extracted/photo_supply.png',
      tag: 'Analytics & Logistics AI',
      features: ['Freight Cost Benchmarking', 'Container Space Maximization', 'Carrier SLA Audits', 'Emissions Carbon Accounting'],
      specs: 'Avg 28% Total Cost Reduction',
    },
    {
      id: 'customs-clearance',
      title: 'Customs Clearance',
      description:
        'We navigate the complexities of customs regulations, import/export duties, and compliance filings to ensure frictionless border crossings.',
      photo: '/assets/extracted/photo_customs.png',
      tag: 'Regulatory Compliance',
      features: ['HS Code Harmonized Classification', 'Tariff & Duty Mitigation', 'Pre-Clearance Electronic Filing', 'Audit-Ready Documentation'],
      specs: '100% Licensed Broker Clearance',
    },
  ];

  return (
    <section id="solutions" className="py-12 sm:py-14 bg-white border-t border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-slate-400 mb-2.5">
              LOGISTIC SOLUTIONS <span className="text-sm">🚀</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
              Comprehensive &amp; Reliable <br />
              Logistic Solutions
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-xs sm:text-sm text-slate-500 max-w-xs leading-relaxed">
              Seamless, secure, and scalable shipping solutions
            </p>
            <button
              onClick={() => setSelectedSolution(solutions[0])}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F172A] rounded-full hover:bg-[#2563EB] transition-all shadow-xs hover:translate-x-0.5 cursor-pointer shrink-0"
            >
              See All <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bento Grid with compact heights */}
        <div className="space-y-4 sm:space-y-5">
          
          {/* Top Row: 2 Large Landscape Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {solutions.slice(0, 2).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedSolution(item)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer h-[280px] sm:h-[310px] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 bg-slate-900"
              >
                {/* Background Photography with smooth zoom */}
                <img
                  src={item.photo}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/50 to-transparent pointer-events-none" />

                {/* Top Category Badge & Hover Action */}
                <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {item.tag}
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-blue-200" />
                  </div>
                </div>

                {/* Typography */}
                <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end text-white pointer-events-none">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2 tracking-tight group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-200 line-clamp-3 leading-relaxed max-w-lg font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {solutions.slice(2, 5).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedSolution(item)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer h-[240px] sm:h-[260px] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 bg-slate-900"
              >
                {/* Background Photography */}
                <img
                  src={item.photo}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/50 to-transparent pointer-events-none" />

                {/* Top Category Badge & Hover Action */}
                <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white/90 bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                    {item.tag}
                  </span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-200" />
                  </div>
                </div>

                {/* Typography */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end text-white pointer-events-none">
                  <h3 className="text-lg font-bold mb-1 tracking-tight group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-3 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal when clicked */}
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-black rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                  {selectedSolution.tag}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-slate-500 font-medium">{selectedSolution.specs}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedSolution.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{selectedSolution.description}</p>

              <div className="mb-6">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Service Specifications &amp; Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedSolution.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Need specific port lane rates?</span>
                <button
                  onClick={() => {
                    setSelectedSolution(null);
                    const el = document.getElementById('cta-banner');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#2563EB] rounded-full hover:bg-[#1D4ED8] transition-colors cursor-pointer"
                >
                  Request Rate Card
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
