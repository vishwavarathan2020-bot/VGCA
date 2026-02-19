import React from "react";

const VGCASelection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black py-12 md:py-20 px-4 sm:px-6 text-white overflow-hidden">
      
      {/* Title - Responsive font size and spacing */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          How To Get Selected In{" "}
          <span className="text-orange-500 block sm:inline">VGCA</span>
        </h2>
        <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
      </div>

      {/* Layout Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center">

        {/* LEFT SECTION (Column 1) */}
        <div className="space-y-6 order-2 lg:order-1">
          <Card
            title="Start Young"
            text="Begin playing cricket at a young age to develop fundamental skills and muscle memory essential for professional growth."
          />

          <Card
            title="BCCI Tournaments"
            text="Participate in age-group tournaments (U-14, U-16, U-19). Performances here are the primary metric for our talent scouts."
          />
        </div>

        {/* CENTER IMAGE (Column 2) - Higher priority on mobile layout */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-neutral-900 border border-orange-500/50 rounded-2xl p-4 sm:p-6 shadow-2xl">
              <img
                src="https://i.pinimg.com/1200x/d9/36/84/d936844876014b154e67e8cb274ce1ee.jpg"
                alt="Cricket Talent"
                className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (Column 3) */}
        <div className="space-y-6 order-3">
          <Card
            title="Talent Hunt Camps"
            text="Attend regional camps organized by the BCCI. These are designed specifically to identify high-potential athletes."
          />

          <Card
            title="Domestic Performance"
            text="Excel in trophies like Vijay Hazare or Syed Mushtaq Ali. High-pressure consistency is key for academy entry."
          />

          <Card
            title="Direct Academy Trials"
            text="Standout players may receive direct invitations based on recommendations from certified coaches and selectors."
          />
        </div>

      </div>
    </section>
  );
};

const Card = ({ title, text }) => {
  return (
    <div className="group bg-neutral-900/80 border border-orange-500/20 hover:border-orange-500/60 rounded-xl p-5 md:p-6 shadow-lg transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-lg md:text-xl font-bold text-orange-400 mb-3 flex items-center gap-2">
        <span className="text-orange-500 transform group-hover:rotate-12 transition-transform">⭐</span> 
        {title}
      </h3>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors">
        {text}
      </p>
    </div>
  );
};

export default VGCASelection;