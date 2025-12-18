export interface CompanyInfo {
  name: string;
  representative: string;
  phone: string;
  address: string;
  businessNumber: string;
  serviceArea: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'kakao' | 'blog' | 'instagram' | 'carrot';
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Review {
  id: number;
  customerName: string;
  rating: number;
  content: string;
  date: string;
  tag: string;
}

export interface ServiceItem {
  name: string;
  description: string;
}