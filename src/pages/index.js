import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  frontObj1,
  frontObj2,
  frontObj3,
} from "../components/InfoSection/Data";
import Projects from "../components/Projects";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...frontObj1}></InfoSection>
      <InfoSection {...frontObj2}></InfoSection>
      <Projects />
      <ContactSection />

      <Footer />
    </>
  );
};

export default Home;
