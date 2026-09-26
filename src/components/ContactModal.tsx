import React, { useState, useEffect } from 'react';
import { 
  X, 
  Upload, 
  CheckCircle2, 
  Phone, 
  Trash2, 
  Camera, 
  MapPin, 
  Send, 
  MessageSquare, 
  Copy, 
  Check,
  Share2,
  AlertCircle
} from 'lucide-react';
import { CONFIG } from '../config';
import { 
  openSmsApp, 
  shareConsultationWithPhotos, 
  canSharePhotosWithFiles, 
  formatConsultationMessage,
  getSmsLink 
} from '../utils/sms';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSymptom?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialSymptom = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [location, setLocation] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentMessage, setSentMessage] = useState('');
  const [smsLink, setSmsLink] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSymptoms(initialSymptom || '');
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen, initialSymptom]);

  const handleClose = () => {
    setSymptoms('');
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

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

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
    setPhotoPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('성함과 연락처는 필수 입력 항목입니다.');
      return;
    }

    setIsSubmitting(true);

    const formData = {
      name,
      phone,
      vehicleMake,
      vehicleModel,
      vehicleYear,
      location,
      symptoms,
      photoCount: photos.length,
    };

    let shared = false;
    if (photos.length > 0 && canSharePhotosWithFiles(photos)) {
      const shareResult = await shareConsultationWithPhotos({
        data: formData,
        photos,
      });
      shared = shareResult.shared;
    }

    if (!shared) {
      // 방법 1: 010-9210-9318 번호로 휴대폰 문자 앱 자동 실행 및 내용 프리필
      const { message, smsUrl } = openSmsApp(formData, photos.length);
      setSentMessage(message);
      setSmsLink(smsUrl);
    } else {
      const message = formatConsultationMessage(formData, photos.length);
      setSentMessage(message);
      setSmsLink(getSmsLink(message));
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 200);
  };

  const handleShareAgain = async () => {
    if (photos.length > 0) {
      await shareConsultationWithPhotos({
        data: {
          name,
          phone,
          vehicleMake,
          vehicleModel,
          vehicleYear,
          location,
          symptoms,
          photoCount: photos.length,
        },
        photos,
      });
    }
  };

  const handleCopyMessage = () => {
    if (sentMessage) {
      navigator.clipboard.writeText(sentMessage);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setVehicleMake('');
    setVehicleModel('');
    setVehicleYear('');
    setLocation('');
    setSymptoms('');
    setPhotos([]);
    setPhotoPreviews([]);
    setSentMessage('');
    setSmsLink('');
    setIsCopied(false);
    handleClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-slate-950 text-white px-5 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <h3 id="modal-title" className="text-base sm:text-lg font-bold">
              {CONFIG.companyName} 출장수리 상담 신청
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">
                휴대폰 문자 앱으로 연결되었습니다!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                사장님 번호(<span className="font-bold text-blue-600">{CONFIG.smsNumber}</span>)로 상담 내용이 문자창에 자동 입력되었습니다. <strong>[전송]</strong> 버튼을 누르시면 사장님께 즉시 문자가 전달됩니다.
              </p>

              {/* Pre-formatted message card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-left text-xs text-slate-700 font-mono whitespace-pre-line max-h-40 overflow-y-auto">
                {sentMessage}
              </div>

              {/* Photo guide & preview if photos were attached */}
              {photos.length > 0 ? (
                <div className="p-3.5 bg-amber-50 border-2 border-amber-300 rounded-xl text-left space-y-2.5">
                  <div className="flex items-center gap-1.5 font-bold text-amber-950 text-xs sm:text-sm">
                    <Camera className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>📸 사진 전송 필수 안내 (선택하신 {photos.length}장)</span>
                  </div>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    스마트폰 보안 정책상 브라우저에서 문자 앱으로 사진이 자동으로 넘어가지 않습니다.
                    문자 앱 입력창 옆의 <strong>[사진 첨부 📎]</strong> 아이콘을 눌러 방금 찍으신 사진을 추가해 주시면 사장님(<strong>{CONFIG.smsNumber}</strong>)께 사진이 함께 도착합니다!
                  </p>
                  
                  {/* Photo thumbnail previews */}
                  <div className="flex gap-2 overflow-x-auto py-1">
                    {photoPreviews.map((src, i) => (
                      <div key={i} className="relative w-12 h-12 rounded-lg overflow-hidden border border-amber-300 shrink-0">
                        <img src={src} alt="선택한 사진" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                  {canSharePhotosWithFiles(photos) && (
                    <button
                      type="button"
                      onClick={handleShareAgain}
                      className="w-full py-2.5 px-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-sm text-xs cursor-pointer"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>사진 자동첨부로 문자/공유 다시 열기</span>
                    </button>
                  )}
                </div>
              ) : (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 text-left flex items-start gap-2">
                  <Camera className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>사진 전송 안내:</strong> 문자 창에서 파손 부위 사진을 함께 첨부(MMS)해서 보내주시면 더욱 정확하고 빠른 견적 확인이 가능합니다.
                  </span>
                </div>
              )}

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                {smsLink && (
                  <a
                    href={smsLink}
                    className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>문자 앱 다시 열기</span>
                  </a>
                )}
                
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">복사 완료!</span>
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
                  className="px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>전화 바로 걸기</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="text-xs text-slate-400 hover:text-slate-600 underline cursor-pointer"
                >
                  확인 완료 및 창 닫기
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-xl text-xs text-blue-950 flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  신청서를 작성하시면 <strong>사장님 번호({CONFIG.smsNumber})</strong>로 상담 내용이 담긴 문자 앱이 자동으로 실행되어 쉽고 빠르게 접수하실 수 있습니다.
                </span>
              </div>

              {/* Basic customer info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-bold text-slate-700 mb-1">
                    이름 <span className="text-blue-600">*</span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="홍길동"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="customer-phone" className="block text-xs font-bold text-slate-700 mb-1">
                    연락처 <span className="text-blue-600">*</span>
                  </label>
                  <input
                    id="customer-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010-0000-0000"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>
              </div>

              {/* Vehicle info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="vehicle-make" className="block text-xs font-bold text-slate-700 mb-1">
                    차량 제조사
                  </label>
                  <input
                    id="vehicle-make"
                    type="text"
                    value={vehicleMake}
                    onChange={(e) => setVehicleMake(e.target.value)}
                    placeholder="예: 현대, 기아"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="vehicle-model" className="block text-xs font-bold text-slate-700 mb-1">
                    차량 모델
                  </label>
                  <input
                    id="vehicle-model"
                    type="text"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    placeholder="예: 그랜저, 쏘렌토"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="vehicle-year" className="block text-xs font-bold text-slate-700 mb-1">
                    차량 연식
                  </label>
                  <input
                    id="vehicle-year"
                    type="text"
                    value={vehicleYear}
                    onChange={(e) => setVehicleYear(e.target.value)}
                    placeholder="예: 2021년식"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="current-location" className="block text-xs font-bold text-slate-700 mb-1">
                  현재 위치 (출장 희망 지역)
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="current-location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="예: 서울 강남구 역삼동 아파트 지하주차장"
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Symptoms */}
              <div>
                <label htmlFor="symptoms" className="block text-xs font-bold text-slate-700 mb-1">
                  사이드미러 증상
                </label>
                <textarea
                  id="symptoms"
                  rows={2}
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="예: 주차하다 기둥에 박아서 거울이 깨졌습니다. 모터 소리는 나는데 접히지 않습니다."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              {/* Photo Upload with Previews */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  파손 사진 첨부 (선택)
                </label>
                <label className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-3.5 flex flex-col items-center justify-center cursor-pointer bg-slate-50 hover:bg-white transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                  <Upload className="w-5 h-5 text-blue-600 mb-1" />
                  <span className="text-xs font-semibold text-slate-700">
                    사진 첨부하기 (문자 전송 시 함께 첨부 가능)
                  </span>
                  <span className="text-[11px] text-slate-400">
                    스마트폰 촬영 사진 선택
                  </span>
                </label>

                <p className="text-[11px] text-blue-700 bg-blue-50/70 p-2 rounded-lg mt-1.5 flex items-start gap-1.5 border border-blue-100">
                  <span className="font-bold shrink-0">💡 팁:</span>
                  <span>사진을 등록하신 후 아래 버튼을 누르시면, 기기에 따라 사진이 자동 첨부되거나 문자 앱에서 [📎 사진 첨부]로 바로 추가하실 수 있습니다.</span>
                </p>

                {/* Previews List */}
                {photoPreviews.length > 0 && (
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mt-3">
                    {photoPreviews.map((src, idx) => (
                      <div key={idx} className="relative group rounded-lg overflow-hidden border border-slate-200 aspect-square">
                        <img src={src} alt={`첨부사진 ${idx + 1}`} className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removePhoto(idx)}
                          className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded-full opacity-80 hover:opacity-100 transition-opacity"
                          title="삭제"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md shadow-blue-950/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting ? '문자 연결중...' : `문자로 상담 신청하기 (${CONFIG.smsNumber})`}
                  </span>
                </button>
              </div>

              <div className="text-center">
                <a
                  href={CONFIG.phoneCallUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>상담 전 통화 먼저 원하시면: {CONFIG.phoneNumber}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
