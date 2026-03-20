'use client';
import { motion } from 'framer-motion';
import { fadeUp } from '../animation';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F0F0EE]">
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <img src="images/4.jpg" className="w-full h-full object-cover grayscale opacity-20" alt="Background" />
      </motion.div>

      <div className="z-10 text-center px-4">
        <motion.span variants={fadeUp} initial="hidden" animate="visible" className="block font-sans text-[9px] uppercase tracking-[0.6em] mb-12 opacity-60">
          Un Nouveau Chapitre
        </motion.span>
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="font-serif text-7xl md:text-[9rem] leading-none mb-4 italic"
        >
          Émilie <br />
          <span className="text-4xl md:text-6xl not-italic align-middle opacity-90 mx-4 font-light text-mariage-violet">&</span> <br />
          Jason
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 1 }} className="h-px w-20 bg-mariage-kaki mx-auto mt-10 origin-center" />
      </div>
    </section>
  );
}