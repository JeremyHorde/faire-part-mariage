'use client';

import { useState } from 'react';
import IntroAnimation from './components/animations/IntroAnimation';
import SiteContent from './components/sections/SiteContent'; 

export default function Home() {
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  return (
    <>
      {/* 1. L'Animation Cinématique d'entrée */}
      {!isIntroFinished && (
        <IntroAnimation onComplete={() => setIsIntroFinished(true)} />
      )}

      {/* 2. LE SITE WEB (Est déjà là en dessous, et se dévoile quand le rideau se lève) */}
      <div className="w-full min-h-screen relative z-10">
        <SiteContent />
      </div>
    </>
  );
}