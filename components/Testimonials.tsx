import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32 rounded-t-[2.5rem] relative z-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-[#191f28] md:text-5xl">고객 후기</h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">미리클린을 경험하신 고객님들의 100% 리얼 스토리</p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <motion.div key={review.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }} className="flex flex-col justify-between rounded-[2rem] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-100">
              <div>
                <div className="mb-6 flex gap-1">{[...Array(review.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}</div>
                <Quote className="h-10 w-10 text-blue-100 mb-4 fill-current" />
                <p className="mb-8 text-lg font-medium text-[#191f28]">"{review.content}"</p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold">{review.customerName.charAt(0)}</div>
                <div>
                  <h4 className="font-bold text-[#191f28]">{review.customerName}</h4>
                  <div className="text-sm text-slate-500 font-medium"><span>{review.tag}</span> • <span>{review.date}</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;