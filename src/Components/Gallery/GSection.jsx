import React from "react";

const images = [
  "https://i.pinimg.com/1200x/ea/d0/44/ead044037037086d2770e5bd7cc607fa.jpg",
  "https://i.pinimg.com/1200x/a5/db/65/a5db65c63b05a825a4a0979600d4846c.jpg",
  "https://i.pinimg.com/736x/3a/26/47/3a2647fcdcf725333272c28327b04673.jpg",
  "https://i.pinimg.com/736x/17/18/61/1718612964bc26af71cc9c72883ea2b2.jpg",
  "https://i.pinimg.com/1200x/bd/ca/a0/bdcaa00f42b8f0dbaa91cbcd42befab6.jpg",
  "https://i.pinimg.com/1200x/7a/a5/32/7aa532f3f02159437fe402aeddbb8513.jpg",
  "https://i.pinimg.com/1200x/1b/90/36/1b9036982d23cafb07a28377d549daaf.jpg",
  "https://i.pinimg.com/1200x/b1/6c/f4/b16cf48d2b17dad5ea2ab065f13216d2.jpg",
];

const Gallery = () => {
  return (
    <section className="bg-black py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Container with responsive Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500
              ${index % 5 === 0 ? "md:col-span-2 md:row-span-1" : "col-span-1"}
            `}
          >
            {/* Image Wrapper with Aspect Ratio */}
            <div className="aspect-square sm:aspect-video md:aspect-square lg:aspect-auto h-full min-h-[250px] md:min-h-[300px]">
              <img
                src={img}
                alt={`Academy Gallery ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* Explosive Orange Blast Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,115,0,0.35),transparent_70%)]"></div>
            </div>

            {/* Bottom Border Accent on Hover */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;