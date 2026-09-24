import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  CalendarCheck, 
  CheckCircle2, 
  ChevronRight,
  Zap
} from 'lucide-react';
import { CONFIG } from '../config';

interface HeroProps {
  onOpenConsultationModal: (initialSymptom?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  const [, setIsHoveredCta] = useState(false);
  
  // Real-time dynamic ticker for emergency repair urgency
  const [currentUrgencyTextIdx, setCurrentUrgencyTextIdx] = useState(0);
  const urgencyTexts = [
    '당일 빠른 출장 방문 상담 가능',
    '파손 사진 1장으로 실시간 견적 상담',
    '아파트·오피스 지하/지상 주차장 방문 수리',
    '부품 부분 교체로 합리적인 수리 비용'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentUrgencyTextIdx((prev) => (prev + 1) % urgencyTexts.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-800">
      {/* Background Animated Layer with subtle pan/scale effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-35 scale-100">
          <img
            src={CONFIG.images.hero}
            alt="자동차 사이드미러 현장 출장 수리"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform transition-transform duration-[12000ms] hover:scale-105"
          />
        </div>

        {/* Ambient pulse glow effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Deep Contrast Overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Live Service Pill with pulsing status radar */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-sky-300 text-xs sm:text-sm font-semibold mb-5 sm:mb-6 shadow-inner backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="text-white font-medium">현장 출장 수리 전문</span>
            <span className="text-slate-600">|</span>
            <span className="text-sky-300 font-bold transition-all duration-300">
              {urgencyTexts[currentUrgencyTextIdx]}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.18] sm:leading-[1.15] mb-5 text-balance">
            사이드미러 고장,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              차량 맡기러 가지 마세요.
            </span>
          </h1>

          {/* Subcopy */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-medium leading-relaxed mb-6 max-w-2xl text-balance">
            해드림 사이드미러가 고객님이 계신 곳으로 직접 찾아갑니다.
          </p>

          {/* Auxiliary Symptoms Ticks */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs sm:text-sm text-slate-300 font-normal mb-8 max-w-xl backdrop-blur-xs flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5">
            <span className="text-sky-400 font-bold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> 즉시 해결:
            </span>
            <span className="hover:text-white transition-colors cursor-default">사이드미러 파손</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="hover:text-white transition-colors cursor-default">접이불량</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="hover:text-white transition-colors cursor-default">모터고장</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="hover:text-white transition-colors cursor-default">거울파손</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="hover:text-white transition-colors cursor-default">커버파손</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => onOpenConsultationModal()}
              onMouseEnter={() => setIsHoveredCta(true)}
              onMouseLeave={() => setIsHoveredCta(false)}
              className="relative group px-8 sm:px-9 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.99] text-white font-extrabold text-base sm:text-lg rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              <CalendarCheck className="w-5 h-5 text-white animate-bounce" />
              <span>출장수리 상담하기</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={CONFIG.phoneCallUrl}
              className="px-7 sm:px-8 py-4 bg-slate-900/90 hover:bg-slate-800 active:scale-[0.99] text-white border border-slate-700 hover:border-slate-500 font-bold text-base sm:text-lg rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Phone className="w-4 h-4 animate-pulse" />
              </div>
              <div className="text-left leading-tight">
                <span className="block text-xs text-slate-400 font-normal">빠른 전화 연결</span>
                <span className="font-bold">{CONFIG.phoneNumber}</span>
              </div>
            </a>
          </div>

          {/* Trust proof ticks */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>고객 계신 곳 출장 방문</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>사진 확인 후 맞춤 안내</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>불필요한 통교체 지양</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
