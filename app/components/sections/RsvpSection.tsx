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
        <br></br>

        <p style={{ fontVariant: 'small-caps' }} className="font-sans text-[12px] tracking-[0.3em]  mb-12 relative z-10">
          Veuillez confirmer votre présence avant le 08 mai 2026
        </p>

        <a 
          href="https://forms.gle/SFwB8sNjvGxWTdE19"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-block px-6 py-3 border border-mariage-kaki rounded-full font-sans text-sm tracking-[0.2em] uppercase text-mariage-kaki-dark transition-colors duration-500 hover:border-mariage-kaki hover:bg-mariage-kaki hover:text-[#FDFDFB]"
        >
          Confirmer
        </a>
      </motion.div>
      
      <div className="mt-40 text-center opacity-40">
        <p className="font-serif text-2xl italic mb-4 text-mariage-violet">É & J</p>
        <p style={{ fontVariant: 'small-caps' }} className="font-sans text-[10px] tracking-widest text-mariage-kaki">
          Créé avec amour pour nos invités
        </p>
      </div>
    </section>
  );
}