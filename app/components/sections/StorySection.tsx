'use client';

export default function StorySection() {
  return (
    <section id="histoire" className="paper-bg relative py-64 px-8 overflow-hidden border-y border-mariage-kaki/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[0.5px] h-32 bg-mariage-kaki/20 origin-top draw-line"></div>
        
      <div className="max-w-[400px] mx-auto">
        <div className="relative mb-24 text-center">
          <h2 className="reveal-title font-serif text-6xl italic text-mariage-kaki-dark relative z-10">
            L'Éternité
          </h2>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[10rem] opacity-[0.03] italic pointer-events-none">
            Story
          </span>
        </div>
        
        <div className="grid grid-cols-12 gap-0 items-center">
          <div className="col-span-8 relative group">
            <div className="absolute -inset-2 border border-mariage-kaki/10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-1000"></div>
            <div className="relative overflow-hidden shadow-2xl">
              <img 
                src="images/6.jpg" 
                className="w-full aspect-[3/4] object-cover grayscale-[0.2] parallax-img scale-110"
                alt="Émilie & Jason"
              />
            </div>
          </div>
        
          <div className="col-span-12 mt-20 relative">
            <div className="absolute -top-10 left-4 w-12 h-px bg-mariage-kaki/30 draw-line origin-left"></div>
        
            <p style={{ fontVariant: 'small-caps' }} className="font-sans text-xl leading-[2.1] text-justify tracking-widest px-4 opacity-80">
              <span className="font-serif text-5xl float-left mr-3 mt-1 italic opacity-60">I</span>
              ls ne savaient pas encore, en se croisant dans leur couloirs du lycée, que leur vies s'entremêlaient déjà. Une histoire qu'ils souhaitent aujourd'hui sceller entourés de ceux qu'ils aiment. 
            </p>
        
            <div className="mt-12 flex justify-end px-4">
              <div className="w-20 h-px bg-mariage-kaki/20 draw-line origin-right"></div>
            </div>
          </div>
        </div>
      </div>
        
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[0.5px] h-24 bg-mariage-kaki/10 origin-bottom draw-line"></div>
    </section>
  );
}