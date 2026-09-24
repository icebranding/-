import React from 'react';
import { Camera, CheckSquare, Calendar, Wrench, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../config';

interface ProcessSectionProps {
  onOpenConsultationModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultationModal }) => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Camera className="w-5 h-5 text-blue-600" />;
      case '02':
        return <CheckSquare className="w-5 h-5 text-blue-600" />;
      case '03':
        return <Calendar className="w-5 h-5 text-blue-600" />;
      case '04':
        return <Wrench className="w-5 h-5 text-blue-600" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase">
            간편한 수리 접수
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            수리 과정은 간단합니다.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            복잡한 예약 절차 없이 사진 전송부터 현장 조치까지 신속하게 연결됩니다.
          </p>
        </div>

        {/* Process Flow: Responsive grid (horizontal on desktop, vertical on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Step badge and icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-blue-100 text-blue-700">
                    STEP {stepItem.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getStepIcon(stepItem.step)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-sm font-medium text-slate-800 mb-2">
                  {stepItem.description}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {stepItem.tips}
                </p>
              </div>

              {/* Step indicator arrow for desktop */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-400 shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA prompt under process */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultationModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md shadow-blue-950/20 transition-all cursor-pointer"
          >
            <span>지금 사진 보내고 상담받기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
