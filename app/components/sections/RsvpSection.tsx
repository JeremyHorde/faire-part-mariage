'use client';
import { motion } from 'framer-motion';

export default function RsvpSection() {
  return (
    <section id="rsvp" className="py-48 px-8 bg-[#FDFDFB]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-[320px] mx-auto border-[0.5px] border-mariage-kaki p-12 text-center relative overflow-hidden group hover:border-mariage-violet transition-colors duration-700 shadow-sm hover:shadow-2xl"
      >
        {/* Arrière-plan subtil qui se teinte très légèrement en violet au survol */}
        <div className="absolute inset-0 bg-transparent group-hover:bg-mariage-violet/[0.03] transition-colors duration-1000" />
        
        <h2 className="font-serif text-5xl italic mb-10 text-mariage-kaki-dark group-hover:text-mariage-violet transition-colors duration-700 relative z-10">
          R.S.V.P
        </h2>
        
        <p style={{ fontVariant: 'small-caps' }} className="font-sans text-[12px] tracking-[0.3em] opacity-50 mb-12 relative z-10">
          avant le 1er mai 2026
        </p>
        
        {/* Le bouton "Call to Action" */}
        <button 
          style={{ fontVariant: 'small-caps' }}
          className="relative z-10 w-full py-5 border border-mariage-kaki font-sans text-[11px] tracking-[0.4em] text-mariage-kaki-dark transition-all duration-700 hover:border-mariage-violet hover:bg-mariage-violet hover:text-white"
        >
          Confirmer ma présence
        </button>
      </motion.div>
      
      <div className="mt-40 text-center opacity-40">
        <p className="font-serif text-2xl italic mb-4 text-mariage-violet">É & J</p>
        <p style={{ fontVariant: 'small-caps' }} className="font-sans text-[10px] tracking-widest text-mariage-kaki">
          Créé avec amour pour notre famille
        </p>
      </div>
    </section>
  );
}