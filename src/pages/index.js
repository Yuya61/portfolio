import React, { useState } from "react";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import AboutParallax from "../components/AboutParallax";
import About from "../components/About";
import Ticker from "../components/Ticker";
import Contents from "../components/Contents";
import {
  homeLarry,
  homeVector,
  homeUI,
  homeDaruma,
  burger,
} from "../components/Contents/Data";
import PicLarry from "../components/PicLarry";
import PicVector from "../components/PicVector";
import PicDailyUi from "../components/PicDailyUI";
import PicDaruma from "../components/PicDaruma";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} {...burger} />
      <Navbar toggle={toggle} />
      <Home />
      {/* <AboutParallax /> */}
      <About />
      <Ticker />
      <PicLarry />
      <Contents {...homeLarry} />
      <PicVector />
      <Contents {...homeVector} />
      <PicDailyUi />
      <Contents {...homeUI} />
      <PicDaruma />
      <Contents {...homeDaruma} />
      <Works />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
