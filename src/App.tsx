/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { LogisticSolutions } from './components/LogisticSolutions';
import { WorldMapSection } from './components/WorldMapSection';
import { FulfillmentSection } from './components/FulfillmentSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrustBadges } from './components/TrustBadges';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ContactModal, DemoModal, GetStartedModal } from './components/Modals';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [getStartedModalOpen, setGetStartedModalOpen] = useState(false);

  const handleLearnMore = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#2563EB]/20 selection:text-[#2563EB] flex flex-col font-sans">
      {/* Top Navigation with Glassmorphism */}
      <Navbar
        onContactClick={() => setContactModalOpen(true)}
        onGetStartedClick={() => setGetStartedModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onLearnMoreClick={handleLearnMore}
          onEstimateRateClick={() => setGetStartedModalOpen(true)}
        />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Logistic Solutions Bento Grid */}
        <LogisticSolutions />

        {/* Wide-Reaching Customer Care / Global Map */}
        <WorldMapSection />

        {/* What We Offer / Order Fulfillment */}
        <FulfillmentSection />

        {/* Regulatory Compliance & Certifications Strip */}
        <TrustBadges />

        {/* Merchant Testimonials & Global Social Proof with Apple Glass */}
        <TestimonialsSection />

        {/* Interactive FAQ Section with Apple Glass Accordion */}
        <FaqSection />

        {/* Royal Cobalt & Ocean CTA Banner */}
        <CtaBanner
          onStartShippingClick={() => setGetStartedModalOpen(true)}
          onScheduleDemoClick={() => setDemoModalOpen(true)}
        />
      </main>

      {/* Footer with Mandatory Demonstration Disclaimer */}
      <Footer
        onGetStartedClick={() => setGetStartedModalOpen(true)}
        onContactClick={() => setContactModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <GetStartedModal
        isOpen={getStartedModalOpen}
        onClose={() => setGetStartedModalOpen(false)}
      />
    </div>
  );
}
