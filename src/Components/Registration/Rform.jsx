import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const RegistrationForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_6su2a3y";
    const TEMPLATE_ID = "template_ch2axu4";
    const PUBLIC_KEY = "Ke7NqHt6QdRsFeTji";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          alert("Registration Successful! Check your email.");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-12">
      <div className="w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden">
        
        {/* Form Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 py-8 px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            National <span className="text-black">Cricket</span> Academy
          </h1>
          <p className="text-orange-100 text-sm mt-2 font-medium">Registration Form - 2026 Season</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="p-6 md:p-12 space-y-6">
          
          {/* Row 1: Name & DOB */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full border-2 border-gray-100 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-0 transition-all outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                required
                className="w-full border-2 border-gray-100 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-0 transition-all outline-none"
              />
            </div>
          </div>

          {/* Row 2: Mobile & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Mobile Number</label>
              <input
                type="tel" // Changed to 'tel' for mobile numeric keyboard
                name="mobile"
                placeholder="+91 00000 00000"
                required
                className="w-full border-2 border-gray-100 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-0 transition-all outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="w-full border-2 border-gray-100 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-0 transition-all outline-none"
              />
            </div>
          </div>

          {/* Row 3: Full Address */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Full Residential Address</label>
            <textarea
              name="address"
              rows="3"
              placeholder="Enter your street, house number..."
              required
              className="w-full border-2 border-gray-100 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-0 transition-all outline-none resize-none"
            ></textarea>
          </div>

          {/* Row 4: City, State, Pincode */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                className="border-2 border-gray-100 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-0 transition-all outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                required
                className="border-2 border-gray-100 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-0 transition-all outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Pincode</label>
              <input
                type="text"
                inputMode="numeric" // Triggers numeric keyboard on mobile
                name="pincode"
                placeholder="000000"
                required
                className="border-2 border-gray-100 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-0 transition-all outline-none"
              />
            </div>
          </div>

          {/* Row 5: Trial Location */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Preferred Trial Center</label>
            <input
              type="text"
              name="trial_location"
              placeholder="Select or enter location"
              required
              className="w-full border-2 border-gray-100 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-0 transition-all outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-black py-4 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70 disabled:pointer-events-none uppercase tracking-widest text-sm"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : "Submit Registration"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;