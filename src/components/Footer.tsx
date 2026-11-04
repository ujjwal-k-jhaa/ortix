import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Facebook, Twitter, Instagram, Linkedin, AlertCircle, Info } from 'lucide-react';

interface FooterProps {
  onGetStartedClick: () => void;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onGetStartedClick, onContactClick }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <footer className="relative pt-10 sm:pt-12 pb-8 sm:pb-10 overflow-hidden footer-glow border-t border-slate-200/80 bg-[#F8FAFC]">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Top Header of Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-7 border-b border-slate-200 gap-5">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 bg-[#0F172A] rounded-xs" />
              <div className="w-4 h-4 bg-[#2563EB] rounded-full" />
            </div>
            <span className="text-xl font-extrabold tracking-widest text-[#0F172A]">
              MERIDIAN
            </span>
          </div>

          {/* Action on right */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600 font-medium hidden sm:inline">
              Ready to collaborate?
            </span>
            <button
              onClick={onGetStartedClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F172A] rounded-full hover:bg-[#2563EB] transition-all shadow-xs cursor-pointer"
            >
              Get Started <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Columns: Newsletter + Links */}
        <div className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Left Column: Newsletter */}
          <div className="md:col-span-5 max-w-sm">
            <h4 className="text-lg font-bold text-[#0F172A] mb-1 tracking-tight">
              Subscribe newsletter
            </h4>
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              Stay updated with the latest news, freight indices, and commercial discounts!
            </p>

            {subscribed ? (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-full flex items-center gap-2 text-xs text-blue-800">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Thank you! You have been subscribed to Meridian Freight Digest.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Email adress"
                    className="w-full text-xs pl-4 pr-11 py-3 bg-white border border-slate-200 rounded-full focus:outline-none focus:border-[#2563EB] transition-colors shadow-2xs text-slate-800"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center hover:bg-[#1D4ED8] transition-colors cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-[11px] text-red-500 pl-3">{error}</p>}
              </form>
            )}
          </div>

          {/* Column 2: Services */}
          <div className="md:col-span-2">
            <h5 className="text-xs font-bold text-[#0F172A] mb-4 tracking-wider">
              Services
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li><a href="#solutions" className="hover:text-[#2563EB] transition-colors">Ocean FCL &amp; LCL</a></li>
              <li><a href="#solutions" className="hover:text-[#2563EB] transition-colors">Air Charter</a></li>
              <li><a href="#solutions" className="hover:text-[#2563EB] transition-colors">Port Cross-Dock</a></li>
              <li><a href="#solutions" className="hover:text-[#2563EB] transition-colors">Customs Clearance</a></li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div className="md:col-span-2">
            <h5 className="text-xs font-bold text-[#0F172A] mb-4 tracking-wider">
              About
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li><a href="#how-it-works" className="hover:text-[#2563EB] transition-colors">Our Story</a></li>
              <li><a href="#how-it-works" className="hover:text-[#2563EB] transition-colors">Carrier Network</a></li>
              <li><a href="#locations" className="hover:text-[#2563EB] transition-colors">Global Team</a></li>
              <li><a href="#locations" className="hover:text-[#2563EB] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: Help */}
          <div className="md:col-span-3">
            <h5 className="text-xs font-bold text-[#0F172A] mb-4 tracking-wider">
              Help
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li><a href="#faq" className="hover:text-[#2563EB] transition-colors">Terminal FAQs</a></li>
              <li>
                <button
                  onClick={onContactClick}
                  className="hover:text-[#2563EB] transition-colors text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Mandatory Project Showcase Disclaimer */}
        <div className="my-4 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-3 shadow-2xs">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-bold block mb-0.5">Showcase &amp; Testimonial Demonstration Disclaimer:</strong>
            This website is designed for demonstration, educational, and testimonial showcase purposes only. It is not affiliated with, operated by, or representative of a real commercial business or entity. All brand marks, trade names, customer testimonials, and logistics metrics are used strictly for mock presentation.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 sm:pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-500">
          
          {/* Social Icons + Legal links */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500">
              <a href="#privacy" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-black transition-colors">Terms &amp; Conditions</a>
              <a href="#support" className="hover:text-black transition-colors">Support</a>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <span>&copy; Meridian Global Logistics Showcase. All Rights Reserved.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
