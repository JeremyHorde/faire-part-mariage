'use client';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animation';

interface SaveTheDateProps {
  scrollYProgress: MotionValue<number>;
}

export default function SaveTheDateSection({ scrollYProgress }: SaveTheDateProps) {
  const yParallax = useTransform(scrollYProgress, [0.7, 1], [0, 150]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y: yParallax }} className="absolute -top-[150px] -bottom-[150px] z-0">
        <img 
          src="images/2.jpg" 
          className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000"
          alt="Moment complice"
        />
        <div className="absolute -top-[150px] -bottom-[150px] bg-black/20 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 variants={fadeUp} className="font-serif text-[5rem] md:text-[8rem] leading-none mb-4">
            SAVE <br />
            <span className="italic font-light text-[3rem] md:text-[5rem] block -my-4 opacity-80">the</span>
            DATE
          </motion.h2>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 mt-12 mb-16">
            <span className="font-serif text-3xl md:text-5xl italic">26</span>
            <div className="w-px h-12 bg-white/40" />
            <span className="font-serif text-3xl md:text-5xl italic">09</span>
            <div className="w-px h-12 bg-white/40" />
            <span className="font-serif text-3xl md:text-5xl italic">2026</span>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p style={{ fontVariant: 'small-caps' }} className="font-sans text-lg tracking-[0.3em] mb-2">
              Chapelle Saint Luc • Troyes
            </p>
            <p className="font-serif italic text-sm opacity-60">
              Troyes, France
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}