import React from "react";

const RoleOfINCA = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-orange-600/30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 tracking-wide mb-6">
            The Role of <span className="text-white">INCA</span> in Indian Cricket
          </h1>

          <p className="text-gray-300 text-lg mb-10">
            The Indian National Cricket Academy (INCA) has played a pivotal role in
            shaping the future of Indian cricket in several significant ways:
          </p>

          <div className="space-y-6">
            
            <div className="bg-white/5 border-l-4 border-orange-500 p-6 rounded-xl">
              <h3 className="text-orange-400 font-bold text-lg mb-2">
                1. Talent Identification and Development:
              </h3>
              <p className="text-gray-300">
                INCA serves as a primary institution for identifying and nurturing
                young cricketing talent across India. It provides structured
                training programs and world-class facilities to groom players for
                domestic and international cricket.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-orange-500 p-6 rounded-xl">
              <h3 className="text-orange-400 font-bold text-lg mb-2">
                2. Advanced Coaching and Mentorship:
              </h3>
              <p className="text-gray-300">
                The academy offers advanced coaching led by experienced coaches and
                former cricketers. This coaching focuses on enhancing players’
                technical skills, tactical awareness, physical fitness, and mental
                resilience. Mentorship programs with cricketing legends provide
                invaluable insights and guidance.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-orange-500 p-6 rounded-xl">
              <h3 className="text-orange-400 font-bold text-lg mb-2">
                3. State-of-the-Art Facilities:
              </h3>
              <p className="text-gray-300">
                Equipped with state-of-the-art facilities including multiple
                training grounds, indoor practice nets, fitness centers, and
                medical rehabilitation services, INCA ensures comprehensive player
                development. These facilities support skill enhancement, injury
                prevention, and recovery.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-orange-500 p-6 rounded-xl">
              <h3 className="text-orange-400 font-bold text-lg mb-2">
                4. Integration of Technology:
              </h3>
              <p className="text-gray-300">
                INCA integrates modern technology such as video analysis,
                biomechanics, and data analytics into its coaching methodologies.
                These tools aid in performance assessment, technique refinement,
                and strategic planning, enhancing overall coaching effectiveness.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-orange-500 p-6 rounded-xl">
              <h3 className="text-orange-400 font-bold text-lg mb-2">
                5. Talent Pipeline for National Teams:
              </h3>
              <p className="text-gray-300">
                INCA serves as a crucial talent pipeline for Indian national teams
                at all levels, from Under-19 to the senior team. Many players
                groomed at the academy go on to represent India, contributing to
                the nation’s success in international cricket.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
       <div className="relative flex justify-center">

  {/* Explosive Glow Background */}
  <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-3xl"></div>

  {/* Glass Container */}
  <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-6 shadow-[0_0_60px_rgba(255,140,0,0.6)] hover:scale-105 transition-all duration-500">

    {/* Image Wrapper */}
    <div className="relative overflow-hidden rounded-2xl">

      <img
        src="https://i.pinimg.com/1200x/25/21/7f/25217f6f778cfa7072680d4a966c395b.jpg"
        alt="Indian Cricketer"
        className="w-80 md:w-96 object-cover transition duration-700 hover:scale-110"
      />

      {/* Inner Orange Border Frame */}
      <div className="absolute inset-0 border-4 border-orange-500/60 rounded-2xl pointer-events-none"></div>

    </div>

  </div>

</div>


      </div>
    </section>
  );
};

export default RoleOfINCA;
