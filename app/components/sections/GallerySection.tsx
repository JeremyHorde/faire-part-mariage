'use client';
import { motion } from 'framer-motion';
import { fadeUp } from '../animation'; // Assure-toi que le chemin est correct

export default function GallerySection() {
  return (
    <section id="galerie" className="paper-bg py-48 overflow-hidden relative">
      
      {/* --- En-tête --- */}
      <div className="px-8 text-center relative z-10">
        <motion.span 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="font-sans text-[9px] uppercase tracking-[0.8em] mb-4 block opacity-40"
        >
          Nos Souvenirs
        </motion.span>
        <h2 className="reveal-title font-serif text-5xl italic text-mariage-kaki-dark">
          Le Tableau
        </h2>
      </div>

      {/* --- Le Moodboard (Entrée simple et élégante) --- */}
      <div className="relative w-full max-w-[430px] mx-auto h-[750px] mt-24 px-4">
        
        {/* Photo 1 : En haut à gauche */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-0 left-4 w-[55%] bg-white p-2 shadow-xl z-10 group -rotate-3"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="images/1.Jpg" 
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
              alt="Moment 1"
            />
          </div>
          <p style={{ fontVariant: 'small-caps' }} className="font-sans text-[10px] tracking-widest text-center mt-2 opacity-60">
            Été 2024
          </p>
        </motion.div>

        {/* Photo 2 : Au centre à droite */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-[220px] right-2 w-[65%] bg-white p-2.5 shadow-2xl z-20 group rotate-2"
        >
          <div className="aspect-square overflow-hidden">
            <img 
              src="images/3.Jpg" 
              className="w-full h-full object-cover grayscale-[0.1] group-hover:scale-105 transition-all duration-1000"
              alt="Moment 2"
            />
          </div>
          <p style={{ fontVariant: 'small-caps' }} className="font-sans text-[11px] tracking-[0.2em] text-center mt-3 text-mariage-kaki-dark">
            Promesses d'aube
          </p>
        </motion.div>

        {/* Photo 3 : En bas à gauche */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute bottom-[60px] left-6 w-[50%] bg-white p-2 shadow-xl z-30 group -rotate-1"
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src="images/5.Jpg" 
              className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
              alt="Moment 3"
            />
          </div>
          <p style={{ fontVariant: 'small-caps' }} className="font-sans text-[10px] tracking-widest text-center mt-2 opacity-60">
            Hiver 2023
          </p>
        </motion.div>

        {/* Élément Typographique Volant */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="absolute bottom-[180px] right-8 z-0"
        >
          <span className="font-serif text-[4rem] italic opacity-10 leading-none">
            Love
          </span>
        </motion.div>
      </div>

      {/* --- Phrase de liaison --- */}
      <div className="mt-10 px-10 text-center max-w-[320px] mx-auto">
        <div className="w-px h-16 bg-mariage-kaki/20 mx-auto mb-8 draw-line"></div>
        <p 
          style={{ fontVariant: 'small-caps' }} 
          className="font-sans text-xs tracking-[0.3em] italic opacity-50 leading-relaxed"
        >
          chaque image est une note dans la symphonie de notre vie.
        </p>
      </div>

    </section>
  );
}
