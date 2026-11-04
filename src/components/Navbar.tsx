import React, { useState, useEffect } from 'react';
import { 
  Phone, Menu, X, ArrowRight, Clock, CheckCircle2, 
  Sparkles, Compass, Shield
} from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onGetStartedClick: () => void;
  onTrackClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onContactClick, 
  onGetStartedClick,
  onTrackClick 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-3.5 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_24px_rgba(15,23,42,0.04)]' 
            : 'py-5 bg-white/75 backdrop-blur-md border-b border-slate-200/50'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
          
          {/* Brand Lockup */}
          <div className="flex items-center gap-7">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-[#0F172A] rounded-xs group-hover:scale-110 group-hover:bg-[#2563EB] transition-all duration-300 shadow-2xs" />
                <div className="w-4 h-4 bg-[#2563EB] rounded-full group-hover:scale-110 group-hover:bg-[#0F172A] transition-all duration-300 shadow-2xs" />
              </div>
              <span className="text-xl font-extrabold tracking-widest text-[#0F172A] font-sans group-hover:text-[#2563EB] transition-colors">
                MERIDIAN
              </span>
              <span className="hidden lg:inline-flex items-center gap-1 ml-1 text-[10px] font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 border border-blue-100/80 px-2.5 py-0.5 rounded-full">
                Cargo Control
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7 text-xs font-semibold text-slate-600 pl-4 border-l border-slate-200/80">
              <a href="#how-it-works" className="hover:text-[#2563EB] transition-colors">How It Works</a>
              <a href="#solutions" className="hover:text-[#2563EB] transition-colors">Solutions</a>
              <a href="#locations" className="hover:text-[#2563EB] transition-colors">Global Hubs</a>
              <a href="#fulfillment" className="hover:text-[#2563EB] transition-colors">Fulfillment</a>
            </nav>
          </div>

          {/* Center Minimal Menu Pill */}
          <div className="flex items-center">
            <button
              onClick={() => setQuickMenuOpen(!quickMenuOpen)}
              className="group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 hover:border-[#2563EB] bg-white shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
              aria-label="Toggle Quick Navigation Menu"
            >
              <div className="flex flex-col gap-[3px] items-center justify-center">
                <span className={`h-[1.5px] bg-slate-800 group-hover:bg-[#2563EB] rounded-full transition-all duration-200 ${quickMenuOpen ? 'w-4 rotate-45 translate-y-[4.5px]' : 'w-4'}`} />
                <span className={`h-[1.5px] bg-slate-800 group-hover:bg-[#2563EB] rounded-full transition-all duration-200 ${quickMenuOpen ? 'w-4 -rotate-45 -translate-y-[0px]' : 'w-4'}`} />
              </div>
              <span className="text-[11px] font-semibold text-slate-700 hidden sm:inline group-hover:text-[#2563EB]">
                Menu
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Live Status Badge */}
            <div className="hidden lg:flex items-center gap-2 text-[11px] font-medium text-slate-700 bg-blue-50/80 border border-blue-200/70 px-3 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
              </span>
              <span>All 6 Corridors Active</span>
            </div>

            {/* Phone */}
            <div className="relative">
              <a
                href="tel:+13784737781"
                onMouseEnter={() => setShowPhoneTooltip(true)}
                onMouseLeave={() => setShowPhoneTooltip(false)}
                className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-800 hover:text-[#2563EB] px-2.5 py-1.5 rounded-full hover:bg-slate-100 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center">
                  <Phone className="w-3 h-3" />
                </div>
                <span>+1 378 473 7781</span>
              </a>

              {/* Tooltip */}
              {showPhoneTooltip && (
                <div className="absolute right-0 top-full mt-2 w-56 p-3.5 bg-[#0F172A] text-white text-[11px] rounded-2xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 pointer-events-none border border-slate-700">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#2563EB]" /> 24/7 Meridian Maritime Ops
                  </p>
                  <p className="text-slate-300 mt-1 text-[10px] leading-relaxed">
                    Direct terminal hotline. Instant customs marshal dispatch.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Us Pill Button */}
            <button
              onClick={onContactClick}
              className="px-5 py-2 text-xs font-semibold text-[#0F172A] bg-white border border-slate-200 rounded-full hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all shadow-2xs hover:shadow-xs cursor-pointer"
            >
              Contact Us
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-black rounded-lg"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Quick Menu Dropdown */}
        {quickMenuOpen && (
          <div className="max-w-[1240px] mx-auto px-6 pt-4 pb-2">
            <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#2563EB]" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Meridian Fast Gateway Services
                  </span>
                </div>
                <button
                  onClick={() => setQuickMenuOpen(false)}
                  className="text-xs text-slate-400 hover:text-black p-1 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <a
                  href="#how-it-works"
                  onClick={() => setQuickMenuOpen(false)}
                  className="p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                >
                  <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider">01. Workflow</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1 group-hover:text-[#2563EB]">
                    How It Works
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Automated order importing, bulk discounted labels, and scan-to-ship.
                  </p>
                </a>

                <a
                  href="#solutions"
                  onClick={() => setQuickMenuOpen(false)}
                  className="p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                >
                  <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider">02. Freight</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1 group-hover:text-[#2563EB]">
                    Logistic Solutions
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Ocean FCL, express air charter, warehousing, and automated customs.
                  </p>
                </a>

                <a
                  href="#locations"
                  onClick={() => setQuickMenuOpen(false)}
                  className="p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                >
                  <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider">03. Network</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1 group-hover:text-[#2563EB]">
                    Global Hubs &amp; Care
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Live berth operations across Santorini, Rotterdam, California, and Singapore.
                  </p>
                </a>

                <a
                  href="#fulfillment"
                  onClick={() => setQuickMenuOpen(false)}
                  className="p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                >
                  <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider">04. Carriers</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1 group-hover:text-[#2563EB]">
                    Carrier Accounts
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Pre-negotiated contract rates with Maersk, CMA CGM, FedEx, and DHL.
                  </p>
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-4 text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> ISO 9001:2015 Certified
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> AEO-F Customs Brokerage
                  </span>
                </div>
                <button
                  onClick={() => {
                    setQuickMenuOpen(false);
                    onGetStartedClick();
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#0F172A] rounded-full hover:bg-[#2563EB] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  Open Shipper Account <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-100 bg-white px-6 py-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#2563EB] transition-colors"
              >
                How It Works
              </a>
              <a
                href="#solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#2563EB] transition-colors"
              >
                Logistic Solutions
              </a>
              <a
                href="#locations"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#2563EB] transition-colors"
              >
                Global Hubs &amp; Care
              </a>
              <a
                href="#fulfillment"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#2563EB] transition-colors"
              >
                Order Fulfillment
              </a>
            </nav>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:+13784737781"
                className="flex items-center gap-2 text-xs font-semibold text-slate-800"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" />
                +1 378 473 7781 (24/7 Port Hotline)
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGetStartedClick();
                }}
                className="w-full py-2.5 text-xs font-semibold text-white bg-[#0F172A] rounded-full flex items-center justify-center gap-2 cursor-pointer hover:bg-[#2563EB] transition-colors"
              >
                Get Started <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
