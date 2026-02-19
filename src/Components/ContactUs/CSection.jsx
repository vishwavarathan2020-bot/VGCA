import React from "react";

const ContactLocation = () => {
  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-24 px-4 sm:px-6 lg:px-8">

      {/* Top Cards - Responsive Grid Scaling */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">

        {/* Quick Registration */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300">
          <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">🪪</div>
          <a
            href="/rigistrationform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-300 text-white px-6 py-4 rounded-full text-base md:text-lg font-bold shadow-[0_10px_30px_rgba(59,130,246,0.4)]"
          >
            ➜ Register Now
          </a>
        </div>

        {/* Address */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center hover:-translate-y-2 transition-transform duration-300">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="font-black text-gray-900 text-lg md:text-xl mb-3 uppercase tracking-tight">Location</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Venugopal Cricket Academy, <br />
            Gandhi Salai, <br />
            Chennai, Tamil Nadu
          </p>
        </div>

        {/* Email - Handled for small screens */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center sm:col-span-2 lg:col-span-1 hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="font-black text-gray-900 text-lg md:text-xl mb-3 uppercase tracking-tight">Email Support</h3>
          <p className="text-gray-600 text-sm md:text-base break-words font-medium hover:text-blue-600 transition-colors">
            <a href="mailto:support@venugobalcricketsacademy.com">
              support@venugobalcricketsacademy.com
            </a>
          </p>
        </div>

      </div>

      {/* Map Section - Adjusted height for all devices */}
      <div className="max-w-7xl mx-auto">
        <div className="relative group">
          
          {/* Animated Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

          {/* Map Container */}
          <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-900">
            <iframe
              title="Venugopal Cricket Academy Location"
              src="https://www.google.com/maps?q=Venugopal%20Cricket%20Academy%20Chennai&output=embed" // Replace with your actual Google Maps embed link
              className="w-full h-[350px] sm:h-[450px] lg:h-[550px] border-0 grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactLocation;