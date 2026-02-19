import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full h-24 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
    <img
      src="/VGCA.png"
      alt="VGCA Logo"
      className="w-10 h-10 object-contain"
    />
  </div>


          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-wide">
              VGCA
            </h1>
            <p className="text-xs text-purple-100">
              Venu Gopal Cricket Academy Trial
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav>
          <ul className="flex items-center gap-10 text-white font-medium">
            <a href="/" className="hover:text-orange-700 cursor-pointer">Home</a>
            <a href="/about" className="hover:text-orange-700 cursor-pointer">About Us</a>
            <a href="/gallery" className="hover:text-orange-700 cursor-pointer">Gallery</a>
            <a href="/ourcenters" className="hover:text-orange-700 cursor-pointer">Our Centers</a>
            <a href="/rigistrationform" className="hover:text-orange-700 cursor-pointer">
              Registration Form
            </a>
            <a href="/contactus" className="hover:text-orange-700 cursor-pointer">Contact Us</a>
          </ul>
        </nav>

        {/* CTA */}
        <a
         href="/rigistrationform"
            target="_blank"
            rel="noopener noreferrer"
          className="hidden md:inline-block bg-white text-purple-700 px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition">
       
          Register Now
        </a>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="relative group"
  >
    {children}
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
  </Link>
);

export default Navbar;
