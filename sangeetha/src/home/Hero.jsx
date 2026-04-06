import React from "react";
import food from "../assets/food.webp";
import { useInView } from "../hook/useInView";

const Hero = ({ scrollToClassicFood }) => {
  const [ref, isVisible] = useInView();

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero section showcasing Namma Sangeetha restaurant"
    >
      {/* Background Image */}
      <img
        src={food}
        alt="South Indian dishes including dosa, idli and meals served at Namma Sangeetha restaurant"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        width="1920"
        height="1080"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 z-10 bg-black/60"></div>

      <div
        ref={ref}
        className={`relative z-20 flex flex-col items-center justify-center h-full text-center px-6 transition-all duration-700 ${
          isVisible !== false
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide mb-4">
          Namma Sangeetha
        </h1>

        {/* Subtext */}
        <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mb-4">
          Serving timeless South Indian Dishes with uncompromised quality since{" "}
          <span className="text-yellow-400 font-semibold">1985</span>.
        </p>

        <p className="text-gray-300 italic mb-8">
          From Chennai to the world 🌍
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={scrollToClassicFood}
            aria-label="Scroll to explore menu section"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Explore Menu
          </button>

          <button
            aria-label="Order food online"
            className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
