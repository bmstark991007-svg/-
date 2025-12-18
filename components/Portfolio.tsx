import React from 'react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  return (
    <section className="bg-[#f2f4f6] py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#191f28] md:text-5xl">
              결과로 증명하는<br/>
              <span className="text-blue-600">청소 퀄리티</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 font-medium md:max-w-md md:text-right">보이지 않는 구석까지 완벽하게 케어하는 현장입니다.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1527513527768-4bdc967af452?q=80&w=2070&auto=format&fit=crop" alt="Living Room" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">LIVING ROOM</span>
              <h3 className="text-2xl font-bold text-white">거실 창틀 및 바닥 케어</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2768&auto=format&fit=crop" alt="Kitchen" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">KITCHEN</span>
              <h3 className="text-2xl font-bold text-white">주방 후드 및 싱크대 살균</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;