'use client';

import { useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Import de tous les composants
import Navbar from '../sections/Navbar';
import HeroSection from '../sections/HeroSection';
import StorySection from '../sections/StorySection';
import TimelineSection from '../sections/TimelineSection';
import GallerySection from '../sections/GallerySection';
import DressCodeSection from '../sections/DressCodeSection';
import CountdownSection from '../sections/CountdownSection';
import SaveTheDateSection from '../sections/SaveTheDateSection';
import RsvpSection from '../sections/RsvpSection';

gsap.registerPlugin(ScrollTrigger);

export default function SiteContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Hook Framer Motion géré au plus haut niveau pour le parallaxe
  const { scrollYProgress } = useScroll(); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation globale pour les titres
      gsap.utils.toArray<HTMLElement>('.section-title, .reveal-title').forEach((title) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 1.5,
          ease: "expo.out" // "expo.out" ou "power4.out"
        });
      });

      // Animation globale pour les lignes de séparation
      gsap.utils.toArray<HTMLElement>('.draw-line').forEach((line) => {
        gsap.from(line, {
          scrollTrigger: { trigger: line, start: "top 90%" },
          scaleX: 0, scaleY: 0, duration: 2, ease: "expo.out"
        });
      });

      gsap.to(".parallax-img", {
        scrollTrigger: {
          trigger: ".parallax-img",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: -100,
        ease: "none"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-mariage-white text-mariage-kaki">
      
      <Navbar />
      <HeroSection />
      <StorySection />
      <TimelineSection />
      <GallerySection />
      <DressCodeSection />
      <CountdownSection />
      <SaveTheDateSection scrollYProgress={scrollYProgress} />
      <RsvpSection />

    </div>
  );
}