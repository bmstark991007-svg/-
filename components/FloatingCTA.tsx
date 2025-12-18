import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../constants';

const FloatingCTA: React.FC = () => {
  const kakaoLink = SOCIAL_LINKS.find(l => l.icon === 'kakao')?.url || '#';
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-8 pt-4 md:hidden">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-lg border-t border-white/20 shadow-lg" />
      <div className="relative flex w-full gap-4">
        <a href={kakaoLink} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#FAE100] px-4 py-4 font-bold text-[#371D1E] shadow-lg shadow-yellow-400/20 active:scale-95 transition-transform"><MessageCircle /> 카톡 상담</a>
        <a href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-4 font-bold text-white shadow-lg shadow-blue-600/30 active:scale-95 transition-transform"><PhoneCall /> 전화 문의</a>
      </div>
    </div>
  );
};

export default FloatingCTA;