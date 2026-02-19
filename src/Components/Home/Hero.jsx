import React from "react";
import BlurText from "../UI/AUI";

const Hero = () => {

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black">

      {/* Background Image */}
      <img
        src="https://i.pinimg.com/736x/7f/58/6b/7f586b5d42d003a2bab09edd5102b52e.jpg"
        alt="Venugobal Cricket Academy"
        className="absolute inset-0 w-full h-full object-cover scale-110 opacity-40"
      />

      {/* Dark Overlay */}
      <div className="absolute ">
      
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 max-w-6xl">

        {/* 💥 EXPLOSIVE WHITE + ORANGE TEXT */}
    <BlurText
  text="VENU GOBAL CRICKET ACADEMY"
  delay={300}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="
    text-5xl 
    md:text-7xl 
    lg:text-[95px]
    font-extrabold
    uppercase
    tracking-[8px]
    leading-[1.05]
    text-white
    relative
    drop-shadow-[0_0_25px_rgba(255,140,0,0.9)]
    drop-shadow-[0_0_60px_rgba(255,80,0,0.7)]
    [text-shadow:_3px_3px_0px_#ff6a00,_-3px_-3px_0px_#ff6a00]
  "
/>


        {/* Subtitle */}
        <p className="mt-8 text-gray-300 text- font-bold md:text-xl max-w-2xl leading-relaxed">
          Professional cricket training with expert coaches, modern facilities,
          and match-level practice for future champions.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="/rigistrationform"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3 
              bg-orange-500
              hover:bg-orange-600
              hover:scale-110 
              active:scale-95 
              transition-all duration-300 
              text-white px-10 py-4 
              rounded-full text-lg font-bold
              shadow-[0_0_40px_rgba(255,140,0,0.8)]
            "
          >
            ➜ Registration Now
          </a>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
