import React from "react";

const images = [
  "https://i.pinimg.com/1200x/ea/d0/44/ead044037037086d2770e5bd7cc607fa.jpg",
  "https://i.pinimg.com/1200x/a5/db/65/a5db65c63b05a825a4a0979600d4846c.jpg",
  "https://i.pinimg.com/736x/3a/26/47/3a2647fcdcf725333272c28327b04673.jpg-0c623066013b",
  "https://i.pinimg.com/736x/17/18/61/1718612964bc26af71cc9c72883ea2b2.jpg",
  "https://i.pinimg.com/1200x/bd/ca/a0/bdcaa00f42b8f0dbaa91cbcd42befab6.jpg",
  "https://i.pinimg.com/1200x/7a/a5/32/7aa532f3f02159437fe402aeddbb8513.jpg",
  "https://i.pinimg.com/1200x/1b/90/36/1b9036982d23cafb07a28377d549daaf.jpg",
  "https://i.pinimg.com/1200x/b1/6c/f4/b16cf48d2b17dad5ea2ab065f13216d2.jpg",
];

const Gallery = () => {
  return (
    <section className="bg-black py-16 px-6">
     

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-2xl"
          >
            {/* Image */}
            <img
              src={img}
              alt="Gallery"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

            {/* Orange blast glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,115,0,0.45),transparent_60%)]"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
