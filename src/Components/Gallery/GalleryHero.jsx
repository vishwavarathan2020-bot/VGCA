import React from "react";
import TextType from "../UI/TType";

const GalleryHero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-black">
      
      {/* Background Image - Scale adjusted for mobile */}
      <img
        src="/gallery-bg.jpg" 
        alt="Gallery Background"
        className="absolute inset-0 w-full h-full object-cover scale-125 md:scale-110 opacity-60"
      />

      {/* Explosive Dark Overlay - Subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>

      {/* Glow Effect - Centered for all devices */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.25),transparent_70%)] md:bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.35),transparent_60%)]"></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6">

        <h1
          className="
            text-5xl 
            sm:text-6xl 
            md:text-8xl 
            font-extrabold 
            text-orange-600 
            drop-shadow-[0_0_20px_rgba(255,115,0,0.8)] 
            tracking-[0.15em] 
            sm:tracking-widest
            uppercase
          "
        >
          <TextType
            text={["GALLERY"]}
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={1500}
            showCursor={false}
          />
        </h1>

      </div>

      {/* Bottom Explosion Strip (Fade to Gallery Grid) */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default GalleryHero;