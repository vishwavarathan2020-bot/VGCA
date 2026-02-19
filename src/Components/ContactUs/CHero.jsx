import React from "react";
import TextType from "../UI/CType";

const ContactHero = () => {
  return (
    <section className="relative w-full h-[30vh] md:h-[35vh] flex items-center justify-center overflow-hidden bg-black px-4">

      {/* Background gradient with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#111] to-black"></div>

      {/* Soft orange glow - optimized for mobile performance */}
      <div className="absolute inset-0 bg-orange-600/10 blur-[100px] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center">
        <h1 className="
          text-3xl 
          sm:text-4xl 
          md:text-6xl 
          lg:text-7xl
          font-extrabold 
          text-orange-500 
          tracking-widest 
          uppercase
          drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]
        ">
          <TextType
            text={["Contact Us"]}
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={1500}
            showCursor={false}
          />
        </h1>

        {/* Animated underline accent */}
        <div className="mt-4 mx-auto w-16 md:w-24 h-1 md:h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
      </div>

      {/* Bottom accent border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>
    </section>
  );
};

export default ContactHero;