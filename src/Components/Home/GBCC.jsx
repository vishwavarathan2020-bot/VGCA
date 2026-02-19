import React from "react";

const BestCoaching = () => {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white py-16 md:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
      
      {/* Title - Scaling font for small devices */}
      <div className="max-w-6xl mx-auto text-center mb-16 md:mb-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight">
          Get Best Cricket Coaching <br className="hidden md:block" /> At VenuGlobal Cricket Academy
        </h1>
        <div className="h-1.5 w-24 md:w-32 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.4)]"></div>
      </div>

      {/* Cards Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-10">
        
        <Card
          number="01"
          title="Experienced Coaching Staff"
          text="The VGCA employs head coaches with vast national and international experience. Specialized coaches focus on specific skills in batting, bowling, and wicketkeeping."
        />

        <Card
          number="02"
          title="Advanced Training Programs"
          text="Skill development camps focus on specific techniques, while fitness and conditioning camps enhance physical fitness. Workshops build mental toughness."
        />

        <Card
          number="03"
          title="Use of Modern Technology"
          text="Video analysis, biomechanics, and data analytics refine techniques and track performance. Personalized plans ensure optimal health and performance."
        />

        <Card
          number="04"
          title="Holistic Development"
          text="Leadership and teamwork programs develop essential qualities. Continuous mental health support and nutrition plans provide comprehensive development."
        />

        <Card
          number="05"
          title="Competitive Match Practice"
          text="Regular practice matches against other academies offer competitive experience. Continuous scouting ensures promising players are nurtured."
        />

        <Card
          number="06"
          title="Career Pathway Support"
          text="Regular assessments track progress and set future goals. Pathways include selection for state and national teams based on performance."
        />

      </div>
    </section>
  );
};

const Card = ({ number, title, text }) => {
  return (
    <div className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
      
      {/* Number badge - Responsive positioning */}
      <div className="absolute -top-6 left-6 md:-left-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-lg md:text-xl w-12 h-12 flex items-center justify-center rounded-xl md:rounded-full shadow-xl transform group-hover:rotate-12 transition-transform">
        {number}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 text-yellow-400 pt-2 md:pt-0">
        {title}
      </h2>

      <p className="text-gray-400 group-hover:text-gray-200 leading-relaxed text-sm md:text-base transition-colors">
        {text}
      </p>

      {/* Bottom accent glow */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-full rounded-b-2xl"></div>
    </div>
  );
};

export default BestCoaching;