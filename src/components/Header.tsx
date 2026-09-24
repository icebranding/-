import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { CONFIG } from '../config';

interface HeaderProps {
  onOpenConsultationModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultationModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '증상 확인', href: '#problem' },
    { label: '서비스 안내', href: '#services' },
    { label: '출장 혜택', href: '#benefits' },
    { label: '수리 과정', href: '#process' },
    { label: '수리 전후', href: '#before-after' },
    { label: '자주 묻는 질문', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Zone 1: Brand title in Pretendard bold font */}
        <a 
          href="#" 
          className="flex items-center hover:opacity-90 transition-opacity py-1 shrink-0"
          aria-label="해드림 사이드미러 홈으로 이동"
        >
          <span className="font-['Pretendard',sans-serif] text-xl sm:text-2xl font-bold tracking-tight text-white">
            해드림 사이드미러
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={CONFIG.phoneCallUrl}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-850 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
            title="전화 연결"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">{CONFIG.phoneNumber}</span>
            <span className="sm:hidden">전화상담</span>
          </a>

          <button
            onClick={onOpenConsultationModal}
            className="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-sm shadow-blue-950 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <span>출장수리 상담</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-300 hover:text-blue-400 border-b border-slate-900"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={CONFIG.phoneCallUrl}
              className="w-full py-2.5 px-4 text-center text-sm font-bold text-slate-200 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>전화 상담 : {CONFIG.phoneNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
