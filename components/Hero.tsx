import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Phone, Instagram, Share2, MapPin } from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS_EXTENDED } from '../constants';

const Particles = () => {
  const particles = Array.from({ length: 20 });
  return (
    <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20 blur-[1px]"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.3 + 0.1,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 4 + 1 + "px",
            height: Math.random() * 4 + 1 + "px",
          }}
        />
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-[105vh] w-full overflow-hidden bg-slate-950">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2664&auto=format&fit=crop"
          alt="Clean Empty Room"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/70 to-[#f2f4f6]" />
        <Particles />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl shadow-lg drop-shadow-2xl">
              공간의 가치를<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                회복합니다
              </span>
            </h1>
            
            <div className="mb-12 rounded-2xl bg-white/5 p-1 backdrop-blur-md border border-white/10 shadow-2xl">
              <div className="rounded-xl bg-slate-900/40 px-6 py-4 sm:px-10 sm:py-6">
                <p className="text-xl font-bold text-white sm:text-2xl md:text-3xl leading-snug">
                  <span className="text-blue-300">하청 없는 100% 직영팀</span>의<br className="sm:hidden" /> 프리미엄 청소 서비스
                </p>
              </div>
            </div>

            <div className="flex w-full max-w-sm flex-col gap-4 sm:flex-row items-center">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-blue-600 px-8 py-5 text-xl font-bold text-white shadow-[0_8px_30px_rgb(37,99,235,0.4)] transition-all active:scale-95 hover:bg-blue-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Phone className="h-6 w-6" />
                무료 견적 받기
              </a>
            </div>

            {/* Hero Quick Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex flex-wrap justify-center gap-3"
            >
              {SOCIAL_LINKS_EXTENDED.filter(l => l.icon !== 'kakao').map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                >
                  {link.icon === 'instagram' && <Instagram className="h-4 w-4" />}
                  {link.icon === 'blog' && <Share2 className="h-4 w-4" />}
                  {link.icon === 'carrot' && <MapPin className="h-4 w-4" />}
                  {link.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/80">
            <span className="text-xs font-medium tracking-widest drop-shadow-md">SCROLL</span>
            <ChevronDown className="h-6 w-6 drop-shadow-md" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;