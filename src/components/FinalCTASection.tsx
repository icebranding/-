import React, { useState } from 'react';
import { 
  Phone, 
  CalendarCheck, 
  CheckCircle2, 
  Send, 
  Upload, 
  MessageSquare, 
  Copy, 
  Check, 
  Camera 
} from 'lucide-react';
import { CONFIG } from '../config';
import { openSmsApp } from '../utils/sms';

interface FinalCTASectionProps {
  onOpenConsultationModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenConsultationModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carInfo, setCarInfo] = useState('');
  const [location, setLocation] = useState('');
  const [symptom, setSymptom] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const [sentMessage, setSentMessage] = useState('');
  const [smsLink, setSmsLink] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setPhotos((prev) => [...prev, ...selectedFiles]);
      
      selectedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setPhotoPreviews((prev) => [...prev, event.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('성함과 연락처를 입력해주세요.');
      return;
    }

    // 방법 1: 010-9218-9318 번호로 휴대폰 문자 앱 자동 실행 및 프리필
    const { message, smsUrl } = openSmsApp({
      name,
      phone,
      vehicleModel: carInfo,
      location,
      symptoms: symptom,
    });

    setSentMessage(message);
    setSmsLink(smsUrl);
    setIsSubmitted(true);
  };

  const handleCopyMessage = () => {
    if (sentMessage) {
      navigator.clipboard.writeText(sentMessage);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setCarInfo('');
    setLocation('');
    setSymptom('');
    setPhotos([]);
    setPhotoPreviews([]);
    setSentMessage('');
    setSmsLink('');
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Value Proposition */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded bg-blue-950/80 border border-blue-800/60 text-sky-300 text-xs sm:text-sm font-bold mb-4">
              빠른 현장 출장 상담 접수
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              사이드미러 때문에<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                차량 운행이 불편하신가요?
              </span>
            </h2>

            <p className="text-base sm:text-xl text-slate-300 font-medium mb-8 leading-relaxed">
              사진 한 장 보내주시면 수리 방법부터 상담해드립니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onOpenConsultationModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.99] text-white font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-blue-950/70 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>지금 출장수리 상담하기</span>
              </button>

              <a
                href={CONFIG.phoneCallUrl}
                className="w-full sm:w-auto px-7 py-4 bg-slate-900/90 hover:bg-slate-800 active:scale-[0.99] text-white border border-slate-700 hover:border-slate-500 font-bold text-base sm:text-lg rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-sky-400 animate-pulse" />
                <span>전화 상담 : {CONFIG.phoneNumber}</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-left">
              <div>
                <span className="text-xl sm:text-2xl font-black text-white block">당일 방문</span>
                <span className="text-xs text-slate-400">일정 조율 후 출장</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-sky-400 block">부분 수리</span>
                <span className="text-xs text-slate-400">불필요한 통교체 지양</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-xl sm:text-2xl font-black text-white block">사진 1장</span>
                <span className="text-xs text-slate-400">문자 즉시 견적 확인</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              <div className="mb-6">
                <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">
                  간편 상담 접수
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  문자로 빠른 견적 문의하기
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  작성 후 버튼을 누르시면 사장님 번호({CONFIG.smsNumber})로 문자 앱이 열립니다.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">휴대폰 문자 앱으로 연결되었습니다!</h4>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                    사장님 번호(<span className="text-sky-400 font-semibold">{CONFIG.smsNumber}</span>)로 상담 내용이 자동 입력되었습니다. <strong>[전송]</strong> 버튼을 누르시면 접수가 완료됩니다.
                  </p>

                  {/* Formatted Message Display */}
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-left text-xs text-slate-300 font-mono whitespace-pre-line max-h-36 overflow-y-auto">
                    {sentMessage}
                  </div>

                  <div className="p-3 bg-amber-950/40 border border-amber-800/60 rounded-xl text-xs text-amber-200 text-left flex items-start gap-2">
                    <Camera className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>사진 전송:</strong> 문자 앱 화면에서 깨지거나 파손된 부위 사진을 함께 첨부(MMS)해주시면 바로 견적과 일정을 확인해 드립니다.
                    </span>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                    {smsLink && (
                      <a
                        href={smsLink}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>문자 앱 다시 열기</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl transition-colors cursor-pointer"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-300">복사 완료!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>문자 내용 복사</span>
                        </>
                      )}
                    </button>

                    <a
                      href={CONFIG.phoneCallUrl}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-bold text-sm rounded-xl transition-colors"
                    >
                      <Phone className="w-4 h-4 text-sky-400" />
                      <span>전화 통화</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      새로운 문의 작성하기
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        이름 <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="홍길동"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        연락처 <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="010-0000-0000"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        차량 제조사 및 모델
                      </label>
                      <input
                        type="text"
                        value={carInfo}
                        onChange={(e) => setCarInfo(e.target.value)}
                        placeholder="예: 현대 아반떼, 기아 쏘렌토"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        현재 계신 위치
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="예: 서울 강남구 역삼동"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      사이드미러 증상
                    </label>
                    <input
                      type="text"
                      value={symptom}
                      onChange={(e) => setSymptom(e.target.value)}
                      placeholder="예: 주차하다 거울 깨짐, 모터 소리만 나고 안 접힘"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Photo Attachment UI */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      파손 사진 첨부 (선택)
                    </label>
                    <label className="border border-dashed border-slate-700 hover:border-blue-400 rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer bg-slate-950/60 hover:bg-slate-950 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Upload className="w-4 h-4 text-sky-400" />
                        <span>사진 파일 선택 (문자 전송 시 함께 첨부 가능)</span>
                      </div>
                    </label>

                    {/* Previews */}
                    {photoPreviews.length > 0 && (
                      <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
                        {photoPreviews.map((src, i) => (
                          <div key={i} className="relative w-14 h-14 rounded-md overflow-hidden border border-slate-700 shrink-0">
                            <img src={src} alt="미리보기" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md shadow-blue-950/40 flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>문자로 상담 신청하기 ({CONFIG.smsNumber})</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    버튼을 누르시면 입력하신 내용이 담긴 휴대폰 문자(SMS) 앱이 자동으로 열립니다.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
