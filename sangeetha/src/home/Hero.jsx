import React from "react";
import food from "../assets/food.webp";
import { useInView } from "../hook/useInView";

const Hero = ({scrollToClassicFood }) => {
  const [ref, isVisible] = useInView();


  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
<img
  src={food}
  alt="Food"
  className="absolute inset-0 w-full h-full object-cover"
  loading="eager"
  fetchPriority="high"
  decoding="async"
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Brand */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide mb-4">
          Namma Sangeetha
        </h1>

        {/* Subtext */}
        <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mb-4">
          Serving timeless South Indian classics with uncompromised quality since{" "}
          <span className="text-yellow-400 font-semibold">1985</span>.
        </p>

        {/* Tagline */}
        <p className="text-gray-300 italic mb-8">
          From Chennai to the world 🌍
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
             onClick={scrollToClassicFood}
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition">
            Explore Menu
          </button>

          <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;