import React from "react";
import {Mail, Phone} from "lucide-react";


const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-16 px-6">
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.15),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo & About */}
       <div className="space-y-4">
  <img
    src="/VGCA.png"
    alt="VGCA Logo"
    className="h-14 w-auto"
  />

  <p className="text-gray-400 text-sm leading-relaxed">
    Venu Gopal Cricket Academy <br />
    Professional training for future champions.
  </p>
</div>


        {/* Get Links */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-green-300">
            Get Links
          </h2>
          <ul className="space-y-3 text-gray-300">
            <div>
          <h2 className="text-xl font-semibold mb-5"></h2>
          <ul className="space-y-3 text-orange-500 font-medium">
            <a href="/"className="flex items-center gap-3">
              <span>→</span> Home
            </a>
            <a href="/about" className="flex items-center gap-3">
               <span>→</span> About us
               </a>
            <a href="/gallery" className="flex items-center gap-3">
              <span>→</span> Gallery
            </a>
            <a href="/ourcenter"className="flex items-center gap-3">
              <span>→</span> Our Center
            </a>
            <a  href="/rigistrationform"className="flex items-center gap-3">
              <span>→</span> Registration
            </a>
            <a href="/contactus"className="flex items-center gap-3">
              <span>→</span> Contact us
            </a>
          </ul>
        </div>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-green-300">
            Contact Us
          </h2>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="text-green-400" />
              <span className="text-sm">
                support@venugobalcricketsacademy.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-green-400" />
              <span className="text-sm">+91 9155225311</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:scale-105 transition">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Venugopal%20Cricket%20Academy&output=embed"
            className="w-full h-full min-h-[220px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative mt-14 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © 2026 Venu Gobal Cricket Academy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
