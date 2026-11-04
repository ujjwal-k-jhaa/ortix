import React, { useState } from 'react';
import { ArrowRight, X, Layers, ShieldCheck, Box, Anchor } from 'lucide-react';

interface FulfillmentSectionProps {
  onCarrierModalOpen?: () => void;
}

export const FulfillmentSection: React.FC<FulfillmentSectionProps> = ({ onCarrierModalOpen }) => {
  const [carrierModalOpen, setCarrierModalOpen] = useState(false);

  const carriersList = [
    { name: 'CMA CGM', type: 'Ocean Freight Carrier', logo: '⚓', discount: 'Up to 78% off', api: 'Direct EDI & Webhook' },
    { name: 'Maersk Line', type: 'Global Intermodal', logo: '🚢', discount: 'Up to 82% off', api: 'API v3 Direct Booking' },
    { name: 'Mediterranean Shipping (MSC)', type: 'Container Lines', logo: '🌐', discount: 'Up to 80% off', api: 'Automated Bill of Lading' },
    { name: 'Hapag-Lloyd', type: 'Reefer & Dry Cargo', logo: '📦', discount: 'Up to 75% off', api: 'Live Telemetry Integration' },
    { name: 'FedEx Freight', type: 'LTL & Express Air', logo: '✈️', discount: 'Up to 84% off', api: 'Instant Barcode Labels' },
    { name: 'DHL Global Forwarding', type: 'Multimodal Transit', logo: '⚡', discount: 'Up to 81% off', api: 'Customs Pre-Clearance' },
  ];

  const handleOpenModal = () => {
    setCarrierModalOpen(true);
    if (onCarrierModalOpen) onCarrierModalOpen();
  };

  return (
    <section id="fulfillment" className="py-12 sm:py-14 bg-white border-t border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-slate-400 mb-2.5">
              WHAT WE OFFER <span className="text-sm">⚡</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
              Streamline Your Order <br />
              Fulfillment Process.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
            Get the best shipping rates while streamlining your logistics process for faster, easier, and more cost-effective deliveries.
          </p>
        </div>

        {/* 2-Column Split: Left Crane Image | Right 2x2 Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          
          {/* Left: Crane Photo with container hoist */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-md group min-h-[380px] flex flex-col justify-end">
              <img
                src="/assets/extracted/crane_2x.png"
                alt="Container crane hoisting CMA CGM container at cargo terminal"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              
              {/* Overlay Badge */}
              <div className="relative z-10 p-5 sm:p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Berth 04 · Live Vessel Hoist
                </span>
                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  Continuous 24/7 container transfer and automated customs manifest indexing.
                </p>
              </div>
            </div>
          </div>

          {/* Right: 2x2 Grid with balanced spacing */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 sm:gap-y-8">
              
              {/* Item 1 */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1.5 tracking-tight">
                    Distribution
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    Use your carriers or find new ones—ShipStation has you covered.
                  </p>
                </div>
                <button
                  onClick={handleOpenModal}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors group cursor-pointer w-fit"
                >
                  <span className="border-b border-slate-900 group-hover:border-[#2563EB] pb-0.5">
                    View Carriers
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ml-1" />
                </button>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1.5 tracking-tight">
                    Order Resources
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    Wherever you sell products, manage orders, or plan your company
                  </p>
                </div>
                <button
                  onClick={handleOpenModal}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors group cursor-pointer w-fit"
                >
                  <span className="border-b border-slate-900 group-hover:border-[#2563EB] pb-0.5">
                    View Carriers
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ml-1" />
                </button>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1.5 tracking-tight">
                    Shipping
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    Whether you have existing carrier accounts and fulfillment partners
                  </p>
                </div>
                <button
                  onClick={handleOpenModal}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors group cursor-pointer w-fit"
                >
                  <span className="border-b border-slate-900 group-hover:border-[#2563EB] pb-0.5">
                    View Carriers
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ml-1" />
                </button>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1.5 tracking-tight">
                    Distribution
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    Use your carriers or find new ones—ShipStation has you covered.
                  </p>
                </div>
                <button
                  onClick={handleOpenModal}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors group cursor-pointer w-fit"
                >
                  <span className="border-b border-slate-900 group-hover:border-[#2563EB] pb-0.5">
                    View Carriers
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ml-1" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Modal: View Carriers Network & Discounts */}
        {carrierModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setCarrierModalOpen(false)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-black rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                  Carrier Integration Network
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">Pre-Negotiated Carrier Accounts</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Connect your existing account API keys or leverage Meridian master commercial contract rates.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {carriersList.map((carrier) => (
                  <div
                    key={carrier.name}
                    className="p-3.5 rounded-2xl border border-slate-200 hover:border-[#2563EB] flex items-center justify-between transition-colors bg-slate-50/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{carrier.logo}</span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{carrier.name}</h4>
                        <p className="text-[11px] text-slate-500">{carrier.type} · {carrier.api}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        {carrier.discount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Need customs brokerage or custom freight contract?</span>
                <button
                  onClick={() => setCarrierModalOpen(false)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#0F172A] rounded-full hover:bg-[#2563EB] transition-colors cursor-pointer"
                >
                  Connect API Keys
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
