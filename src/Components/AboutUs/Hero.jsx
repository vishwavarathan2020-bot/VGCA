import React from "react";
import TextType from "../UI/TType";

const AboutBanner = () => {
  return (
    <section className="relative w-full h-[60vh] bg-black overflow-hidden flex items-center justify-center">
      
      {/* Orange Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-black rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-black rounded-full blur-3xl"></div>

      {/* Diagonal Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 skew-y-[-4deg]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
         <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider text-orange-500 drop-shadow-[0_8px_30px_rgba(255,140,0,0.8)]">
          <TextType
            text={[
              "About Us",
              "Who We Are",
              "Our Cricket Journey"
            ]}
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
            cursorBlinkDuration={0.5}
          />
        </h1>

        <div className="mt-6 mx-auto w-24 h-1 bg-orange-500 rounded-full"></div>

        <p className="mt-6 max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed">
          We build champions with passion, discipline, and professional training.
          Our academy focuses on performance, growth, and excellence.
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;
