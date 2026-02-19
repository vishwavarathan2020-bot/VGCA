import React from "react";

const RoleOfINCA = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      
      {/* Orange Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/25 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-600/25 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 tracking-wide mb-6">
          The Role of <span className="text-white">INCA</span> in Indian Cricket
        </h1>

        <p className="text-gray-300 text-lg mb-12">
          The Indian National Cricket Academy (INCA) has played a pivotal role in
          shaping the future of Indian cricket in several significant ways:
        </p>

        <div className="space-y-10">

          {/* CARD TEMPLATE */}
          {[
            {
              title: "1. Talent Identification and Development:",
              text: "INCA serves as a primary institution for identifying and nurturing young cricketing talent across India. It provides structured training programs and world-class facilities to groom players for domestic and international cricket.",
              img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
            },
            {
              title: "2. Advanced Coaching and Mentorship:",
              text: "The academy offers advanced coaching led by experienced coaches and former cricketers. This coaching focuses on enhancing players’ technical skills, tactical awareness, physical fitness, and mental resilience.",
              img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d"
            },
            {
              title: "3. State-of-the-Art Facilities:",
              text: "Equipped with state-of-the-art facilities including multiple training grounds, indoor practice nets, fitness centers, and medical rehabilitation services, INCA ensures comprehensive player development.",
              img: "https://images.unsplash.com/photo-1502877338535-766e1452684a"
            },
            {
              title: "4. Integration of Technology:",
              text: "INCA integrates modern technology such as video analysis, biomechanics, and data analytics into its coaching methodologies.",
              img: "https://images.unsplash.com/photo-1517649763962-0c623066013b"
            },
            {
              title: "5. Talent Pipeline for National Teams:",
              text: "INCA serves as a crucial talent pipeline for Indian national teams at all levels, from Under-19 to the senior team.",
              img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
            }
          ].map((card, index) => (
            <div
              key={index}
              className="border-l-4 border-orange-500 pl-6 py-6 bg-white/5 backdrop-blur-md rounded-xl flex flex-col md:flex-row items-center gap-6 hover:scale-[1.02] transition-all duration-300"
            >

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-orange-400 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {card.text}
                </p>
              </div>

              {/* Explosive Image */}
              <div className="w-full md:w-72 h-44 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,140,0,0.6)]">
                <img
                  src={card.img}
                  alt="Cricket"
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
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
