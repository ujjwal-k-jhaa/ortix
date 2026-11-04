import React from 'react';
import { Shield, Award, Lock, FileCheck, CheckCircle } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const certifications = [
    { name: 'ISO 9001:2015', label: 'Quality Management Certified', icon: Award },
    { name: 'AEO-F Authorized', label: 'Customs Economic Operator', icon: FileCheck },
    { name: 'FMC Licensed', label: 'Ocean Intermediary #028491', icon: Shield },
    { name: 'C-TPAT Tier 3', label: 'Border Trade Security Partner', icon: CheckCircle },
    { name: 'SOC 2 Type II', label: 'Enterprise Security Verified', icon: Lock },
  ];

  return (
    <div className="w-full py-5 sm:py-6 bg-slate-900 border-t border-b border-slate-800 text-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#60A5FA] block mb-0.5">
              REGULATORY COMPLIANCE &amp; ACCREDITATIONS
            </span>
            <p className="text-xs text-slate-400">
              Audited to the highest maritime logistics, customs, and data security standards.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-7">
            {certifications.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#60A5FA]">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <h5 className="text-[11px] font-bold text-white tracking-tight leading-tight">{item.name}</h5>
                    <p className="text-[9px] text-slate-400 leading-tight">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
