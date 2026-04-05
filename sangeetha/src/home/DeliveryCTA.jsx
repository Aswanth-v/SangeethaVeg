import React from "react";

const DeliveryCTA = () => {
  return (
    <div className="relative bg-cream px-4 sm:px-6 md:px-10 py-16 overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold">
          WE ARE NOW DIRECTLY DELIVERING OUR CLASSICS
        </h2>

        <p className="text-sm sm:text-base text-white/80">
          Enjoy your favorite Sangeetha dishes delivered fresh and fast to your doorstep.
        </p>

        <p className="text-gold font-semibold text-lg">
          #NammaDelivery
        </p>

        <button
          onClick={() =>
            window.open("https://sangeethavegonline.com/", "_blank")
          }
          className="mt-4 px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:opacity-90 transition"
        >
          Order Today →
        </button>

      </div>
    </div>
  );
};

export default DeliveryCTA;