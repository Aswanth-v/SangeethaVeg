import React, { lazy, Suspense, useRef, useEffect, useState } from "react";
import Navbar from "../layout/Navbar.jsx";
import Hero from "../home/Hero.jsx";
// 🔥 Lazy imports (code splitting)
const FestivelSpecial = lazy(() => import("../home/FestivelSpecial.jsx"));
const Clasicfood = lazy(() => import("../home/Clasicfood.jsx"));
const Services = lazy(() => import("../home/Services.jsx"));
const DeliveryCTA = lazy(() => import("../home/DeliveryCTA.jsx"));
const Footer = lazy(() => import("../layout/Footer.jsx"));
const Faq = lazy(() => import("../home/Faq.jsx.jsx"));
const Homepage = () => {
  const classicFoodRef = useRef(null);


  const scrollToClassicFood = () => {
    classicFoodRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  const [loadBelow, setLoadBelow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadBelow(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar />

      
      <Hero scrollToClassicFood={scrollToClassicFood} />

  
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
            <Faq />
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
