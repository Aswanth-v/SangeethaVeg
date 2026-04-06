import React, { lazy } from "react";
import { morningItems, eveningItems } from "../data/Fooddata.js";
import { useInView } from "../hook/useInView";

// Lazy load SplitText
const SplitText = lazy(() => import("../animation/Splittext"));

const Card = ({ item }) => (
  <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
    <img
      src={item.img}
      alt={item.title}
      className="w-full h-52 sm:h-56 md:h-60 object-cover transition duration-300 group-hover:scale-110"
      loading="lazy"
    />

    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
      <h3 className="text-white font-semibold text-base">{item.title}</h3>
      <p className="text-white/70 text-xs mt-1 line-clamp-2">
        {item.desc}
      </p>
      <p className="text-gold font-bold mt-2 text-sm">
        ₹ {item.price}
      </p>
    </div>
  </div>
);

const Clasicfood = () => {
  const [morningRef, morningInView] = useInView({ threshold: 0.2 });
  const [eveningRef, eveningInView] = useInView({ threshold: 0.2 });

  return (
    <div className="relative min-h-screen bg-cream px-4 sm:px-6 md:px-10 py-12" id="menu">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10">

        {/* 🌅 Morning Section */}
        <div ref={morningRef}>
          {morningInView && (
           
              <SplitText
                text="Our Classic Morning Specials"
                className="text-2xl sm:text-3xl font-bold text-text text-center mb-8"
              />
           
          )}
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">
          {morningItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* 🌙 Evening Section */}
        <div ref={eveningRef} className="mt-16">
          {eveningInView && (
           
              <SplitText
                text="🌙 Evening Specials"
                className="text-2xl sm:text-3xl font-bold text-text text-center mb-8"
              />
            
          )}
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {eveningItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
       <div className="flex justify-center"> 
        <button
              onClick={() => alert("Redirect to complete menu")}
              className="mt-4 px-5 py-2 bg-gold text-black font-semibold rounded-lg hover:opacity-90 transition"
            >
              See All Items →
            </button>
            </div>
    

      </div>
    </div>
  );
};

export default Clasicfood;