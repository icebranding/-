import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, CONFIG } from '../config';

interface FAQSectionProps {
  onOpenConsultationModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultationModal }) => {
  // Allow open by default the first question
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase">
            궁금증 해결
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            자주 묻는 질문
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            사이드미러 출장수리에 대해 고객님들이 가장 자주 궁금해하시는 내용입니다.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-base font-bold font-mono text-blue-600 shrink-0 mt-0.5">
                      Q.
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600 bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 bg-white">
                    <div className="flex items-start gap-3">
                      <span className="text-base font-bold font-mono text-slate-400 shrink-0 mt-0.5">
                        A.
                      </span>
                      <p className="text-slate-700">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help bar */}
        <div className="mt-12 max-w-xl mx-auto p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-center">
          <HelpCircle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <h4 className="text-base font-bold text-slate-900 mb-1">
            원하는 답변을 찾지 못하셨나요?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            직접 사진을 보내주시거나 전화 주시면 친절하게 상세 안내해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <button
              onClick={onOpenConsultationModal}
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs shadow-blue-950"
            >
              <MessageCircle className="w-4 h-4" />
              <span>사진 첨부하여 문의하기</span>
            </button>
            <a
              href={CONFIG.phoneCallUrl}
              className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>전화로 바로 물어보기</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
