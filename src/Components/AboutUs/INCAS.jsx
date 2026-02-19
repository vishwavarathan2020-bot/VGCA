import React from "react";

const RoleOfINCA = () => {
  const roles = [
    {
      title: "1. Talent Identification and Development",
      text: "INCA serves as a primary institution for identifying and nurturing young cricketing talent across India. It provides structured training programs and world-class facilities to groom players for domestic and international cricket.",
      img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
    },
    {
      title: "2. Advanced Coaching and Mentorship",
      text: "The academy offers advanced coaching led by experienced coaches and former cricketers. This coaching focuses on enhancing players’ technical skills, tactical awareness, physical fitness, and mental resilience.",
      img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d"
    },
    {
      title: "3. State-of-the-Art Facilities",
      text: "Equipped with state-of-the-art facilities including multiple training grounds, indoor practice nets, fitness centers, and medical rehabilitation services, INCA ensures comprehensive player development.",
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a"
    },
    {
      title: "4. Integration of Technology",
      text: "INCA integrates modern technology such as video analysis, biomechanics, and data analytics into its coaching methodologies to refine player technique and strategy.",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b"
    },
    {
      title: "5. Talent Pipeline for National Teams",
      text: "INCA serves as a crucial talent pipeline for Indian national teams at all levels, from Under-19 to the senior team, ensuring a steady stream of elite athletes.",
      img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
    }
  ];

  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden px-4 sm:px-6">
      
      {/* Dynamic Glow Backgrounds */}
      <div className="absolute -top-20 -left-20 md:-top-40 md:-left-40 w-64 h-64 md:w-96 md:h-96 bg-orange-500/20 blur-[80px] md:blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 w-64 h-64 md:w-96 md:h-96 bg-orange-600/20 blur-[80px] md:blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center md:text-left mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 tracking-tight leading-tight mb-6">
            The Role of <span className="text-white">INCA</span> in Indian Cricket
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            The Indian National Cricket Academy (INCA) has played a pivotal role in
            shaping the future of Indian cricket through these key strategic pillars:
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-8 md:space-y-12">
          {roles.map((card, index) => (
            <div
              key={index}
              className="group border-l-4 border-orange-500 bg-white/5 backdrop-blur-md rounded-xl flex flex-col md:flex-row items-center gap-6 p-5 md:p-8 hover:bg-white/10 transition-all duration-300 shadow-xl"
            >
              {/* Text Area */}
              <div className="flex-1 order-2 md:order-1">
                <h3 className="text-xl md:text-2xl font-bold text-orange-400 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {card.text}
                </p>
              </div>

              {/* Responsive Image Container */}
              <div className="w-full md:w-64 lg:w-80 h-48 md:h-44 shrink-0 order-1 md:order-2 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,140,0,0.3)] group-hover:shadow-[0_0_40px_rgba(255,140,0,0.5)] transition-all">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleOfINCA;