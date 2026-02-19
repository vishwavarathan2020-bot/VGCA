import React from "react";

const AcademyInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 flex items-center justify-center p-6">
      
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black tracking-wide">
            VenuGlobal Cricket Academy
          </h1>
          <p className="text-black/80 mt-1 font-semibold">
            Building Champions Since 2000
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6 p-6 text-white">

          {/* Left Column */}
          <div className="space-y-4">
            <Info label="Abbreviation" value="NGCA" />
            <Info label="Founded" value="2000 (24 years ago)" />
            <Info label="Founder" value="Sri Kanth" />
            <Info label="Type" value="Cricket Academy" />
            <Info label="Legal Status" value="Active" />
            <Info label="Focus" value="Developing Young Cricketers" />
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <Info label="Location" value="Chengalpattu, India" />
            <Info label="Area Served" value="India" />
            <Info
              label="Services"
              value="Training, Guidance & Rehabilitation"
            />
            <Info
              label="Website"
              value={
                <a
                  href="https://nationalcricketsacademy.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-yellow-400 underline"
                >
                  nationalcricketsacademy.com
                </a>
              }
            />

            {/* Fee Highlight */}
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-5 text-black shadow-xl mt-6">
              <p className="text-sm font-semibold">Registration Fee</p>
              <h2 className="text-3xl font-extrabold">₹ 3150 /-</h2>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-6 text-center">
          <a
            href="https://nationalcricketsacademy.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-white/20 pb-2">
    <span className="text-gray-300 font-medium">{label}</span>
    <span className="font-semibold text-right">{value}</span>
  </div>
);

export default AcademyInfo;
