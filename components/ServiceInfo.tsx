import React from 'react';
import { motion } from 'framer-motion';
import { Check, MapPin } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../constants';

const ServiceInfo: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white rounded-[2.5rem]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block mb-3 text-sm font-bold text-blue-600 uppercase tracking-widest">Our Services</span>
              <h3 className="mb-12 text-3xl font-bold text-[#191f28] md:text-5xl leading-tight">
                어떤 공간이든<br />
                <span className="text-blue-600">완벽하게 케어</span>합니다
              </h3>
              
              <div className="space-y-4">
                {SERVICES.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="group flex items-center gap-6 rounded-3xl bg-[#f9fafb] p-6 transition-all hover:bg-blue-50 hover:shadow-sm"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Check className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#191f28] group-hover:text-blue-700 transition-colors">{service.name}</h4>
                      <p className="mt-1 text-slate-500 font-medium">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 lg:mt-24">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-24 overflow-hidden rounded-[2.5rem] bg-[#191f28] p-10 text-white shadow-2xl"
            >
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-600/30 blur-[60px]"></div>
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
                  <MapPin className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="mb-4 text-3xl font-bold">서비스 가능 지역</h3>
                <p className="mb-10 text-lg text-slate-400 leading-relaxed font-medium">{COMPANY_INFO.serviceArea}</p>
                <div className="space-y-6">
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                    <span className="block text-sm text-slate-400 mb-2 font-medium">수도권 전 지역</span>
                    <strong className="text-2xl font-bold text-white tracking-tight">서울, 경기, 인천</strong>
                  </div>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`} className="inline-flex w-full items-center justify-center rounded-xl bg-white py-4 text-lg font-bold text-[#191f28] transition-transform active:scale-95">상담 전화 연결하기</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;