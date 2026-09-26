/**
 * 해드림 사이드미러 - 환경 설정 및 콘텐츠 데이터 구성
 * 전화번호, 업체 정보, 이미지 경로, 카피 문구 등 모든 주요 정보는 이곳에서 손쉽게 수정 가능합니다.
 */

// generated images paths
import heroImage from './assets/images/hero_side_mirror_1790131639303.jpg';
import heroVanImage from './assets/images/mechanic_repair_van_1790132958410.jpg';
import beforeImage from './assets/images/right_mirror_damaged_1790139658797.jpg';
import afterImage from './assets/images/chatgpt_com_20260923-141210_image.png';

export const CONFIG = {
  // 업체 기본 정보
  companyName: '해드림 사이드미러',
  serviceType: '자동차 사이드미러 출장수리 전문',
  
  // 연락처 정보 (전화번호 및 문자 수신 번호)
  phoneNumber: '010-9210-9318',
  phoneCallUrl: 'tel:01092109318',
  smsNumber: '010-9210-9318',
  smsCleanNumber: '01092109318',
  
  // 출장 서비스 정보
  serviceArea: '출장 가능 지역 및 일정은 상담을 통해 확인해주세요.',
  consultationTime: '상담 가능 시간 : 문의 접수 시 순차적 연락',
  
  // 이미지 경로 설정 (실제 업체 사진으로 교체 시 이곳의 경로만 변경하면 됩니다)
  images: {
    hero: heroImage,
    heroVan: heroVanImage,
    before: beforeImage,
    after: afterImage,
  },

  // 사업자 정보
  businessInfo: {
    companyName: '해드림 사이드미러',
    representative: '김승조',
    businessNumber: '252-14-01043',
    address: '경기도 양주시 옥정서로 130',
    disclaimer: '본 사이트는 사이드미러 출장수리 사전 상담 접수를 위한 안내 페이지입니다.',
  },
};

// SECTION 02. 고객의 문제 공감 (6개 항목)
export const PROBLEM_ITEMS = [
  {
    id: '01',
    title: '주차하다 사이드미러를 박았어요',
    desc: '기둥이나 벽, 타 차량에 부딪혀 외관 파손 또는 흔들림 발생',
    iconName: 'ParkingSquare',
  },
  {
    id: '02',
    title: '접촉사고로 사이드미러가 깨졌어요',
    desc: '주행 중 긁힘 또는 충격으로 인한 거울 및 하우징 파손',
    iconName: 'ShieldAlert',
  },
  {
    id: '03',
    title: '사이드미러가 접히지 않아요',
    desc: '전동 접이 기능 고장, 헛도는 소리만 나고 펴지지 않음',
    iconName: 'RotateCcw',
  },
  {
    id: '04',
    title: '거울만 깨졌는데 전체를 교체해야 하나요?',
    desc: '불필요한 전체 어셈블리 통교체 없이 필요한 부품 위주 점검',
    iconName: 'Sparkles',
  },
  {
    id: '05',
    title: '사이드미러가 덜렁거리거나 흔들려요',
    desc: '고정 부위 크랙 또는 내부 브래킷 파손으로 인한 주행 불안',
    iconName: 'Activity',
  },
  {
    id: '06',
    title: '정비소까지 차를 가져가기가 어려워요',
    desc: '바쁜 직장 업무나 이동 곤란 시 고객이 있는 장소로 출장 방문',
    iconName: 'MapPin',
  },
];

// SECTION 03. 서비스 소개 (4개 카드)
export const SERVICE_ITEMS = [
  {
    id: '01',
    title: '사이드미러 파손 수리',
    summary: '파손 상태를 확인하고 필요한 부분만 수리합니다.',
    details: '외부 충격으로 인한 하우징 균열, 파손 부위의 상태를 세밀하게 진단하여 합리적인 수리 방안을 제시합니다.',
    badge: '정밀 점검',
  },
  {
    id: '02',
    title: '사이드미러 교체',
    summary: '차량에 맞는 사이드미러 부품으로 교체합니다.',
    details: '차종 및 연식에 호환되는 사이드미러 부품을 준비하여 현장에서 안전하고 깔끔하게 교체 장착합니다.',
    badge: '규격 부품',
  },
  {
    id: '03',
    title: '접이·모터 이상',
    summary: '접히지 않거나 작동하지 않는 문제를 점검합니다.',
    details: '내부 전동 모터 기어 이상, 헛돌림 현상, 배선 접촉 불량 등 구동 관련 문제를 확인하고 조치합니다.',
    badge: '모터 점검',
  },
  {
    id: '04',
    title: '거울·커버 교체',
    summary: '거울 또는 커버 등 필요한 부품만 교체할 수 있습니다.',
    details: '유리 거울 단독 파손이나 겉면 도장 커버 파손 시, 불필요한 전체 교체 없이 필요한 파츠만 교체 상담해드립니다.',
    badge: '부분 교체',
  },
];

