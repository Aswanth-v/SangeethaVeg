import React from "react";
import { morningItems, eveningItems } from "../data/Fooddata.js";

const Card = ({ item }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">

    <img
      src={item.img}
      alt={item.title}
      className="w-full h-32 object-cover"
      loading="lazy"
    />

    <div className="p-3 text-center">
      <h3 className="text-white font-semibold text-sm md:text-base">
        {item.title}
      </h3>

      <p className="text-white/70 text-xs mt-1">
        {item.desc}
      </p>

      <p className="text-gold font-bold mt-2 text-sm">
        ₹ {item.price}
      </p>
    </div>

  </div>
);

const Clasicfood = () => {
  return (
    <div className="relative min-h-screen bg-cream px-4 md:px-10 py-12">
 <div className="absolute inset-0 bg-black/40"></div>
      {/* Morning */}
      <h2 className="text-3xl text-white text-center mb-8">
        🌅 Morning Specials
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">
        {morningItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      {/* Evening */}
      <h2 className="text-3xl text-white text-center mb-8">
        🌙 Evening Specials
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {eveningItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
};

export default Clasicfood;