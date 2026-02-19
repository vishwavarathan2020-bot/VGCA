import React from "react";
import TextType from "../UI/TType";

const AboutBanner = () => {
  return (
    <section className="relative w-full min-h-[50vh] md:h-[60vh] bg-black overflow-hidden flex items-center justify-center py-16">
      
      {/* Orange Glow Effects - Adjusted size and opacity for mobile */}
      <div className="absolute -top-16 -left-16 md:-top-32 md:-left-32 w-64 h-64 md:w-96 md:h-96 bg-orange-600/20 rounded-full blur-[80px] md:blur-[120px]"></div>
      <div className="absolute -bottom-16 -right-16 md:-bottom-32 md:-right-32 w-64 h-64 md:w-96 md:h-96 bg-orange-600/20 rounded-full blur-[80px] md:blur-[120px]"></div>

      {/* Diagonal Accent - Skew adjusted for mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 -skew-y-3 md:-skew-y-4"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-4xl mx-auto">
        
        {/* Responsive Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight md:tracking-wider text-orange-500 drop-shadow-[0_4px_15px_rgba(255,140,0,0.5)] md:drop-shadow-[0_8px_30px_rgba(255,140,0,0.8)]">
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
            cursorCharacter="|"
            cursorBlinkDuration={0.5}
          />
        </h1>

        {/* Responsive Divider */}
        <div className="mt-4 md:mt-6 mx-auto w-16 md:w-24 h-1 md:h-1.5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]"></div>

        {/* Subtitle - Better width control for readability */}
        <p className="mt-6 md:mt-8 text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl md:max-w-2xl mx-auto font-medium">
          We build champions with passion, discipline, and professional training.
          <span className="hidden sm:inline"> Our academy focuses on performance, growth, and excellence.</span>
        </p>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
    </section>
  );
};

export default AboutBanner;