"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animation";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    jours: 0,
    heures: 0,
    minutes: 0,
    secondes: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const target = new Date("2026-09-19T14:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance > 0) {
        setTimeLeft({
          jours: Math.floor(distance / (1000 * 60 * 60 * 24)),
          heures: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secondes: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Si le composant n'est pas encore monté côté client, on affiche un squelette vide
  if (!isMounted) return <section className="py-48 paper-bg"></section>;

  const timeData = [
    { label: "Jours", value: timeLeft.jours },
    { label: "Heures", value: timeLeft.heures },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Secondes", value: timeLeft.secondes },
  ];

  return (
    <section className="py-48 px-6 text-center overflow-hidden paper-bg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="max-w-[500px] mx-auto"
      >
        <motion.span
          variants={fadeUp}
          className="font-sans text-[9px] uppercase tracking-[0.8em] mb-6 block opacity-40 text-mariage-kaki-dark"
        >
          L'Attente
        </motion.span>

        <motion.h3
          variants={fadeUp}
          className="font-serif text-5xl md:text-6xl italic mb-32 tracking-widest text-mariage-kaki-dark"
        >
          Jusqu'au Grand Jour
        </motion.h3>

        <motion.div
          variants={fadeUp}
          className="flex justify-center items-start gap-4 md:gap-12"
        >
          {timeData.map((item, i) => (
            <div key={item.label} className="flex items-center">
              {/* Le Bloc Chiffre + Label */}
              <div className="flex flex-col items-center w-16 md:w-24 group">
                {/* Chiffre monumental en Violet avec effet de largeur fixe pour éviter les sauts */}
                <span className="font-serif text-5xl md:text-7xl font-light text-mariage-violet tabular-nums tracking-tighter transition-transform duration-700 group-hover:scale-110">
                  {String(item.value).padStart(2, "0")}
                </span>

                {/* Ligne séparatrice délicate */}
                <div className="w-full h-px bg-mariage-kaki/20 my-5 group-hover:bg-mariage-violet/40 transition-colors duration-500" />

                {/* Label en Small Caps */}
                <span
                  style={{ fontVariant: "small-caps" }}
                  className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] opacity-60 text-mariage-kaki-dark group-hover:text-mariage-violet transition-colors duration-500"
                >
                  {item.label}
                </span>
              </div>

              {/* Les deux points (:) animés pour simuler le battement du temps */}
              {i < 3 && (
                <div className="font-serif text-3xl md:text-5xl opacity-20 font-extralight text-mariage-kaki -mt-12 mx-1 md:mx-2 animate-pulse">
                  :
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Ligne finale pour lier avec la section suivante */}
        <motion.div
          variants={fadeUp}
          className="w-px h-24 bg-mariage-kaki/20 mx-auto mt-32 draw-line"
        />
      </motion.div>
    </section>
  );
}
