import React from 'react';
import { 
  SquareParking, 
  ShieldAlert, 
  RotateCcw, 
  Sparkles, 
  Activity, 
  MapPin, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { PROBLEM_ITEMS, CONFIG } from '../config';

interface ProblemSectionProps {
  onOpenConsultationModal: (initialSymptom?: string) => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenConsultationModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ParkingSquare':
        return <SquareParking className="w-6 h-6 text-blue-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-blue-600" />;
      case 'RotateCcw':
        return <RotateCcw className="w-6 h-6 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-blue-600" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-blue-600" />;
      default:
        return <ShieldAlert className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="problem" className="py-16 sm:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase">
            증상 공감 및 빠른 진단
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            이런 상황이라면, 바로 연락주세요.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            당황하지 마시고 사진 한 장을 남겨주시면 수리 방법부터 빠르게 확인해드립니다.
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PROBLEM_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {item.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                  "{item.title}"
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenConsultationModal(item.title)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  <span>이 증상으로 상담 신청</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={CONFIG.phoneCallUrl}
                  className="text-slate-400 hover:text-blue-600 p-1.5 rounded hover:bg-slate-50 transition-colors"
                  title="바로 전화 문의"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Helper Banner */}
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0 hidden sm:inline-block"></span>
            <span className="text-xs sm:text-sm text-slate-200">
              차량 모델과 파손 부위가 나온 사진을 촬영해 두시면 보다 신속하게 상담 가능합니다.
            </span>
          </div>
          <button
            onClick={() => onOpenConsultationModal()}
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm shadow-blue-950"
          >
            지금 무료 상담 신청
          </button>
        </div>
      </div>
    </section>
  );
};
