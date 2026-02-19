import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install lucide-react or use SVG icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full h-20 md:h-24 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            <img
              src="/VGCA.png"
              alt="VGCA Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-wide leading-none">
              VGCA
            </h1>
            <p className="text-[10px] md:text-xs text-purple-100 mt-1">
              Venu Gopal Cricket Academy
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8 text-white font-medium">
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/about">About Us</CustomNavLink>
            <CustomNavLink to="/gallery">Gallery</CustomNavLink>
            <CustomNavLink to="/ourcenters">Our Centers</CustomNavLink>
            <CustomNavLink to="/rigistrationform">Registration</CustomNavLink>
            <CustomNavLink to="/contactus">Contact Us</CustomNavLink>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/rigistrationform"
          className="hidden lg:inline-block bg-white text-purple-700 px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition active:scale-95"
        >
          Register Now
        </Link>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-purple-800 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 space-y-6 text-white text-xl font-semibold">
          <Link onClick={toggleMenu} to="/">Home</Link>
          <Link onClick={toggleMenu} to="/about">About Us</Link>
          <Link onClick={toggleMenu} to="/gallery">Gallery</Link>
          <Link onClick={toggleMenu} to="/ourcenters">Our Centers</Link>
          <Link onClick={toggleMenu} to="/rigistrationform">Registration</Link>
          <Link onClick={toggleMenu} to="/contactus">Contact Us</Link>
          
          <Link
            onClick={toggleMenu}
            to="/rigistrationform"
            className="bg-white text-purple-700 text-center py-3 rounded-xl shadow-lg mt-4"
          >
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
};

// Refined NavLink Component for Desktop
const CustomNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="relative group py-2 hover:text-purple-200 transition-colors"
  >
    {children}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

export default Navbar;