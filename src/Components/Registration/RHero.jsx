import React from "react";
import TextType from "../UI/RType";

const RegistrationHero = () => {
  return (
    <section className="relative h-[40vh] md:h-[45vh] w-full flex items-center justify-center overflow-hidden bg-black px-4">

      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>

      {/* Orange glow effect - Adjusted for better mobile performance */}
      <div className="absolute inset-0 bg-orange-600/20 blur-[100px] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        
        {/* Border Container - Now adapts to screen width */}
        <div className="inline-block border-2 border-white/80 rounded-full px-6 py-3 sm:px-10 sm:py-4 transition-all duration-500 hover:border-orange-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <h1 className="
            text-3xl 
            sm:text-5xl 
            md:text-7xl 
            lg:text-8xl 
            font-extrabold 
            text-orange-600 
            drop-shadow-[0_0_15px_rgba(251,146,60,0.8)] 
            tracking-wider 
            sm:tracking-widest
            leading-none
          ">
            <TextType
              text={["Registration"]}
              typingSpeed={75}
              deletingSpeed={50}
              pauseDuration={1500}
              showCursor={false}
            />
          </h1>
        </div>

        {/* Subtitle - Responsive text sizing */}
        <p className="mt-6 text-gray-300 text-sm sm:text-lg md:text-xl font-bold tracking-[0.2em] uppercase">
          VENU GOBAL Cricket Academy
        </p>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
    </section>
  );
};

export default RegistrationHero;