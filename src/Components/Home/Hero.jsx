import React from "react";
import BlurText from "../UI/AUI";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] lg:h-screen overflow-hidden bg-black">
      
      {/* Background Image - Optimized scaling for mobile */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/736x/7f/58/6b/7f586b5d42d003a2bab09edd5102b52e.jpg"
          alt="Venugobal Cricket Academy"
          className="w-full h-full object-cover scale-110 opacity-40"
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 md:px-16 max-w-7xl mx-auto">
        
        {/* Responsive Heading */}
        <div className="w-full">
          <BlurText
            text="VENU GOBAL CRICKET ACADEMY"
            delay={300}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="
              text-4xl 
              sm:text-5xl 
              md:text-7xl 
              lg:text-8xl
              xl:text-[95px]
              font-extrabold
              uppercase
              tracking-[2px] 
              sm:tracking-[4px] 
              md:tracking-[8px]
              leading-[1.1]
              text-white
              drop-shadow-[0_0_15px_rgba(255,140,0,0.6)]
              md:drop-shadow-[0_0_25px_rgba(255,140,0,0.9)]
              [text-shadow:_1px_1px_0px_#ff6a00,_2px_2px_0px_#ff6a00]
              md:[text-shadow:_3px_3px_0px_#ff6a00]
            "
          />
        </div>

        {/* Subtitle - Improved mobile width */}
        <p className="mt-6 md:mt-8 text-gray-300 font-medium text-sm sm:text-base md:text-xl max-w-xs sm:max-w-md md:max-w-2xl leading-relaxed">
          Professional cricket training with expert coaches, modern facilities,
          and match-level practice for future champions.
        </p>

        {/* CTA Button - Scaled for thumb-tap on mobile */}
        <div className="mt-8 md:mt-10">
          <a
            href="/rigistrationform"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-3 
              bg-orange-500
              hover:bg-orange-600
              hover:scale-105 
              active:scale-95 
              transition-all duration-300 
              text-white 
              px-8 py-3 
              md:px-10 md:py-4 
              rounded-full 
              text-base md:text-lg 
              font-bold
              shadow-[0_10px_30px_rgba(255,140,0,0.4)]
              w-full sm:w-auto
            "
          >
            ➜ Register Now
          </a>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-24 md:h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;