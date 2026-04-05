import React, { useRef } from "react";
import Navbar from "../layout/Navbar";
import Hero from "../home/Hero";
import FestivelSpecial from "../home/FestivelSpecial";
import Clasicfood from "../home/Clasicfood";
import Services from "../home/Services";
import DeliveryCTA from "../home/DeliveryCTA";
import Footer from "../layout/Footer";

const Homepage = () => {
  const classicFoodRef = useRef(null);

  const scrollToClassicFood = () => {
    classicFoodRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth">
      <Navbar />

      <Hero scrollToClassicFood={scrollToClassicFood} />
      <FestivelSpecial />
      <div ref={classicFoodRef} className="scroll-mt-24">
        <Clasicfood />
      </div>

      <Services />
      <DeliveryCTA />
      <Footer />
    </div>
  );
};

export default Homepage;
