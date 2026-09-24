import React from 'react';
import { Truck, MessageSquareText, Wrench } from 'lucide-react';
import { BENEFIT_ITEMS } from '../config';

export const BenefitSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case '01':
        return <Truck className="w-8 h-8 text-sky-400" />;
      case '02':
        return <MessageSquareText className="w-8 h-8 text-sky-400" />;
      case '03':
        return <Wrench className="w-8 h-8 text-sky-400" />;
      default:
        return <Truck className="w-8 h-8 text-sky-400" />;
    }
  };

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-sky-400 uppercase">
            해드림 사이드미러 특장점
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2 mb-3 leading-tight">
            차량을 움직이기 어려울 때,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">우리가 찾아갑니다.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            사이드미러 고장으로 불안하게 도로를 주행하거나 시간 내어 정비소에 들를 필요가 없습니다.
          </p>
        </div>

        {/* 3 Core Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENEFIT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/90 rounded-2xl p-7 border border-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-950/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-sky-400">
                    {item.id}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-sky-300 mb-3">
                  {item.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400">
                전문 출장수리 서비스 원칙
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
