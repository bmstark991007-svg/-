import React from 'react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../constants';
import { Phone, MapPin, Building2, User } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191f28] pt-24 pb-12 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-3">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-white">미리클린</h2>
            <p className="mb-8 leading-relaxed font-medium">하청 없는 100% 직영팀 운영. 고객님의 소중한 공간을 가장 쾌적하게 만들어드립니다.</p>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-600">{link.name}</a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="mb-8 text-lg font-bold text-white">업체 정보</h3>
            <div className="grid gap-y-6 gap-x-8 sm:grid-cols-2">
              <div className="flex items-start gap-4"><User className="text-slate-500" /><div><span className="block text-sm">대표자</span><span className="text-slate-200">{COMPANY_INFO.representative}</span></div></div>
              <div className="flex items-start gap-4"><Phone className="text-slate-500" /><div><span className="block text-sm">대표전화</span><span className="text-slate-200">{COMPANY_INFO.phone}</span></div></div>
              <div className="flex items-start gap-4"><Building2 className="text-slate-500" /><div><span className="block text-sm">사업자등록번호</span><span className="text-slate-200">{COMPANY_INFO.businessNumber}</span></div></div>
              <div className="flex items-start gap-4 sm:col-span-2"><MapPin className="text-slate-500" /><div><span className="block text-sm">주소</span><span className="text-slate-200">{COMPANY_INFO.address}</span></div></div>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-white/5 pt-8 text-center text-sm">© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;