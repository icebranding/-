/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ServiceSection } from './components/ServiceSection';
import { BenefitSection } from './components/BenefitSection';
import { ProcessSection } from './components/ProcessSection';
import { VehicleSection } from './components/VehicleSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { TrustSection } from './components/TrustSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { MobileCTA } from './components/MobileCTA';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialSymptom, setInitialSymptom] = useState<string>('');

  const handleOpenModal = (symptomText?: string) => {
    if (symptomText) {
      setInitialSymptom(symptomText);
    } else {
      setInitialSymptom('');
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Header Navigation */}
      <Header onOpenConsultationModal={() => handleOpenModal()} />

      <main className="flex-1">
        {/* SECTION 01: HERO */}
        <Hero onOpenConsultationModal={() => handleOpenModal()} />

        {/* SECTION 02: 고객의 문제 공감 */}
        <ProblemSection onOpenConsultationModal={handleOpenModal} />

        {/* SECTION 03: 서비스 소개 */}
        <ServiceSection onOpenConsultationModal={handleOpenModal} />

        {/* SECTION 04: 출장수리의 장점 */}
        <BenefitSection />

        {/* SECTION 05: 수리 과정 */}
        <ProcessSection onOpenConsultationModal={() => handleOpenModal()} />

        {/* SECTION 06: 차종 대응 */}
        <VehicleSection />

        {/* SECTION 07: Before / After */}
        <BeforeAfterSection onOpenConsultationModal={() => handleOpenModal()} />

        {/* SECTION 08: 신뢰 영역 */}
        <TrustSection />

        {/* SECTION 09: FAQ */}
        <FAQSection onOpenConsultationModal={() => handleOpenModal()} />

        {/* SECTION 10: FINAL CTA */}
        <FinalCTASection onOpenConsultationModal={() => handleOpenModal()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Mobile Bottom CTA Bar */}
      <MobileCTA onOpenConsultationModal={() => handleOpenModal()} />

      {/* Interactive Consultation Form Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialSymptom={initialSymptom}
      />
    </div>
  );
}
