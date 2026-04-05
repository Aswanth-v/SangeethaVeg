import { React, useState, lazy, Suspense } from "react";

import scanner from "../assets/scanner.jpg";
import badam from "../assets/badam.jpg";

// Lazy load animation (important for TBT)
const SplitText = lazy(() => import("../animation/Splittext"));

const FestivelSpecial = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row bg-cream overflow-hidden">


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Left - Content */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-10">
        <div className="text-center md:text-left">
          
          {/* Lazy animation */}
          <Suspense fallback={<h2 className="text-3xl font-bold text-white">Loading...</h2>}>
            <SplitText
              text="Order Festive Specials & Classic"
              className="text-3xl font-bold text-white"
            />
          </Suspense>

          <p className="mt-4 text-lg text-white/80">
            🍛 Sangeetha Specials directly from our kitchen
          </p>

          <button
            onClick={() => setShowQR(!showQR)}
            className="mt-6 bg-gold text-black px-6 py-3 rounded-lg hover:scale-105 transition"
          >
            {showQR ? "Hide QR" : "Scan for Order"}
          </button>

          {/* Load QR only when needed */}
          {showQR && (
            <div className="mt-4 p-4 bg-white/80 backdrop-blur-md rounded-xl shadow-lg w-fit mx-auto md:mx-0">
              <img
                src={scanner}
                alt="QR Code"
                className="w-40 h-40"
                width={160}
                height={160}
                loading="lazy"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Scan to order 🍛
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right - Image */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-6 flex-col">
        <img
          src={badam}
          alt="Badam"
          className="w-64 md:w-80 rounded-2xl shadow-xl object-cover opacity-85"
          width={320}
          height={320}
          loading="lazy"
        />
        <span className="text-cream italic">#NammaSangeetha</span>
        <span className="text-gold text-2xl font-bold">
          Special Badam Halwa
        </span>
      </div>
    </div>
  );
};

export default FestivelSpecial;