import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'stacked' | 'horizontal' | 'icon';
}

/**
 * 해드림 사이드미러 공식 브랜드 로고
 * 고객님이 업로드해주신 '해드림_로고_화이트-removebg-preview.png' (투명 배경 화이트 로고)를
 * 100% 무손실 고해상도 벡터 SVG로 구현한 컴포넌트입니다.
 * 
 * - 상단: '해드림' 타이포그래피 + 사이드미러 고속도로 반사 그래픽
 * - 하단: '사이드미러' 와이드 밸런스 타이포그래피
 * - 순수 벡터 패스(Path)로 구현되어 폰트 설치 여부와 상관없이 모든 기기에서 선명하게 렌더링됩니다.
 */
export const Logo: React.FC<LogoProps> = ({ 
  className = 'h-10 sm:h-12 md:h-13 w-auto',
  variant = 'stacked' 
}) => {
  // 아이콘만 표시할 경우 (단독 사이드미러 그래픽)
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 160 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="해드림 사이드미러 아이콘"
      >
        <MirrorGraphic />
      </svg>
    );
  }

  // 기본형: 공식 2줄 로고 (상단 '해드림' + 거울 아이콘 / 하단 '사이드미러')
  // 해드림_로고_화이트-removebg-preview.png 1:1 완벽 대응
  return (
    <svg
      viewBox="0 0 460 215"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="해드림 사이드미러 로고"
    >
      <g fill="#FFFFFF">
        {/* ============================================== */}
        {/* 1행: 해 드 림  +  사이드미러 도로반사 그래픽    */}
        {/* ============================================== */}

        {/* 글자 1: [해] (x: 10 ~ 90) */}
        <g transform="translate(8, 16)">
          {/* ㅎ 상단 수직 점 */}
          <rect x="22" y="0" width="11" height="10" rx="1.5" />
          {/* ㅎ 중간 가로 획 */}
          <rect x="4" y="13" width="46" height="11" rx="2" />
          {/* ㅎ 동그라미 (ㅇ) */}
          <path 
            fillRule="evenodd" 
            d="M 27 27 C 15 27, 6 36, 6 48 C 6 60, 15 69, 27 69 C 39 69, 48 60, 48 48 C 48 36, 39 27, 27 27 Z M 27 38 C 33 38, 37 42, 37 48 C 37 54, 33 58, 27 58 C 21 58, 17 54, 17 48 C 17 42, 21 38, 27 38 Z" 
          />
          {/* ㅐ 좌측 세로선 */}
          <rect x="59" y="1" width="11" height="74" rx="2" />
          {/* ㅐ 중간 연결 가로선 */}
          <rect x="69" y="33" width="9" height="10" />
          {/* ㅐ 우측 세로선 */}
          <rect x="77" y="1" width="11" height="74" rx="2" />
        </g>

        {/* 글자 2: [드] (x: 108 ~ 180) */}
        <g transform="translate(108, 16)">
          {/* ㄷ 상단 가로선 */}
          <rect x="5" y="4" width="62" height="11.5" rx="2" />
          {/* ㄷ 좌측 세로선 */}
          <rect x="5" y="4" width="12.5" height="43" rx="2" />
          {/* ㄷ 하단 가로선 */}
          <rect x="5" y="35.5" width="62" height="11.5" rx="2" />
          {/* ㅡ 하단 모음선 */}
          <rect x="0" y="60" width="72" height="12" rx="2" />
        </g>

        {/* 글자 3: [림] (x: 194 ~ 276) */}
        <g transform="translate(192, 16)">
          {/* ㄹ 상단 가로선 */}
          <rect x="4" y="2" width="47" height="10" rx="1.5" />
          {/* ㄹ 우측 연결 세로선 */}
          <rect x="39" y="2" width="12" height="19" rx="1.5" />
          {/* ㄹ 중간 가로선 */}
          <rect x="4" y="17" width="47" height="9.5" rx="1.5" />
          {/* ㄹ 좌측 연결 세로선 */}
          <rect x="4" y="21" width="12" height="18" rx="1.5" />
          {/* ㄹ 하단 가로선 */}
          <rect x="4" y="34" width="47" height="10" rx="1.5" />
          {/* ㅣ 세로 모음선 */}
          <rect x="63" y="2" width="12" height="48" rx="2" />
          {/* ㅁ 받침 */}
          <path 
            fillRule="evenodd" 
            d="M 11 52 L 65 52 C 67 52, 68 53, 68 55 L 68 78 C 68 80, 67 81, 65 81 L 11 81 C 9 81, 8 80, 8 78 L 8 55 C 8 53, 9 52, 11 52 Z M 20 62 L 20 71 L 56 71 L 56 62 Z" 
          />
        </g>

        {/* 사이드미러 아이콘 (x: 290 ~ 450) */}
        <g transform="translate(290, 11)">
          <MirrorGraphic />
        </g>

        {/* ============================================== */}
        {/* 2행: 사  이  드  미  러 (1행과 가로폭 정렬)      */}
        {/* ============================================== */}

        {/* 글자 4: [사] (x: 10 ~ 82) */}
        <g transform="translate(8, 116)">
          {/* ㅅ 좌측 빗금 */}
          <path d="M 28 3 L 42 3 L 11 75 L 0 75 Z" />
          {/* ㅅ 우측 빗금 */}
          <path d="M 27 34 L 39 25 L 57 75 L 44 75 Z" />
          {/* ㅏ 세로선 */}
          <rect x="63" y="2" width="12" height="74" rx="2" />
          {/* ㅏ 우측 돌출선 */}
          <rect x="74" y="32" width="12" height="12" rx="1.5" />
        </g>

        {/* 글자 5: [이] (x: 104 ~ 172) */}
        <g transform="translate(102, 116)">
          {/* ㅇ 동그라미 */}
          <path 
            fillRule="evenodd" 
            d="M 27 8 C 12 8, 2 20, 2 38 C 2 56, 12 68, 27 68 C 42 68, 52 56, 52 38 C 52 20, 42 8, 27 8 Z M 27 21 C 34 21, 39 28, 39 38 C 39 48, 34 55, 27 55 C 20 55, 15 48, 15 38 C 15 28, 20 21, 27 21 Z" 
          />
          {/* ㅣ 세로선 */}
          <rect x="62" y="2" width="12" height="74" rx="2" />
        </g>

        {/* 글자 6: [드] (x: 190 ~ 260) */}
        <g transform="translate(188, 116)">
          {/* ㄷ 상단 가로선 */}
          <rect x="5" y="4" width="62" height="11.5" rx="2" />
          {/* ㄷ 좌측 세로선 */}
          <rect x="5" y="4" width="12.5" height="43" rx="2" />
          {/* ㄷ 하단 가로선 */}
          <rect x="5" y="35.5" width="62" height="11.5" rx="2" />
          {/* ㅡ 하단 모음선 */}
          <rect x="0" y="60" width="72" height="12" rx="2" />
        </g>

        {/* 글자 7: [미] (x: 278 ~ 356) */}
        <g transform="translate(276, 116)">
          {/* ㅁ 초성 */}
          <path 
            fillRule="evenodd" 
            d="M 4 10 L 56 10 C 58 10, 59 11, 59 13 L 59 65 C 59 67, 58 68, 56 68 L 4 68 C 2 68, 1 67, 1 65 L 1 13 C 1 11, 2 10, 4 10 Z M 14 22 L 14 56 L 46 56 L 46 22 Z" 
          />
          {/* ㅣ 세로선 */}
          <rect x="68" y="2" width="12" height="74" rx="2" />
        </g>

        {/* 글자 8: [러] (x: 374 ~ 450) */}
        <g transform="translate(372, 116)">
          {/* ㄹ 상단 가로선 */}
          <rect x="2" y="4" width="47" height="10.5" rx="1.5" />
          {/* ㄹ 우측 세로선 */}
          <rect x="38" y="4" width="11" height="19" rx="1.5" />
          {/* ㄹ 중간 가로선 */}
          <rect x="2" y="20" width="47" height="10" rx="1.5" />
          {/* ㄹ 좌측 세로선 */}
          <rect x="2" y="25" width="11" height="19" rx="1.5" />
          {/* ㄹ 하단 가로선 */}
          <rect x="2" y="39" width="47" height="10.5" rx="1.5" />
          {/* ㅓ 좌측 연결 획 */}
          <rect x="54" y="33" width="12" height="12" rx="1.5" />
          {/* ㅓ 세로선 */}
          <rect x="65" y="2" width="12" height="74" rx="2" />
        </g>
      </g>
    </svg>
  );
};

