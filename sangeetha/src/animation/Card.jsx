import React from "react";

const Card = ({ img, title, desc, price }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
      <img
        src={img}
        alt={title}
        className="w-full h-52 sm:h-56 md:h-60 object-cover transition duration-300 group-hover:scale-110"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold text-base">{title}</h3>

        <p className="text-white/70 text-xs mt-1 line-clamp-2">{desc}</p>

        <p className="text-gold font-bold mt-2 text-sm">₹ {price}</p>
      </div>
    </div>
  );
};

export default Card;
