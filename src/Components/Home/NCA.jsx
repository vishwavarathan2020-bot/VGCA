import React from "react";

const AcademyInfo = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 flex items-center justify-center p-4 sm:p-6 md:p-10">
      
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        
        {/* Header - Adjusted for mobile text wrap */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 md:p-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-wide leading-tight">
            VenuGlobal Cricket Academy
          </h1>
          <p className="text-black/80 mt-2 font-bold uppercase text-xs sm:text-sm tracking-widest">
            Building Champions Since 2000
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-8 md:p-10 text-white">

          {/* Left Column */}
          <div className="space-y-4 md:space-y-6">
            <Info label="Abbreviation" value="NGCA" />
            <Info label="Founded" value="2000 (24 years ago)" />
            <Info label="Founder" value="Sri Kanth" />
            <Info label="Type" value="Cricket Academy" />
            <Info label="Legal Status" value="Active" />
            <Info label="Focus" value="Developing Talent" />
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-6">
            <Info label="Location" value="Chengalpattu, India" />
            <Info label="Area Served" value="India" />
            <Info label="Services" value="Training & Rehab" />
            <Info 
              label="Website" 
              value={
                <a
                  href="https://nationalcricketsacademy.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-yellow-400 hover:text-white transition-colors break-all"
                >
                  nationalcricketsacademy.com
                </a>
              } 
            />

            {/* Fee Highlight - Responsive sizing */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-5 md:p-6 text-white shadow-xl mt-4 md:mt-8 flex flex-col items-center md:items-start">
              <p className="text-xs font-bold uppercase tracking-wider opacity-90">Registration Fee</p>
              <h2 className="text-3xl sm:text-4xl font-black mt-1">₹ 3150 /-</h2>
            </div>
          </div>
        </div>

        {/* CTA - Fixed button width for mobile */}
        <div className="p-6 md:p-10 pt-0 text-center">
          <a
            href="https://nationalcricketsacademy.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black px-12 py-4 rounded-full text-lg shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

// Enhanced Info component for mobile responsiveness
const Info = ({ label, value }) => (
  <div className="flex flex-row justify-between items-start border-b border-white/10 pb-3 gap-4">
    <span className="text-gray-400 text-sm font-semibold uppercase tracking-tighter shrink-0">
      {label}
    </span>
    <span className="font-bold text-sm sm:text-base text-right text-white">
      {value}
    </span>
  </div>
);

export default AcademyInfo;