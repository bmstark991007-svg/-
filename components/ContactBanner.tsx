import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS_EXTENDED } from '../constants';

const ContactBanner: React.FC = () => {
  const kakao = SOCIAL_LINKS_EXTENDED.find(l => l.icon === 'kakao');
  
  return (
    <section className="bg-white pb-20 md:pb-32 px-6">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          className="relative overflow-hidden rounded-[2.5rem] bg-blue-600 px-8 py-16 text-center text-white shadow-2xl md:px-20 md:py-24"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-400 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-800 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl tracking-tight">지금 바로 깨끗한 공간을 만드세요</h2>
            <p className="mb-10 text-lg text-blue-100 font-medium">부담 없는 무료 견적부터 실시간 채팅 상담까지 무엇이든 물어보세요.</p>
            
            <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`} 
                className="group flex flex-1 items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 text-xl font-bold text-blue-600 shadow-xl transition-all hover:scale-[1.02] active:scale-95"
              >
                <Phone className="h-6 w-6" /> {COMPANY_INFO.phone}
              </a>
              
              <a 
                href={kakao?.url} 
                target="_blank" 
                rel="noreferrer" 
                className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#FAE100] px-8 py-5 text-xl font-bold text-[#371D1E] shadow-xl transition-all hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="h-6 w-6" /> 카톡 채팅 상담
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-90">
              {SOCIAL_LINKS_EXTENDED.filter(l => l.icon !== 'kakao').map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors"
                >
                  {link.name} 바로가기 <ArrowRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;