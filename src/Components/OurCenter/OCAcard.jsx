import React from "react";

const academies = [
  {
    title: "Academy for Cricketing Excellence",
    location: "Nyorch market, Yupia,\nArunachal Pradesh 791110",
    image: "https://i.pinimg.com/736x/49/e4/b5/49e4b52fd6dcb1a8b38bdfc6fc66e174.jpg",
  },
  {
    title: "Santipur Cricket Academy",
    location: "Plot No. 42, Santipur Main Road,\nSantipur, Guwahati – 781009",
    image: "https://i.pinimg.com/1200x/4b/c8/cb/4bc8cb24aa2bed3c424f655302f7a7a4.jpg",
  },
  {
    title: "MS Dhoni Cricket Academy",
    location:
      "Urja Stadium, opposite DAV School,\nBSEB Colony, Rajbansi Nagar,\nPatna, Bihar 80002",
    image: "https://i.pinimg.com/1200x/28/67/74/286774fa7537173931171085c15abb65.jpg",
  },
];

const CricketAcademies = () => {
  return (
    <section className="bg-black py-24 px-6">
      {/* Heading */}
      <h1 className="text-center text-5xl font-extrabold text-white mb-16">
        Cricket <span className="text-orange-500">Academies</span>
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {academies.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-3xl bg-[#0c0c0c] overflow-hidden
                       border border-orange-500/30
                       shadow-[0_30px_80px_rgba(255,120,0,0.25)]
                       hover:-translate-y-3 transition-all duration-500"
          >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover scale-105
                           group-hover:scale-125 transition duration-700"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Category Tag */}
              <span className="absolute top-5 left-5 bg-orange-500 text-black text-xs font-extrabold px-5 py-1 rounded-full tracking-widest">
                CRICKET
              </span>
            </div>

            {/* Diagonal Accent */}
            <div className="absolute top-[190px] left-0 w-full h-6 bg-gradient-to-r from-orange-600 to-yellow-400 skew-y-[-3deg]"></div>

            {/* Content */}
            <div className="relative p-7 pt-10 text-white">
              <h2 className="text-xl font-extrabold mb-4 leading-snug">
                {item.title}
              </h2>

              <p className="text-orange-400 font-semibold text-sm mb-1">
                Location
              </p>

              <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
                {item.location}
              </p>
            </div>

            {/* Glow Ring */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition">
              <div className="absolute inset-0 rounded-3xl border border-orange-500/60 blur-sm"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CricketAcademies;
