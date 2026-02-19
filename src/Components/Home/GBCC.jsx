import React from "react";

const BestCoaching = () => {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white py-20 px-6">
      
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Get Best Cricket Coaching At VenuGlobal Cricket Academy
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Card 1 */}
        <Card
          number="01"
          title="Experienced Coaching Staff"
          text="The VGCA employs head coaches with vast national and international experience. Specialized coaches focus on specific skills in batting, bowling, fielding, and wicketkeeping."
        />

        {/* Card 2 */}
        <Card
          number="02"
          title="Advanced Training Programs"
          text="Skill development camps focus on specific techniques, while fitness and conditioning camps enhance physical fitness. Workshops with sports psychologists build mental toughness."
        />

        {/* Card 3 */}
        <Card
          number="03"
          title="Use of Modern Technology"
          text="Video analysis, biomechanics, and data analytics refine techniques and track performance. Personalized dietary plans ensure optimal health and performance."
        />

        {/* Card 4 */}
        <Card
          number="04"
          title="Holistic Development Approach"
          text="Leadership and teamwork programs develop essential qualities. Continuous mental health support and personalized nutrition plans provide comprehensive player development."
        />

        {/* Card 5 */}
        <Card
          number="05"
          title="Competitive Match Practice"
          text="Regular practice matches against other academies and domestic tournaments offer competitive experience. Continuous scouting and talent identification ensure promising players are nurtured."
        />

        {/* Card 6 */}
        <Card
          number="06"
          title="Career Pathway Support"
          text="Regular assessments and feedback sessions track progress and set future goals. Pathways to higher levels of cricket include selection for state and national teams based on performance."
        />

      </div>
    </section>
  );
};

const Card = ({ number, title, text }) => {
  return (
    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hover:scale-[1.03] transition duration-300">
      
      {/* Number badge */}
      <div className="absolute -top-5 -left-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-extrabold text-xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
        {number}
      </div>

      <h2 className="text-xl font-bold mb-3 text-yellow-400">
        {title}
      </h2>

      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        {text}
      </p>
    </div>
  );
};

export default BestCoaching;
    