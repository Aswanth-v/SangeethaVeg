import React from "react";
import food from "../assets/food.webp";
import { useInView } from "../hook/useInView";
const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src={food}
        alt="Food"
        className="absolute inset-0 w-full h-full object-cover"
        width={1200}
        height={800}
        loading="eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">
          Welcome to Sangeetha
        </h1>
      </div>
    </div>
  );
};

export default Hero;