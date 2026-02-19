import React from "react";
import TextType from "../UI/RType";
const RegistrationHero = () => {
  return (
    <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden bg-black">

      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>

      {/* Orange glow effect */}
      <div className="absolute inset-0 bg-orange-500/10 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className=" border-2 border-white rounded-full px-10 py-4">
         <h1 className="text-6xl md:text-8xl font-extrabold text-orange-600 drop-shadow-[0_0_25px_rgba(59,130,246,0.9)] tracking-widest">
  <TextType
    text={["Registration"]}
    typingSpeed={75}
    deletingSpeed={50}
    pauseDuration={1500}
    showCursor={false}
  />
</h1>
        </div>

        <p className="mt-6 text-gray-300 text-lg font-bold">
          VENU GOBAL Cricket Academy
        </p>
      </div>

    </section>
  );
};

export default RegistrationHero;
