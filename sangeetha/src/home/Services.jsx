import React from "react";
import cutting from "../assets/curring.webp";
const Services = () => {
  return (
    <div className="relative min-h-screen bg-cream px-4 sm:px-6 md:px-10 py-12 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* LEFT */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={cutting}
              alt="Corporate Food"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-white space-y-8">
          {/* CORPORATE */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gold">
              CORPORATE ORDERS & PARTIES
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg">
              Looking for the best of our meals for your organisation or
              occasions? Get in touch with us today to pick your choice of
              outlets and make your bookings.
            </p>

            <button
              onClick={() => alert("Redirect to booking page")}
              className="mt-2 px-5 py-2 bg-gold text-black font-semibold rounded-lg hover:opacity-90 transition"
            >
              Book Now →
            </button>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/20"></div>

          {/* DELIVERY */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gold">
              DIRECT DELIVERY
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg">
              It's time to let us satisfy your Sangeetha cravings directly. Head
              to{" "}
              <span
                className="text-gold underline cursor-pointer"
                onClick={() =>
                  window.open("https://sangeethavegonline.com/", "_blank")
                }
              >
                www.sangeethavegonline.com
              </span>{" "}
              for direct delivery and more.
            </p>

            <button
              onClick={() =>
                window.open("https://sangeethavegonline.com/", "_blank")
              }
              className="mt-2 px-5 py-2 bg-gold text-black font-semibold rounded-lg hover:opacity-90 transition"
            >
              Order Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
