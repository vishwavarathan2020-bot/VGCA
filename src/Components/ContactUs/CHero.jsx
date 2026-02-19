import React from "react";
import TextType from "../UI/CType";
const ContactHero = () => {
  return (
    <section className="relative w-full h-[35vh] flex items-center justify-center overflow-hidden bg-black">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>

      {/* Soft glow */}
      <div className="absolute inset-0 bg-orange-500/10 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-orange-500 tracking-widest">
         <TextType
    text={["Contact Us"]}
    typingSpeed={75}
    deletingSpeed={50}
    pauseDuration={1500}
    showCursor={false}
  />
        </h1>

        {/* underline accent */}
        <div className="mt-4 mx-auto w-24 h-1 bg-white rounded-full"></div>
      </div>

    </section>
  );
};

export default ContactHero;
