import React, { useState, useRef } from 'react';
import { ArrowLeftRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { CONFIG } from '../config';

interface BeforeAfterSectionProps {
  onOpenConsultationModal: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenConsultationModal }) => {
  // Slider position percentage (0 to 100)
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase">
            수리 전후 비교
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3 leading-tight">
            깨진 사이드미러,<br />
            <span className="text-blue-600">완벽하게 복원 완료.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            슬라이더를 좌우로 밀어서 파손된 상태와 깔끔하게 복원된 사이드미러를 직접 비교해보세요.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-3xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-lg select-none cursor-ew-resize border border-slate-200 bg-slate-900"
          >
            {/* After Image (Background) */}
            <img
              src={CONFIG.images.after}
              alt="수리 후 깨끗해진 사이드미러"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-10 bg-slate-950/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>수리 후 (AFTER)</span>
            </div>

            {/* Before Image (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={CONFIG.images.before}
                alt="파손된 사이드미러 수리 전"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute top-4 left-4 z-10 bg-slate-950/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>수리 전 (BEFORE)</span>
              </div>
            </div>

            {/* Divider Line & Dragger Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white pointer-events-auto cursor-grab active:cursor-grabbing hover:bg-blue-500 transition-colors">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Controls & Notes */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
              <span>가운데 핸들을 좌우로 드래그하여 전후 상태를 확인할 수 있습니다.</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSliderPos(15)}
                className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
              >
                수리 후 위주
              </button>
              <button
                onClick={() => setSliderPos(50)}
                className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
              >
                절반 비교
              </button>
              <button
                onClick={() => setSliderPos(85)}
                className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
              >
                파손 전 위주
              </button>
            </div>
          </div>

          {/* Callout */}
          <div className="mt-8 text-center">
            <button
              onClick={onOpenConsultationModal}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all shadow-sm cursor-pointer"
            >
              내 차 사이드미러도 수리 가능할까? 사진 상담 신청
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
