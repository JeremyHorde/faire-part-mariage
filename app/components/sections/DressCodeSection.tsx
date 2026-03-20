'use client';
import { motion } from 'framer-motion';
import { fadeUp } from '../animation';

export default function DressCodeSection() {
  return (
    <section className="py-40 px-10 text-center">
      <h2 className="section-title font-serif text-4xl italic mb-16">L'Atmosphère</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {['#EAE7E2', '#8C927A', '#5E614A','#4A3545'].map((color, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.1, y: -5 }} 
            className="group flex flex-col items-center gap-3 transition-transform duration-500"
          >
            <div style={{ backgroundColor: color }} className="w-14 h-14 rounded-full shadow-inner border border-black/5" />
            <div className="h-8 w-[1px] bg-mariage-kaki/20 group-hover:bg-mariage-kaki/50 transition-colors" />
          </motion.div>
        ))}
      </div>
      <p 
        style={{ fontVariant: 'small-caps' }} 
        className="font-sans text-[12px] tracking-[0.4em] opacity-60 leading-relaxed text-mariage-kaki-dark"
      >
        nuances vertes & <br /> violettes 
      </p>
    </section>
  );
}