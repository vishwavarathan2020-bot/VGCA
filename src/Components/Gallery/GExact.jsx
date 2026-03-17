import React from "react";

const Gallery = () => {
  return (
    <section className="bg-black py-16 px-6">
      
     

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Top Left */}
        <div className="group relative h-[300px] md:h-[350px] overflow-hidden rounded-xl">
          <img
            src="https://i.pinimg.com/736x/ab/5a/4a/ab5a4a771aa44c51eaebe2a8ba1d6a77.jpg"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
            <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,115,0,0.5),transparent_60%)]"></div>
          </div>
        </div>

        {/* Top Right */}
        <div className="group relative h-[300px] md:h-[350px] overflow-hidden rounded-xl">
          <img
            src="https://i.pinimg.com/1200x/98/ce/ae/98ceae9a4e02183018897b419c893740.jpg"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
            <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,115,0,0.5),transparent_60%)]"></div>
          </div>
        </div>

        {/* Bottom Left */}
        <div className="group relative h-[260px] overflow-hidden rounded-xl">
          <img
            src="https://i.pinimg.com/736x/b6/72/6d/b6726d8c089b9e8e62d1a7eb2aad911f.jpg"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
            <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,115,0,0.5),transparent_60%)]"></div>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="group relative h-[260px] overflow-hidden rounded-xl">
          <img
            src="https://i.pinimg.com/736x/b6/72/6d/b6726d8c089b9e8e62d1a7eb2aad911f.jpg"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
            <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,115,0,0.5),transparent_60%)]"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