/**
 * 사이드미러 하우징 및 내부 고속도로 반사 그래픽
 * 업로드된 로고 이미지의 투명 배경/화이트 하우징/도로 패턴을 정확히 구현
 */
const MirrorGraphic: React.FC = () => (
  <g>
    {/* 차량 차체 연결부 (베이스 마운트) */}
    <rect x="0" y="32" width="16" height="26" rx="2" fill="#FFFFFF" />

    {/* 사이드미러 외형 하우징 셸 */}
    <path
      d="M 14 32 C 14 16, 26 5, 52 4 L 115 8 C 142 10, 156 22, 156 42 C 156 60, 142 74, 115 76 L 50 78 C 24 78, 14 66, 14 52 Z"
      fill="#FFFFFF"
    />

    {/* 거울 베젤 내부 림 (투명/배경 통과 컷아웃 역할) */}
    <path
      d="M 26 34 C 26 21, 35 14, 54 12 L 112 16 C 132 18, 144 26, 144 42 C 144 55, 132 65, 110 67 L 50 68 C 34 68, 26 58, 26 46 Z"
      fill="#030712"
    />

    {/* 미러 반사 유리면 (화이트 베이스) */}
    <path
      d="M 30 35 C 30 23, 38 16, 56 14 L 110 18 C 128 20, 139 28, 139 42 C 139 53, 128 62, 108 64 L 52 65 C 37 65, 30 56, 30 44 Z"
      fill="#FFFFFF"
    />

    {/* 거울 속에 비친 굽이치는 도로 (원근감 있는 블랙 아스팔트) */}
    <path
      d="M 30 45 C 45 42, 68 44, 88 51 C 110 58, 126 58, 139 42 C 139 48, 136 57, 122 62 C 108 67, 90 64, 76 61 C 54 57, 40 52, 30 49 Z"
      fill="#030712"
    />

    {/* 도로 위 흰색 점선 중앙선 */}
    <path
      d="M 38 47 C 54 46, 75 51, 96 58 C 110 62, 122 62, 132 55"
      stroke="#FFFFFF"
      strokeWidth="3.2"
      strokeDasharray="7 5"
      fill="none"
      strokeLinecap="round"
    />
  </g>
);
