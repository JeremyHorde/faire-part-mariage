'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'auto';
        onComplete();
      }
    });

    tl.fromTo(textRef.current, 
      { opacity: 0, y: 30, filter: "blur(15px)", scale: 0.9 },
      { duration: 2, opacity: 1, y: 0, filter: "blur(0px)", scale: 1, ease: "power4.out" }
    )
    .to(textRef.current, { 
      duration: 1, 
      opacity: 0, 
      letterSpacing: "1.5em", 
      ease: "expo.inOut" 
    }, "+=0.5")
    .to([leftRef.current, rightRef.current], {
      duration: 1.8,
      xPercent: (i) => i === 0 ? -100 : 100,
      ease: "expo.inOut"
    }, "-=0.2");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      <div ref={leftRef} className="absolute inset-y-0 left-0 w-1/2 bg-mariage-kaki border-r border-white/5 z-20" />
      <div ref={rightRef} className="absolute inset-y-0 right-0 w-1/2 bg-mariage-kaki z-20" />
      
      <div ref={textRef} className="relative z-30 text-center text-mariage-white">
        <p className="font-sans text-[9px] uppercase tracking-[0.8em] mb-12 opacity-60">L'Instant Prévu</p>
        <h1 className="font-serif text-8xl italic font-extralight tracking-tighter">
          É <span className="text-4xl not-italic opacity-40">&</span> J
        </h1>
      </div>
    </div>
  );
}