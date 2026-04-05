import React from "react";
import Section from "../ui/section";
import Navbar from "../layout/Navbar";
import Hero from "../home/Hero";
import FestivelSpecial from "../home/FestivelSpecial";
import Clasicfood from "../home/Clasicfood";
import Services from "../home/Services";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FestivelSpecial />
      <Clasicfood />
      <Services />
    </div>
  );
};

export default Homepage;
