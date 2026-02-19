import React from "react";

const HistoryNCA = () => {
  return (
    <section className="bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      
      {/* Heading - Responsive alignment and sizing */}
      <div className="max-w-6xl mx-auto mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          History of <span className="text-orange-500">NCA</span>
        </h2>
        <div className="w-20 md:w-24 h-1.5 bg-orange-500 mt-4 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]"></div>
      </div>

      {/* Content Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        
        {/* Left Card - Premier Institution */}
        <div className="group relative bg-neutral-900/50 rounded-2xl p-6 md:p-10 shadow-2xl border border-white/5 border-l-4 border-l-orange-500 transition-all duration-300 hover:bg-neutral-800 hover:-translate-y-2">
          <div className="flex gap-4 md:gap-6">
            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-bold">
              1
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              The <span className="text-white font-semibold">National Cricket Academy (NCA)</span>, 
              established by the BCCI in 2000, is the premier institution for developing 
              cricketing talent in India. Initially located at the M. Chinnaswamy Stadium, 
              it was created to provide world-class training and a professional environment.
            </p>
          </div>
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 rounded-2xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>

        {/* Right Card - Infrastructure */}
        <div className="group relative bg-neutral-900/50 rounded-2xl p-6 md:p-10 shadow-2xl border border-white/5 border-l-4 border-l-orange-500 transition-all duration-300 hover:bg-neutral-800 hover:-translate-y-2">
          <div className="flex gap-4 md:gap-6">
            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-bold">
              2
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              Over the years, the academy has expanded into a state-of-the-art hub including 
              indoor practice areas, elite fitness centers, and specialized 
              <span className="text-white font-semibold"> medical and rehabilitation facilities</span>. 
              It now serves as the heartbeat of Indian cricket's future success.
            </p>
          </div>
          <div className="absolute inset-0 rounded-2xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>

      </div>

      {/* Background Decoration (Optional) */}
      <div className="max-w-6xl mx-auto mt-12 opacity-20 hidden md:block">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default HistoryNCA;