import React from "react";

const ContactLocation = () => {
  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-20 px-6">

      {/* Top Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

        {/* Quick Registration */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition">
          <div className="text-3xl mb-4">🪪</div>
                
          <a
          href="/rigistrationform"
  target="_blank"
  rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-300 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-[0_0_40px_rgba(59,130,246,0.6)]"
          >
            ➜ Registration Now
          </a>
        </div>

        {/* Address */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition">
          <div className="text-3xl mb-4">📍</div>
          <h3 className="font-bold text-lg mb-2">Address</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Venugopal Cricket Academy, <br />
            Gandhi Salai, <br />
            Chennai
          </p>
        </div>

        {/* Email */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition">
          <div className="text-3xl mb-4">💬</div>
          <h3 className="font-bold text-lg mb-2">Email</h3>
          <p className="text-gray-600 text-sm">
            support@venugobalcricketsacademy.com
          </p>
        </div>

      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,140,0,0.35)]">

          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 blur-xl opacity-30"></div>

          {/* Google Map – NEW LOCATION */}
          <iframe
            title="Venugopal Cricket Academy Location"
            src="https://www.google.com/maps?q=Venugopal%20Cricket%20Academy%20Chennai&output=embed"
            className="relative w-full h-[450px] border-0 rounded-3xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </section>
  );
};

export default ContactLocation;
