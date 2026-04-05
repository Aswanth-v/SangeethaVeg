import React from "react";
import Section from "../ui/section";
import Navbar from "../layout/Navbar";
import Hero from "../home/Hero";
import FestivelSpecial from "../home/FestivelSpecial";
import Clasicfood from "../home/Clasicfood";
import Services from "../home/Services";
import DeliveryCTA from "../home/DeliveryCTA";
import Footer from "../layout/Footer";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FestivelSpecial />
      <Clasicfood />
      <Services />
      <DeliveryCTA/>
     <Footer/>
    </div>
  );
};

export default Homepage;
