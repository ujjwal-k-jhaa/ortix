import React, { useState } from 'react';
import { Star, Quote, ArrowRight, TrendingUp, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'retail' | 'industrial'>('all');

  const testimonials = [
    {
      id: 1,
      category: 'retail',
      quote:
        'We cut our transpacific container dwell times by 4.2 days and saved over $1.4M in carrier demurrage within our first two quarters using Meridian.',
      author: 'Elena Rostova',
      role: 'VP of Global Logistics',
      company: 'Kinetix Consumer Electronics',
      metric: '4.2 Days Faster Transit',
      avatarBg: 'bg-blue-600',
      initials: 'ER',
      stars: 5,
    },
    {
      id: 2,
      category: 'industrial',
      quote:
        'The automated customs pre-clearance with Rotterdam and Singapore has made our high-value European deliveries completely frictionless and audit-ready.',
      author: 'Marcus Vance',
      role: 'Chief Supply Chain Officer',
      company: 'Aveline Precision Hardware',
      metric: '99.8% Customs Clearance SLA',
      avatarBg: 'bg-slate-900',
      initials: 'MV',
      stars: 5,
    },
    {
      id: 3,
      category: 'retail',
      quote:
        'Managing 100+ sales channels from a single barcode scan-to-ship console while accessing 84% postage discounts transformed our operating margins.',
      author: 'David Zhang',
      role: 'Founder & CEO',
      company: 'Omnistore Global Direct',
      metric: '84% Average Postage Saving',
      avatarBg: 'bg-emerald-600',
      initials: 'DZ',
      stars: 5,
    },
  ];

  const filtered = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeTab);

  return (
    <section id="testimonials" className="py-12 sm:py-14 bg-[#F8FAFC] border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-slate-400 mb-2.5">
              TESTIMONIALS &amp; IMPACT <span className="text-yellow-500">★</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
              Trusted by Merchants Shipping <br />
              Across 220+ Countries.
            </h2>
          </div>

          {/* Interactive filter pills */}
          <div className="flex items-center gap-2 p-1.5 bg-white border border-slate-200 rounded-full shadow-2xs self-start md:self-end">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#0F172A] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              All Merchants
            </button>
            <button
              onClick={() => setActiveTab('retail')}
              className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'retail'
                  ? 'bg-[#0F172A] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              E-Commerce &amp; Retail
            </button>
            <button
              onClick={() => setActiveTab('industrial')}
              className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'industrial'
                  ? 'bg-[#0F172A] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              Manufacturing &amp; Freight
            </button>
          </div>
        </div>

        {/* 3 Apple Glass Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="apple-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Metric Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50/90 border border-blue-100 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {item.metric}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Profile */}
              <div className="pt-5 border-t border-slate-200/60 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-sm shrink-0`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                    {item.author}
                  </h4>
                  <p className="text-[10px] text-slate-500">
                    {item.role} · <strong className="font-semibold text-slate-700">{item.company}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Proof Metrics Strip */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-5 apple-glass rounded-3xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-center">
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">130,000+</span>
            <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Active Connected Merchants</p>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#2563EB] tracking-tight">84%</span>
            <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Max Commercial Discount</p>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">99.4%</span>
            <p className="text-[11px] text-slate-500 mt-0.5 font-medium">On-Time Maritime SLA</p>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#2563EB] tracking-tight">$2.4B+</span>
            <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Global Cargo Managed Annually</p>
          </div>
        </div>

      </div>
    </section>
  );
};
