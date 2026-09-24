import { CONFIG } from '../config';

export interface ConsultationFormData {
  name: string;
  phone: string;
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  location?: string;
  symptoms?: string;
}

/**
 * 상담 신청 내용을 문자 메시지 규격으로 포맷팅합니다.
 */
export function formatConsultationMessage(data: ConsultationFormData): string {
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

  lines.push('');
  lines.push('※ 파손 부위 사진이 있으시면 이 문자에 사진을 첨부(MMS)하여 전송해주시면 보다 빠르고 정확한 견적 산출이 가능합니다.');

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
 * 문자 앱 실행 트리거 함수
 */
export function openSmsApp(data: ConsultationFormData): { message: string; smsUrl: string } {
  const message = formatConsultationMessage(data);
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
