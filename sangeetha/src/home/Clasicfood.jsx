import React, { lazy } from "react";
import { morningItems, eveningItems } from "../data/Fooddata.js";
import { useInView } from "../hook/useInView";
import Card from "../animation/Card.jsx";

const SplitText = lazy(() => import("../animation/Splittext"));

const Clasicfood = () => {
  const [morningRef, morningInView] = useInView({ threshold: 0.2 });
  const [eveningRef, eveningInView] = useInView({ threshold: 0.2 });

  return (
    <div
      className="relative min-h-screen bg-cream px-4 sm:px-6 md:px-10 py-12"
      id="menu"
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10">
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
            <Card
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>

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
            <Card
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
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
