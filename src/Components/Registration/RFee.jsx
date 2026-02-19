import React from "react";

const PaymentSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">

      {/* Fee */}
      <h2 className="text-white text-lg md:text-xl font-bold tracking-wide mb-8">
        Registration Fee – <span className="text-orange-500">Rs.3150</span>
      </h2>

      {/* Card */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_0_60px_rgba(255,140,0,0.35)] p-8 w-full max-w-md">

        {/* Orange glow ring */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 blur opacity-30"></div>

        <div className="relative z-10">

          {/* Title */}
          <h3 className="text-center text-2xl font-extrabold text-gray-900 mb-6">
            National <span className="text-orange-500">Cricket</span> Academy
          </h3>

          {/* QR Box */}
          <div className="bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 h-64 flex items-center justify-center text-gray-400 font-semibold">
            QR Code
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
