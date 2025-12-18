import React from 'react';
import { motion } from 'framer-motion';
import { Users, Coins, ShieldCheck, Sparkles } from 'lucide-react';
import { FEATURES } from '../constants';

const iconMap: Record<string, React.FC<any>> = {
  Users,
  Coins,
  ShieldCheck,
  Sparkles,
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-[#f2f4f6]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl font-bold text-[#191f28] md:text-5xl leading-tight">
            왜 많은 분들이<br />
            <span className="text-blue-600">미리클린</span>을 선택할까요?
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.iconName];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }
                  }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                >
                  <div>
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      {Icon && <Icon className="h-8 w-8" />}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-[#191f28]">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-50/50 blur-2xl transition-all group-hover:bg-blue-100/50" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;