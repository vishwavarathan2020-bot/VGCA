import React from "react";

const PaymentSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-12">

      {/* Fee Display - Fluid Typography */}
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
          Registration Fee – <span className="text-orange-500 font-black">₹3150</span>
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm mt-2">All inclusive of taxes and trial charges</p>
      </div>

      {/* Main Payment Card */}
      <div className="relative w-full max-w-[90%] sm:max-w-md group">
        
        {/* Animated Glow Ring (Higher intensity on larger screens) */}
        <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500"></div>

        {/* Glass Card */}
        <div className="relative z-10 bg-white rounded-[2rem] p-6 sm:p-10 shadow-2xl flex flex-col items-center">

          {/* Title */}
          <h3 className="text-center text-xl sm:text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            National <span className="text-orange-600">Cricket</span> Academy
          </h3>

          {/* QR Code Container - Aspect Ratio maintained for all screens */}
          <div className="relative w-full aspect-square bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center overflow-hidden transition-colors hover:border-orange-300">
            
            {/* Placeholder for actual QR image */}
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-white rounded-xl shadow-inner">
                <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">QR CODE IMAGE</span>
              </div>
              <p className="text-gray-400 text-[10px] sm:text-xs font-medium px-4 text-center">
                Scan using any UPI App (GPay, PhonePe, Paytm)
              </p>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-orange-500 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-4 border-r-4 border-orange-500 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-4 border-l-4 border-orange-500 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-4 border-r-4 border-orange-500 rounded-br-lg"></div>
          </div>

          {/* Payment Instructions */}
          <div className="mt-8 w-full space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold shrink-0">1</div>
              <p className="text-xs sm:text-sm font-semibold">Scan QR or use UPI ID</p>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold shrink-0">2</div>
              <p className="text-xs sm:text-sm font-semibold">Take a screenshot of payment</p>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold shrink-0">3</div>
              <p className="text-xs sm:text-sm font-semibold">Upload it in the form below</p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Security Badge */}
      <div className="mt-8 flex items-center gap-2 opacity-60">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <p className="text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase">Secure Payment Gateway</p>
      </div>

    </section>
  );
};

export default PaymentSection;