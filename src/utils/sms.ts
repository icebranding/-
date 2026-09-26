import { CONFIG } from '../config';

export interface ConsultationFormData {
  name: string;
  phone: string;
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  location?: string;
  symptoms?: string;
  photoCount?: number;
}

/**
 * 상담 신청 내용을 문자 메시지 규격으로 포맷팅합니다.
 */
export function formatConsultationMessage(data: ConsultationFormData, photoCount: number = 0): string {
  const lines: string[] = [
    `[${CONFIG.companyName} 출장수리 상담신청]`,
    `• 고객명: ${data.name.trim() || '미입력'}`,
    `• 연락처: ${data.phone.trim() || '미입력'}`,
  ];

  const vehicleParts = [
    data.vehicleMake?.trim(),
    data.vehicleModel?.trim(),
    data.vehicleYear?.trim(),
  ].filter(Boolean);

  if (vehicleParts.length > 0) {
    lines.push(`• 차종/연식: ${vehicleParts.join(' ')}`);
  }

  if (data.location?.trim()) {
    lines.push(`• 출장지역: ${data.location.trim()}`);
  }

  if (data.symptoms?.trim()) {
    lines.push(`• 고장증상: ${data.symptoms.trim()}`);
  }

  const effectivePhotoCount = photoCount || data.photoCount || 0;
  if (effectivePhotoCount > 0) {
    lines.push(`• 파손사진: ${effectivePhotoCount}장 첨부 접수`);
  }

  lines.push('');
  lines.push(`※ 수신처: ${CONFIG.smsNumber}`);
  if (effectivePhotoCount > 0) {
    lines.push('※ 사진 전송 안내: 문자 앱이 열리면 [사진 첨부 📎] 아이콘을 눌러 사진을 함께 전송해 주시면 사장님께서 즉시 정확한 견적을 안내해 드립니다.');
  } else {
    lines.push('※ 파손 부위 사진이 있으시면 이 문자에 사진을 첨부(MMS)하여 전송해주시면 보다 빠르고 정확한 견적 산출이 가능합니다.');
  }

  return lines.join('\n');
}

/**
 * 기기 OS에 맞는 sms: URI scheme 생성
 * iOS는 '&body=', Android 및 데스크톱은 '?body='
 */
export function getSmsLink(message: string): string {
  const isIOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !(window as unknown as { MSStream?: boolean }).MSStream;

  const separator = isIOS ? '&' : '?';
  return `sms:${CONFIG.smsCleanNumber}${separator}body=${encodeURIComponent(message)}`;
}

/**
 * 기기에서 사진 파일 포함 네이티브 공유(Web Share API) 지원 여부 확인
 */
export function canSharePhotosWithFiles(files?: File[]): boolean {
  if (typeof navigator === 'undefined' || !navigator.share || !files || files.length === 0) {
    return false;
  }
  if (navigator.canShare) {
    try {
      return navigator.canShare({ files });
    } catch {
      return false;
    }
  }
  return false;
}

/**
 * 사진 파일을 네이티브 문자/공유 창으로 직접 전달 (iOS/Android 사진 자동 첨부 지원)
 */
export async function shareConsultationWithPhotos({
  data,
  photos,
}: {
  data: ConsultationFormData;
  photos: File[];
}): Promise<{ shared: boolean; message: string; smsUrl: string }> {
  const message = formatConsultationMessage(data, photos.length);
  const smsUrl = getSmsLink(message);

  if (canSharePhotosWithFiles(photos)) {
    try {
      await navigator.share({
        title: `${CONFIG.companyName} 출장수리 상담`,
        text: `[받는번호: ${CONFIG.smsNumber}]\n\n${message}`,
        files: photos,
      });
      return { shared: true, message, smsUrl };
    } catch (e: any) {
      if (e.name === 'AbortError') {
        return { shared: false, message, smsUrl };
      }
      console.warn('Native share failed, falling back:', e);
    }
  }

  return { shared: false, message, smsUrl };
}

/**
 * 문자 앱 실행 트리거 함수
 */
export function openSmsApp(data: ConsultationFormData, photoCount: number = 0): { message: string; smsUrl: string } {
  const message = formatConsultationMessage(data, photoCount);
  const smsUrl = getSmsLink(message);

  if (typeof window !== 'undefined') {
    try {
      window.location.href = smsUrl;
    } catch (e) {
      console.warn('Could not launch SMS scheme directly:', e);
    }
  }

  return { message, smsUrl };
}
