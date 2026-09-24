import React from 'react';
import { Wrench, Repeat, Cog, Eye, ArrowUpRight } from 'lucide-react';
import { SERVICE_ITEMS } from '../config';

interface ServiceSectionProps {
  onOpenConsultationModal: (serviceName?: string) => void;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ onOpenConsultationModal }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case '01':
        return <Wrench className="w-6 h-6 text-blue-600" />;
      case '02':
        return <Repeat className="w-6 h-6 text-blue-600" />;
      case '03':
        return <Cog className="w-6 h-6 text-blue-600" />;
      case '04':
        return <Eye className="w-6 h-6 text-blue-600" />;
      default:
        return <Wrench className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase">
            맞춤형 수리 서비스
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            사이드미러, 어디가 고장났는지부터 확인합니다.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            상태에 맞지 않는 과도한 수리 대신, 문제 부위를 정확히 파악하여 꼭 필요한 조치 방식을 제안합니다.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICE_ITEMS.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl p-6 sm:p-7 border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    {service.badge}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-blue-600">
                    {service.id}.
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm font-semibold text-slate-800 mb-2">
                  "{service.summary}"
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <button
                  onClick={() => onOpenConsultationModal(service.title)}
                  className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>수리 문의하기</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400">현장 출장 대응</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
