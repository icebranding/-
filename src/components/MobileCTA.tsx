import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { CONFIG } from '../config';

interface MobileCTAProps {
  onOpenConsultationModal: () => void;
}

export const MobileCTA: React.FC<MobileCTAProps> = ({ onOpenConsultationModal }) => {
  return (
    <aside 
      aria-label="빠른 상담 바로가기"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* Left: Phone call button */}
        <a
          href={CONFIG.phoneCallUrl}
          className="flex items-center justify-center gap-1.5 py-3 px-2 bg-slate-900 active:bg-slate-800 border border-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors text-center whitespace-nowrap shadow-xs"
        >
          <Phone className="w-4 h-4 text-blue-400 shrink-0" />
          <span>전화 상담</span>
        </a>

        {/* Right: Consultation request button */}
        <button
          onClick={onOpenConsultationModal}
          className="flex items-center justify-center gap-1.5 py-3 px-2 bg-blue-600 active:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-blue-950 transition-colors text-center whitespace-nowrap cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4 shrink-0" />
          <span>출장수리 상담</span>
        </button>
      </div>
    </aside>
  );
};
