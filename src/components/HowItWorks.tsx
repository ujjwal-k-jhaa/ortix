import React, { useState } from 'react';
import { Box, Tag, Smartphone, Percent, CheckCircle, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(2); // Card 3 (Manage Shipping) is highlighted by default

  const cards = [
    {
      id: 0,
      icon: Box,
      title: 'Import Details',
      description:
        'Import orders from 100+ channels, marketplaces, ERPs, CRMs, or IMSs with automated shipping configurations.',
      stats: '100+ Channels',
    },
    {
      id: 1,
      icon: Tag,
      title: 'Discounted Postage',
      description:
        'Access up to 84% shipping discounts, compare top carrier rates, and print labels individually or in batches of 500.',
      stats: '84% Discount',
    },
    {
      id: 2,
      icon: Smartphone,
      title: 'Manage Shipping',
      description:
        'Use scan-based workflows, bulk updates, and automation to quickly fulfill your daily shipments with ease.',
      stats: 'Fast Barcode Fulfill',
    },
    {
      id: 3,
      icon: Percent,
      title: 'Instant Tracking',
      description:
        'ShipStation instantly updates tracking to the selling channel and customer after shipping for seamless order management.',
      stats: 'Real-time Webhook',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-14 bg-[#F8FAFC]">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-slate-400 mb-2.5">
              HOW IT WORKS <span className="text-sm">🤝</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
              The Most Affordable &amp; <br className="hidden sm:inline" />
              Efficient Way to Ship Products
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
            Get the best shipping rates while streamlining your logistics process for faster, easier, and more cost-effective deliveries.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, idx) => {
            const isFeatured = activeCardIndex === idx;
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                onClick={() => setActiveCardIndex(idx)}
                className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[280px] ${
                  isFeatured
                    ? 'bg-[#0F172A] text-white shadow-xl scale-[1.01] ring-1 ring-blue-500/30'
                    : 'bg-white text-slate-900 border border-slate-200/80 hover:border-[#2563EB]/40 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Icon Container */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center mb-5 transition-colors ${
                      isFeatured ? 'bg-blue-600/20 text-[#60A5FA]' : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-bold mb-2.5 tracking-tight ${
                      isFeatured ? 'text-white' : 'text-[#0F172A]'
                    }`}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs leading-relaxed ${
                      isFeatured ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Bottom subtle detail badge */}
                <div
                  className={`mt-5 pt-3.5 border-t text-[11px] font-medium flex items-center justify-between ${
                    isFeatured ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-400'
                  }`}
                >
                  <span>{card.stats}</span>
                  {isFeatured && (
                    <span className="flex items-center gap-1 text-[#60A5FA] font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" /> Selected
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
