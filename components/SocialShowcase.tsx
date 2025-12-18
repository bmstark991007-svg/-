import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Instagram, MessageCircle, MapPin, Share2 } from 'lucide-react';
import { SOCIAL_LINKS_EXTENDED } from '../constants';

const SocialShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold text-blue-600 bg-blue-50 rounded-full">실시간 소통 채널</span>
          <h2 className="text-3xl font-bold text-[#191f28] md:text-5xl">
            미리클린의 <span className="text-blue-600">진짜 모습</span>을 확인하세요
          </h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">거짓 없는 솔직한 후기와 매일 업데이트되는 작업 현장을 공개합니다.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SOCIAL_LINKS_EXTENDED.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative flex flex-col items-center text-center p-8 rounded-[2.5rem] transition-all duration-300 shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: link.bgLight }}
            >
              <div 
                className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl shadow-md transition-transform group-hover:rotate-12"
                style={{ backgroundColor: link.color }}
              >
                {link.icon === 'instagram' && <Instagram className="h-10 w-10 text-white" />}
                {link.icon === 'blog' && <Share2 className="h-10 w-10 text-white" />}
                {link.icon === 'carrot' && <MapPin className="h-10 w-10 text-white" />}
                {link.icon === 'kakao' && <MessageCircle className="h-10 w-10 text-[#371D1E]" />}
              </div>
              
              <h3 className="mb-2 text-2xl font-bold text-[#191f28]">{link.name}</h3>
              <p className="mb-6 text-sm font-medium text-slate-600 leading-relaxed">
                {link.description}
              </p>
              
              <div 
                className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
                style={{ color: link.color }}
              >
                방문하기 <ExternalLink className="h-4 w-4" />
              </div>
              
              <div 
                className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent transition-colors group-hover:border-opacity-30"
                style={{ borderColor: link.color }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialShowcase;