import React from "react";

const HistoryNCA = () => {
  return (
    <section className="bg-black py-20 px-6 text-white">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          History of <span className="text-orange-500">NCA</span>
        </h1>
        <div className="w-24 h-1 bg-orange-500 mt-4 rounded-full"></div>
      </div>

      {/* Content Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left Card */}
        <div className="bg-neutral-900 rounded-2xl p-8 shadow-xl border-l-4 border-orange-500">
          <div className="flex gap-4">
            <span className="text-orange-500 text-2xl">●</span>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              The National Cricket Academy (NCA), established by the Board of
              Control for Cricket in India (BCCI) in 2000, is the premier
              institution for developing cricketing talent in India. Located
              initially at the M. Chinnaswamy Stadium in Bangalore, the NCA was
              created to provide young cricketers with world-class training
              facilities and a structured, professional environment.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-neutral-900 rounded-2xl p-8 shadow-xl border-l-4 border-orange-500">
          <div className="flex gap-4">
            <span className="text-orange-500 text-2xl">●</span>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Over the years, the academy has expanded its infrastructure to
              include state-of-the-art training grounds, indoor practice areas,
              fitness centers, medical and rehabilitation facilities, and
              comfortable accommodations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HistoryNCA;
