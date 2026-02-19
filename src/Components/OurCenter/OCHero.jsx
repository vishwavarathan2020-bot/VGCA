import React from "react";
import TextType from "../UI/OCType";

const OurCentersHero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-black">
      
      {/* Background Image - Scale adjusted for mobile parallax feel */}
      <img
        src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
        alt="Cricket Academy Centers"
        className="absolute inset-0 w-full h-full object-cover scale-125 md:scale-110 opacity-70"
      />

      {/* Dark Cinematic Overlay - Heavier on mobile for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>

      {/* Explosive Radial Glow - Repositioned for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.3),transparent_70%)]"></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        
        <h1 className="
          text-4xl 
          sm:text-6xl 
          md:text-7xl 
          lg:text-8xl 
          font-extrabold 
          text-orange-600 
          drop-shadow-[0_0_20px_rgba(255,140,0,0.8)] 
          tracking-[0.1em] 
          sm:tracking-widest
          uppercase
        ">
          <TextType
            text={["Our Center"]}
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={1500}
            showCursor={false}
          />
        </h1>

      </div>

      {/* Bottom Fade - Smooth transition to the next section */}
      <div className="absolute bottom-0 left-0 w-full h-20 md:h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default OurCentersHero;