'use client';
import { motion } from 'framer-motion';
import { fadeUp } from '../animation';

export default function TimelineSection() {
  return (
    <section id="programme" className="relative py-60 paper-bg-kaki text-mariage-white overflow-hidden">            
      <div className="relative z-10 px-8 max-w-[430px] mx-auto">
        <div className="text-center mb-48">
          <motion.span 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="font-sans text-[9px] uppercase tracking-[0.8em] mb-6 block opacity-40"
          >
            Le Temps s'Arrête
          </motion.span>
          <h2 className="reveal-title font-serif text-6xl italic">Le Programme</h2>
          <div className="w-12 h-px bg-white/20 mx-auto mt-10 draw-line"></div>
        </div>
        
        <div className="relative space-y-40">
          <div className="absolute left-[7px] top-0 bottom-0 w-[0.5px] bg-white/20 draw-line"></div>
        
        {[
          { time: "14:30", event: "Cérémonie Civile", loc: "Mairie du IVe", detail: "Signature des registres" },
          { time: "16:00", event: "Cérémonie Laïque", loc: "Jardins du Domaine", detail: "Échange des vœux sous les chênes" },
          { time: "18:00", event: "Cocktail", loc: "Terrasse Ouest", detail: "Jazz Live & Rafraîchissements" },
          { time: "20:30", event: "Dîner de Gala", loc: "La Grande Orangerie", detail: "Menu gastronomique de saison" },
          { time: "23:00", event: "Ouverture du Bal", loc: "Salon Royal", detail: "Célébration jusqu'à l'aube" }
        ].map((item, idx) => (
          <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative pl-12 group cursor-default">

            {/* LE POINT INTERACTIF : Devient violet au survol */}
            <div className="absolute left-0 top-3 w-3.5 h-3.5 rounded-full border border-white/30 flex items-center justify-center transition-colors duration-500 group-hover:border-mariage-violet">
              <div className="w-1 h-1 bg-white rounded-full transition-all duration-500 group-hover:scale-[2] group-hover:bg-mariage-violet"></div>
            </div>
        
            <div className="flex flex-col gap-1">
              <span className="font-serif text-3xl italic text-white/90 group-hover:text-mariage-violet transition-colors duration-500">{item.time}</span>
              <h3 className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold">{item.event}</h3>
              <p className="font-sans text-[9px] uppercase tracking-[0.2em] opacity-40 mb-2">{item.loc}</p>
              <p style={{ fontVariant: 'small-caps' }} className="font-sans text-[13px] tracking-widest opacity-60 leading-relaxed border-l border-white/10 pl-4 py-1 group-hover:border-mariage-violet/30 transition-colors duration-500">
                {item.detail}
              </p>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
      
      <div className="mt-40 flex justify-center opacity-10">
        <div className="w-px h-24 bg-white draw-line"></div>
      </div>
    </section>
  );
}