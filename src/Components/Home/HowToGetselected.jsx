import React from "react";

const VGCASelection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black py-16 px-6 text-white">
      
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          How To Get Selected In{" "}
          <span className="text-orange-500">VGCA</span>
        </h1>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <Card
            title="Start Young"
            text="Begin playing cricket at a young age to develop fundamental skills."
          />

          <Card
            title="Participate in BCCI-Conducted Tournaments"
            text="Take part in age-group tournaments conducted by the BCCI such as Under-14, Under-16, Under-19, and Under-23 tournaments. Performances in these tournaments are closely monitored by selectors."
          />
        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center">
          <div className="bg-neutral-900 border border-orange-500 rounded-2xl p-6 shadow-2xl">
            <img
              src="https://i.pinimg.com/1200x/d9/36/84/d936844876014b154e67e8cb274ce1ee.jpg"
              alt="Cricket Player"
              className="w-60 h-60 object-contain"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <Card
            title="Attend Talent Hunt Camps"
            text="Attend talent hunt camps organized by the BCCI in different regions. These camps are designed to identify and nurture young talent."
          />

          <Card
            title="Perform in Domestic Cricket"
            text="Perform well in domestic tournaments like the Vijay Hazare Trophy (50-over competition) and Syed Mushtaq Ali Trophy (T20 competition)."
          />

          <Card
            title="Attend NCA Trials"
            text="In some cases, players are invited to NCA trials based on their performance in domestic cricket or recommendations from coaches and selectors."
          />
        </div>

      </div>
    </section>
  );
};

const Card = ({ title, text }) => {
  return (
    <div className="bg-neutral-900 border border-orange-500/40 rounded-xl p-6 shadow-lg hover:shadow-orange-500/20 transition">
      <h3 className="text-lg font-bold text-orange-400 mb-2 flex items-center gap-2">
        ⭐ {title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default VGCASelection;
