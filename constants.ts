import { CompanyInfo, Feature, Review, ServiceItem, SocialLink } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "미리클린",
  representative: "원동현",
  phone: "010-5748-7140",
  businessNumber: "302-06-28774",
  address: "인천광역시 서구 청라한내로100번길 10, 4층 411호,412호-Q286호",
  serviceArea: "서울, 경기, 인천 (수도권 전체)",
};

export interface SocialLinkExtended extends SocialLink {
  description: string;
  color: string;
  bgLight: string;
}

export const SOCIAL_LINKS_EXTENDED: SocialLinkExtended[] = [
  { 
    name: "당근마켓", 
    url: "https://www.daangn.com/kr/local-profile/39iqdr1mxooq/", 
    icon: "carrot",
    description: "이웃들의 찐 후기와 단골 혜택 확인",
    color: "#ff8224",
    bgLight: "#fff1e6"
  },
  { 
    name: "네이버 블로그", 
    url: "https://blog.naver.com/oneclean93", 
    icon: "blog",
    description: "매일 업데이트되는 실시간 작업 현장",
    color: "#03c75a",
    bgLight: "#e7f9ee"
  },
  { 
    name: "인스타그램", 
    url: "https://www.instagram.com/mirimiri__clean/", 
    icon: "instagram",
    description: "전후 차이가 확실한 비포애프터 감상",
    color: "#e1306c",
    bgLight: "#fdeaf1"
  },
  { 
    name: "카카오톡", 
    url: "http://pf.kakao.com/_xlFxnBn", 
    icon: "kakao",
    description: "24시간 빠르고 친절한 채팅 상담",
    color: "#fae100",
    bgLight: "#fffbe6"
  }
];

// Keep original for compatibility
export const SOCIAL_LINKS: SocialLink[] = SOCIAL_LINKS_EXTENDED;

export const FEATURES: Feature[] = [
  { id: 1, title: "100% 직영팀 운영", description: "하청은 절대 주지 않습니다. 검증된 전문가들이 직접 방문하여 책임지고 청소합니다.", iconName: "Users" },
  { id: 2, title: "합리적인 가격", description: "평당 9,000원부터 시작되는 투명하고 합리적인 프리미엄 입주 청소 서비스를 경험하세요.", iconName: "Coins" },
  { id: 3, title: "확실한 7일 A/S", description: "청소 후에도 안심하세요. 미흡한 부분이 있다면 7일간 책임지고 A/S를 진행해 드립니다.", iconName: "ShieldCheck" },
  { id: 4, title: "3종 무료 서비스", description: "피톤치드 살균, 수전 유리막 코팅, 배수구 스팀 살균을 추가 비용 없이 무료로 제공합니다.", iconName: "Sparkles" }
];

export const SERVICES: ServiceItem[] = [
  { name: "입주청소", description: "신축 아파트 및 빌라 입주 전 미세먼지와 공사 분진 제거" },
  { name: "이사청소", description: "이전 거주자의 생활 오염과 묵은 때를 말끔하게 제거" },
  { name: "거주청소", description: "현재 거주 중인 공간을 쾌적하게 만드는 대청소 서비스" },
  { name: "사무실/상가", description: "업무 효율을 높여주는 쾌적한 비즈니스 환경 조성" },
  { name: "특수청소", description: "화재, 침수 등 특수 장비가 필요한 전문 청소" },
];

export const REVIEWS: Review[] = [
  { id: 1, customerName: "김** 고객님", rating: 5, date: "2024.03.15", tag: "이사청소", content: "직영팀이라 그런지 팀워크가 정말 좋으시네요. 구석구석 안 보이는 곳까지 꼼꼼하게 봐주셔서 감동했습니다. 특히 수전 코팅해주신 게 너무 마음에 들어요!" },
  { id: 2, customerName: "이** 고객님", rating: 5, date: "2024.03.10", tag: "입주청소", content: "평당 가격이 합리적이라 반신반의했는데 퀄리티는 백화점급이네요. 피톤치드 향도 너무 좋고, 새집증후군 걱정이 싹 사라졌습니다. 강추합니다." },
  { id: 3, customerName: "박** 고객님", rating: 5, date: "2024.02.28", tag: "거주청소", content: "청소 검수 때 조금 미흡한 부분이 있어 말씀드렸더니 웃으면서 바로 처리해주셨어요. A/S 확실하다는 말이 빈말이 아니었네요. 감사합니다." }
];