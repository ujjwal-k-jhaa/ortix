import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, ShieldCheck, Mail, Phone, Building } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Ocean Freight & FCL',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-black rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-blue-100 text-[#2563EB] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              A Meridian maritime cargo specialist from your nearest regional terminal dispatch will contact you within 15 minutes.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 text-xs font-semibold text-white bg-[#0F172A] rounded-full hover:bg-[#2563EB] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                Direct Dispatch Hotline
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">Contact Meridian Logistics</h3>
              <p className="text-xs text-slate-500 mt-1">
                Reach our 24/7 port agents or call <a href="tel:+13784737781" className="font-semibold text-[#2563EB] underline">+1 378 473 7781</a>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Vance"
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Company / Merchant</label>
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Global Traders LLC"
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Work Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Primary Requirement</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB] bg-white"
                >
                  <option>Ocean Freight &amp; FCL (Full Container Load)</option>
                  <option>Less Than Container Load (LCL) Consolidation</option>
                  <option>Expedited Air Cargo</option>
                  <option>Warehousing &amp; Fulfillment Storage</option>
                  <option>Customs Clearance Brokerage</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Shipment Notes / Port of Origin</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Estimated volume, origin port, preferred schedule..."
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 text-xs font-semibold text-white bg-[#0F172A] rounded-full hover:bg-[#2563EB] transition-colors cursor-pointer"
              >
                Send Request to Port Agent
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [booked, setBooked] = useState(false);
  const [date, setDate] = useState('2026-11-05');
  const [time, setTime] = useState('14:00 GMT');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-black rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 bg-blue-100 text-[#2563EB] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Demo Scheduled!</h3>
            <p className="text-xs text-slate-500">
              Calendar invite sent for <strong>{date} at {time}</strong>. A Meridian enterprise logistics engineer will demonstrate automated shipping workflows.
            </p>
            <button
              onClick={() => {
                setBooked(false);
                onClose();
              }}
              className="mt-3 px-5 py-2 text-xs font-semibold text-white bg-[#0F172A] rounded-full hover:bg-[#2563EB]"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                Interactive Walkthrough
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Schedule a Live Demo</h3>
              <p className="text-xs text-slate-500 mt-1">
                See how 130,000+ merchants automate barcode scanning, tracking updates, and top-tier carrier rates with Meridian.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setBooked(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Time Slot</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB] bg-white"
                >
                  <option>10:00 GMT - Morning Slot</option>
                  <option>14:00 GMT - Afternoon Slot</option>
                  <option>18:00 GMT - Evening Slot</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Your Work Email</label>
                <input
                  required
                  type="email"
                  placeholder="merchant@company.com"
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 text-xs font-semibold text-white bg-[#2563EB] rounded-full hover:bg-[#1D4ED8] transition-colors cursor-pointer"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [merchantType, setMerchantType] = useState('E-Commerce & Retail (100+ channels)');
  const [monthlyShipments, setMonthlyShipments] = useState('500 - 2,500 packages');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-black rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              Step {step} of 2
            </span>
            <div className="flex gap-1">
              <span className={`w-6 h-1 rounded-full ${step >= 1 ? 'bg-[#2563EB]' : 'bg-slate-200'}`} />
              <span className={`w-6 h-1 rounded-full ${step === 2 ? 'bg-[#2563EB]' : 'bg-slate-200'}`} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Start Shipping With Meridian</h3>
          <p className="text-xs text-slate-500 mt-1">
            Unlock pre-negotiated tier-1 carrier discounts and automated fulfillment APIs.
          </p>
        </div>

        {step === 1 ? (
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Business Profile</label>
              <select
                value={merchantType}
                onChange={(e) => setMerchantType(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB] bg-white"
              >
                <option>E-Commerce &amp; Retail (100+ channels)</option>
                <option>B2B Wholesale &amp; Freight Forwarding</option>
                <option>Manufacturer &amp; Industrial Exporter</option>
                <option>Drop-shipping &amp; 3PL Provider</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Monthly Shipment Volume</label>
              <select
                value={monthlyShipments}
                onChange={(e) => setMonthlyShipments(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB] bg-white"
              >
                <option>Under 100 shipments / month</option>
                <option>100 - 500 shipments / month</option>
                <option>500 - 2,500 packages</option>
                <option>2,500+ High Volume Enterprise</option>
              </select>
            </div>

            <div className="p-3 bg-blue-50/70 rounded-2xl border border-blue-100 flex items-center justify-between text-xs">
              <span className="text-slate-600">Eligible Discount Tier:</span>
              <strong className="text-blue-700 font-bold">Tier A (84% Carrier Commercial Saving)</strong>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-2.5 text-xs font-semibold text-white bg-[#0F172A] rounded-full hover:bg-[#2563EB] transition-colors cursor-pointer"
            >
              Continue to Account Setup →
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Account provisioned! Welcome to Meridian Global Logistics.');
              onClose();
              setStep(1);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Company / Store Name</label>
              <input
                required
                type="text"
                placeholder="Pacific Merchant Group"
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Work Email</label>
              <input
                required
                type="email"
                placeholder="admin@store.com"
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB]"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200 cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 py-2.5 text-xs font-semibold text-white bg-[#2563EB] rounded-full hover:bg-[#1D4ED8] transition-colors cursor-pointer"
              >
                Activate Shipper Account
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
