import React from 'react';
import { Phone, MapPin, AlertCircle } from 'lucide-react';
import { CONFIG } from '../config';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pb-20 md:pb-12 pt-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 pb-8 border-b border-slate-850">
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-['Pretendard',sans-serif] text-base font-bold text-white tracking-tight">
                {CONFIG.companyName}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              자동차 사이드미러 파손, 접이 이상, 모터 고장 및 거울/커버 교체 전문. 고객님이 계신 곳으로 직접 찾아가는 편리한 출장수리 서비스를 제공합니다.
            </p>
            <div className="pt-1 flex items-center gap-2 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-semibold">{CONFIG.phoneNumber}</span>
              <span className="text-[11px] text-slate-500">({CONFIG.consultationTime})</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
              서비스 바로가기
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#problem" className="hover:text-blue-400 transition-colors">고객 증상 확인</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">사이드미러 수리 항목</a>
              </li>
              <li>
                <a href="#process" className="hover:text-blue-400 transition-colors">출장수리 진행 절차</a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-blue-400 transition-colors">수리 전후 비교</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">자주 묻는 질문 (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Business Info */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
              사업자 안내
            </h4>
            <div className="space-y-1 text-slate-400 text-[11px] leading-relaxed">
              <p><span className="text-slate-500">상호명 :</span> {CONFIG.businessInfo.companyName} <span className="text-slate-600 mx-1">|</span> <span className="text-slate-500">대표자 :</span> {CONFIG.businessInfo.representative}</p>
              <p><span className="text-slate-500">사업자등록번호 :</span> {CONFIG.businessInfo.businessNumber}</p>
              <p><span className="text-slate-500">사업장 소재지 :</span> {CONFIG.businessInfo.address}</p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-2">
              <MapPin className="w-3 h-3 text-sky-400 shrink-0" />
              <span>{CONFIG.serviceArea}</span>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <AlertCircle className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span>{CONFIG.businessInfo.disclaimer}</span>
          </p>
          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} {CONFIG.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
