import React, { lazy, Suspense, useRef, useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Hero from "../home/Hero";
// 🔥 Lazy imports (code splitting)
const FestivelSpecial = lazy(() => import("../home/FestivelSpecial"));
const Clasicfood = lazy(() => import("../home/Clasicfood"));
const Services = lazy(() => import("../home/Services"));
const DeliveryCTA = lazy(() => import("../home/DeliveryCTA"));
const Footer = lazy(() => import("../layout/Footer"));
const Faq=lazy(()=>import("../home/Faq.jsx"))
const Homepage = () => {
  const classicFoodRef = useRef(null);

  // 🔥 Scroll function
  const scrollToClassicFood = () => {
    classicFoodRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔥 Delay loading below-the-fold content (improves LCP)
  const [loadBelow, setLoadBelow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadBelow(true);
    }, 800); // slight delay for better performance

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar />

      {/* 🔥 Hero loads instantly (important for LCP) */}
      <Hero scrollToClassicFood={scrollToClassicFood} />

      {/* 🔥 Load rest after initial render */}
      {loadBelow && (
        <>
          <Suspense fallback={null}>
            <FestivelSpecial />
          </Suspense>

          <div ref={classicFoodRef} className="scroll-mt-24">
            <Suspense fallback={null}>
              <Clasicfood />
            </Suspense>
          </div>

          <Suspense fallback={null}>
            <Services />
          </Suspense>

          <Suspense fallback={null}>
            <DeliveryCTA />
          </Suspense>
          <Suspense fallback={null}>
            <Faq/>
          </Suspense>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Homepage;