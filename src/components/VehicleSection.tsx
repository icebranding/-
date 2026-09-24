import React from 'react';
import { Car, AlertCircle } from 'lucide-react';
import { VEHICLE_BRANDS } from '../config';

export const VehicleSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase">
            지원 차종 안내
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            국산차부터 다양한 차량까지
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            차량 종류와 연식에 맞춘 부품 수급 및 숙련된 탈부착 작업으로 안전하게 복원합니다.
          </p>
        </div>

        {/* Brand Grid (Text-based clean automotive styling without trademark infringement) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {VEHICLE_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 text-center hover:border-blue-300 hover:shadow-xs transition-all flex flex-col items-center justify-center min-h-[110px]"
            >
              <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-2">
                <Car className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {brand.name}
              </h3>
              <span className="text-[11px] font-mono text-slate-400 font-semibold tracking-wider">
                {brand.eng}
              </span>
            </div>
          ))}
        </div>

        {/* Notice Disclaimer Banner as required by prompt */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 text-center">
          <AlertCircle className="w-4 h-4 text-blue-600 shrink-0" />
          <span>차종과 연식에 따라 수리 가능 여부가 달라질 수 있습니다. 사전 상담 시 차량 정보를 알려주세요.</span>
        </div>
      </div>
    </section>
  );
};
