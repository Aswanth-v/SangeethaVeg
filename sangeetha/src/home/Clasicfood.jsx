import React from "react";

const Clasicfood = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row bg-cream overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* LEFT CARD */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center shadow-xl w-full max-w-md">
          
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Classic Food
          </h1>

          <p className="mt-3 text-white/80 text-sm md:text-base">
            Traditional dishes with authentic taste 🍛
          </p>

          <div className="mt-5 w-full h-48 md:h-64 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="text-white">Image</span>
          </div>

          <button className="mt-5 bg-gold text-black px-5 py-2 rounded-lg hover:scale-105 transition">
            Explore
          </button>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center shadow-xl w-full max-w-md">
          
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Festive Specials
          </h1>

          <p className="mt-3 text-white/80 text-sm md:text-base">
            Premium seasonal delights ✨
          </p>

          <div className="mt-5 w-full h-48 md:h-64 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="text-white">Image</span>
          </div>

          <button className="mt-5 bg-gold text-black px-5 py-2 rounded-lg hover:scale-105 transition">
            Explore
          </button>
        </div>
      </div>

    </div>
  );
};

export default Clasicfood;