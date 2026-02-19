import React from "react";
import TextType from "../UI/OCType";
const OurCentersHero = () => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
        alt="Cricket Background"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* Dark Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>

      {/* Explosive Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.45),transparent_60%)]"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-6xl md:text-8xl font-extrabold text-orange-600 drop-shadow-[0_0_25px_rgba(59,130,246,0.9)] tracking-widest">
  <TextType
    text={["Our Center"]}
    typingSpeed={75}
    deletingSpeed={50}
    pauseDuration={1500}
    showCursor={false}
  />
</h1>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default OurCentersHero;
