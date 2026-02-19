import React from "react";

const RoleOfINCA = () => {
  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden px-4 sm:px-6">
      
      {/* Background Glow Effects - Adjusted for smaller screens */}
      <div className="absolute -top-16 -left-16 md:-top-32 md:-left-32 w-64 h-64 md:w-96 md:h-96 bg-orange-500/20 blur-[80px] md:blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 -right-16 md:-right-32 w-64 h-64 md:w-96 md:h-96 bg-orange-600/20 blur-[80px] md:blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 tracking-tight leading-tight mb-6 text-center lg:text-left">
            The Role of <span className="text-white">INCA</span> in Indian Cricket
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            The Indian National Cricket Academy (INCA) has played a pivotal role in
            shaping the future of Indian cricket through structured excellence.
          </p>

          <div className="grid grid-cols-1 gap-6">
            <FeatureCard 
              num="1"
              title="Talent Identification"
              text="Primary institution for identifying and nurturing young talent across India with structured world-class grooming."
            />
            <FeatureCard 
              num="2"
              title="Advanced Coaching"
              text="Led by experienced coaches and legends focusing on technical skills, tactical awareness, and mental resilience."
            />
            <FeatureCard 
              num="3"
              title="State-of-the-Art Facilities"
              text="Indoor nets, fitness centers, and medical rehab services for comprehensive player development and injury prevention."
            />
            <FeatureCard 
              num="4"
              title="Integration of Technology"
              text="Using video analysis, biomechanics, and data analytics for performance assessment and technique refinement."
            />
            <FeatureCard 
              num="5"
              title="National Talent Pipeline"
              text="A crucial funnel for national teams, from Under-19 to the senior squad, contributing to international success."
            />
          </div>
        </div>

        {/* RIGHT IMAGE - Higher priority in mobile order */}
        <div className="relative flex justify-center order-1 lg:order-2 lg:sticky lg:top-24">
          
          {/* Explosive Glow Background */}
          <div className="absolute inset-0 bg-orange-500/20 blur-[60px] md:blur-3xl rounded-3xl"></div>

          {/* Glass Container */}
          <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-4 sm:p-6 shadow-[0_0_40px_rgba(255,140,0,0.4)] md:shadow-[0_0_60px_rgba(255,140,0,0.6)] hover:scale-105 transition-all duration-500 max-w-[320px] sm:max-w-md">

            {/* Image Wrapper */}
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] sm:aspect-auto">
              <img
                src="https://i.pinimg.com/1200x/25/21/7f/25217f6f778cfa7072680d4a966c395b.jpg"
                alt="Indian Cricketer"
                className="w-full h-full object-cover transition duration-700 hover:scale-110"
              />

              {/* Inner Orange Border Frame */}
              <div className="absolute inset-0 border-2 md:border-4 border-orange-500/60 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Reusable Feature Card for clean responsive layout
const FeatureCard = ({ num, title, text }) => (
  <div className="group bg-white/5 border-l-4 border-orange-500 p-5 md:p-6 rounded-xl transition-all duration-300 hover:bg-white/10">
    <h3 className="text-orange-400 font-bold text-lg mb-2">
      {num}. {title}:
    </h3>
    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
      {text}
    </p>
  </div>
);

export default RoleOfINCA;