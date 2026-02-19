import React from "react";
import TextType from "../UI/TType";
const GalleryHero = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/gallery-bg.jpg" // replace with your image path
        alt="Gallery Background"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* Explosive Dark + Orange Overlay */}
      <div className="absolute inset-0 bg-black"></div>


      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.35),transparent_60%)]"></div>

      {/* Content */}
    <div className="relative z-10 flex items-center justify-center h-full text-center px-6">

  <h1
    className="
     text-6xl md:text-8xl font-extrabold text-orange-600 drop-shadow-[0_0_25px_rgba(59,130,246,0.9)] tracking-widest
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

      {/* Bottom Explosion Strip */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default GalleryHero;
