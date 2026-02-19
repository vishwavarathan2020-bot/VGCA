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
          console.log(result.text);
          alert("Registration Successful! Check your email.");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Something went wrong. Check console.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8 md:p-12">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-center">
          National <span className="text-orange-500">Cricket</span> Academy
        </h1>

        <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="date"
            name="dob"
            required
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            required
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            name="address"
            rows="3"
            placeholder="Address"
            required
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500"
          ></textarea>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              required
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              required
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <input
            type="text"
            name="trial_location"
            placeholder="Trial Location"
            required
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 rounded-full hover:scale-105 transition"
          >
            {loading ? "Sending..." : "Submit Registration"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
