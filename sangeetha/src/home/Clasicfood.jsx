import React from "react";
import { morningItems, eveningItems } from "../data/Fooddata.js";

const Card = ({ item }) => (
  <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
    {/* Image */}
    <img
      src={item.img}
      alt={item.title}
      className="w-full h-60 object-cover transition duration-300 group-hover:scale-110"
      loading="lazy"
    />

    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
      <h3 className="text-white font-semibold text-base">{item.title}</h3>

      <p className="text-white/70 text-xs mt-1 line-clamp-2">{item.desc}</p>

      <p className="text-gold font-bold mt-2 text-sm">₹ {item.price}</p>
    </div>
  </div>
);
const Clasicfood = () => {
  return (
    <div className="relative min-h-screen bg-cream px-4 md:px-10 py-12">
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-3xl text-gold font-extrabold text-center mb-8">
          Our Classics
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">
          {morningItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        <h2 className="text-3xl text-gold font-extrabold text-center mb-8">
          🌙 Evening Specials
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {eveningItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clasicfood;
