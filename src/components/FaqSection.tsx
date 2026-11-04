import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do Meridian's up to 84% pre-negotiated carrier discounts work?",
      answer:
        "Through our aggregated volume agreements with top tier-1 carriers (CMA CGM, Maersk, MSC, Hapag-Lloyd, FedEx, and DHL), all merchants on our platform instantly gain access to commercial contract pricing without needing to meet individual multi-million-dollar annual volume minimums.",
    },
    {
      question: "Can I connect my existing carrier API keys and corporate accounts?",
      answer:
        "Yes. Meridian supports hybrid carrier orchestration. You can bring your own negotiated contract accounts via direct EDI/API or toggle between your custom rates and our master network rates to always secure the most cost-effective routing per shipment lane.",
    },
    {
      question: "How does automated customs pre-clearance prevent terminal demurrage?",
      answer:
        "Our customs engine analyzes shipping manifests against harmonized HS codes and electronically submits export/import declarations to port authorities 48 hours prior to vessel arrival, ensuring immediate green-lane release upon container discharge.",
    },
    {
      question: "What e-commerce platforms, ERPs, and WMS software are supported?",
      answer:
        "Meridian integrates out-of-the-box with over 100+ systems including Shopify Plus, WooCommerce, Amazon FBA, Magento, NetSuite, SAP S/4HANA, Microsoft Dynamics, and ShipStation via webhooks and bi-directional REST APIs.",
    },
    {
      question: "What marine cargo insurance coverage is included?",
      answer:
        "All shipments booked through Meridian include basic carrier liability, with optional instant primary all-risk cargo insurance up to $1,000,000 per container covering damage, loss, general average, and temperature deviation.",
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-14 bg-white border-t border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-slate-400 mb-2">
            FREQUENTLY ASKED QUESTIONS <HelpCircle className="w-3.5 h-3.5 text-[#2563EB]" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
            Everything You Need to Know <br />
            About Shipping with Meridian.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Got questions about carrier rates, customs documentation, or API integrations? We have answers.
          </p>
        </div>

        {/* Accordion List with compact spacing */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="apple-glass rounded-2xl overflow-hidden transition-all duration-200 border border-slate-200/80"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#2563EB] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-0.5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
