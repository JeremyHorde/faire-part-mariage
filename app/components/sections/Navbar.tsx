'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // UX Premium : La navbar disparaît quand on scrolle vers le bas pour dégager la vue, 
  // et réapparaît dès qu'on remonte légèrement.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: 'Accueil', href: '#home' },
    { name: 'Histoire', href: '#histoire' },
    { name: 'Déroulé', href: '#programme' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'R.S.V.P', href: '#rsvp' },
  ];

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-150%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Courbe de Bézier douce
      className="fixed top-8 left-1/2 -translate-x-1/2 z-[80] w-[90%] max-w-[380px]"
    >
      {/* L'effet "Frosted Glass" (Verre dépoli) ultra-premium */}
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.06)] px-6 py-4 rounded-full flex justify-between items-center">
        
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="group relative font-sans text-[7.5px] uppercase tracking-[0.4em] font-semibold text-mariage-kaki-dark"
          >
            {/* Texte avec transition douce */}
            <span className="relative z-10 group-hover:opacity-50 transition-opacity duration-300">
              {link.name}
            </span>
            
            {/* Micro-interaction : La perle (un point qui apparaît en dessous au survol) */}
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-mariage-kaki rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100"></span>
          </a>
        ))}

      </div>
    </motion.nav>
  );
}