// SECTION 04. 출장수리의 장점 (3개 핵심 장점)
export const BENEFIT_ITEMS = [
  {
    id: '01',
    title: '현장 출장',
    subtitle: '고객이 있는 곳으로 직접 방문',
    description: '집 앞 주차장, 회사 주차장 등 차량이 있는 곳으로 방문하여 수고로운 정비소 입고 과정 없이 편리하게 해결해드립니다.',
    iconName: 'Truck',
  },
  {
    id: '02',
    title: '빠른 상담',
    subtitle: '전화 또는 상담 신청으로 간편하게 접수',
    description: '파손 사진과 차종 정보만 남겨주시면, 방문 가능한 일정과 최적의 수리 방식을 신속하게 상담 안내해드립니다.',
    iconName: 'MessageSquareText',
  },
  {
    id: '03',
    title: '필요한 부분만',
    subtitle: '상태를 확인하고 필요한 수리 방법을 안내',
    description: '무조건적인 전체 통교체를 권하지 않고, 상태 진단에 따라 거울/커버/모터 등 실제 필요한 조치 방식을 우선 상담합니다.',
    iconName: 'Wrench',
  },
];

// SECTION 05. 수리 과정 (4단계)
export const PROCESS_STEPS = [
  {
    step: '01',
    title: '사진 보내기',
    description: '파손된 사이드미러 사진을 보내주세요.',
    tips: '차종, 연식과 함께 파손 부위가 잘 보이게 찍어주세요.',
  },
  {
    step: '02',
    title: '상태 확인',
    description: '차량 및 파손 상태를 확인합니다.',
    tips: '부품 호환성 및 수리 또는 교체 필요 여부를 확인합니다.',
  },
  {
    step: '03',
    title: '출장 일정 상담',
    description: '방문 가능한 시간과 장소를 상담합니다.',
    tips: '고객님의 일정과 계신 위치에 맞춰 방문 스케줄을 조율합니다.',
  },
  {
    step: '04',
    title: '현장 수리',
    description: '약속된 장소에서 사이드미러를 수리합니다.',
    tips: '도착 후 안전하게 작업을 진행하고 정상 작동 여부를 함께 확인합니다.',
  },
];

// SECTION 06. 차종 대응
export const VEHICLE_BRANDS = [
  { name: '현대', eng: 'HYUNDAI', desc: '아반떼, 쏘나타, 그랜저, 싼타페, 팰리세이드 등' },
  { name: '기아', eng: 'KIA', desc: 'K3, K5, K8, 스포티지, 쏘렌토, 카니발 등' },
  { name: '제네시스', eng: 'GENESIS', desc: 'G70, G80, G90, GV70, GV80 등' },
  { name: '쉐보레', eng: 'CHEVROLET', desc: '스파크, 말리부, 트랙스, 트레일블레이저 등' },
  { name: '르노', eng: 'RENAULT', desc: 'SM3, SM5, SM6, QM3, QM6, XM3 등' },
  { name: 'KG모빌리티', eng: 'KGM', desc: '티볼리, 코란도, 토레스, 렉스턴 등' },
];

// SECTION 08. 신뢰 영역 (확인된 원칙 기반 5개 요소)
export const TRUST_POINTS = [
  {
    title: '사이드미러 수리 전문',
    description: '차량 전체가 아닌 사이드미러에 집중하여 정확하고 숙련된 점검 및 조치를 지향합니다.',
    iconName: 'Crosshair',
  },
  {
    title: '출장수리 방식',
    description: '정비소를 찾아가 대기하는 번거로움 없이 고객님의 생활 동선 안에서 해결합니다.',
    iconName: 'Navigation',
  },
  {
    title: '차량별 상태 확인',
    description: '단순 일괄 처리가 아닌 차종과 연식, 파손 부위의 개별 상태를 면밀히 파악합니다.',
    iconName: 'SearchCheck',
  },
  {
    title: '수리 전 상담',
    description: '방문 전 사진 확인과 명확한 사전 소통을 통해 고객이 납득할 수 있는 수리 방법을 안내합니다.',
    iconName: 'MessagesSquare',
  },
  {
    title: '현장 방문 서비스',
    description: '약속된 시간과 장소에 직접 찾아가 현장에서 투명하게 확인하고 작업합니다.',
    iconName: 'MapPinCheck',
  },
];

// SECTION 09. FAQ (5개 질문 답변)
export const FAQ_ITEMS = [
  {
    question: '사이드미러가 완전히 깨졌는데 수리할 수 있나요?',
    answer: '파손 범위와 차량 상태에 따라 수리 또는 교체가 필요할 수 있습니다. 사진을 보내주시면 상담을 통해 확인해드립니다.',
  },
  {
    question: '출장수리는 어디까지 오시나요?',
    answer: '출장 가능 지역과 일정은 상담을 통해 확인해주세요.',
  },
  {
    question: '차량을 움직이지 못해도 가능한가요?',
    answer: '사이드미러 상태와 차량 상황에 따라 출장수리가 가능할 수 있습니다. 먼저 상담해주세요.',
  },
  {
    question: '비용은 얼마인가요?',
    answer: '차종, 연식, 파손 부위와 필요한 부품에 따라 달라질 수 있습니다. 차량 정보와 파손 사진을 보내주시면 상담해드립니다.',
  },
  {
    question: '사진만 보내도 상담이 가능한가요?',
    answer: '네. 차량의 차종·연식과 사이드미러 파손 사진을 함께 보내주시면 상담에 도움이 됩니다.',
  },
];
