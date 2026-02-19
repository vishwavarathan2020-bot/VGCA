import React from "react";

const Gallery = () => {
  return (
    <section className="bg-black py-16 px-6">
      
     

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Top Left */}
        <div className="group relative h-[300px] md:h-[350px] overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
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
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
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
            src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
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
            src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d"
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
