import React from 'react';
import { 
  Crosshair, 
  Navigation, 
  SearchCheck, 
  MessagesSquare, 
  MapPinCheck,
  ShieldCheck
} from 'lucide-react';
import { TRUST_POINTS } from '../config';

export const TrustSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crosshair':
        return <Crosshair className="w-6 h-6 text-blue-600" />;
      case 'Navigation':
        return <Navigation className="w-6 h-6 text-blue-600" />;
      case 'SearchCheck':
        return <SearchCheck className="w-6 h-6 text-blue-600" />;
      case 'MessagesSquare':
        return <MessagesSquare className="w-6 h-6 text-blue-600" />;
      case 'MapPinCheck':
        return <MapPinCheck className="w-6 h-6 text-blue-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase">
            안심 서비스 원칙
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            급할수록, 아무 곳에나 맡기지 마세요.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            사이드미러만을 전문으로 다루며, 과잉 교체 없이 합리적인 방법으로 해결해 드립니다.
          </p>
        </div>

        {/* 5 Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRUST_POINTS.map((item, index) => (
            <div
              key={item.title}
              className={`bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>해드림 사이드미러 약속</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
