import React, { useState } from "react";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import AboutParallax from "../components/AboutParallax";
import About from "../components/About";
import Looper from "../components/Looper";
import Contents from "../components/Contents";
import {
  // homeLarry,
  // homeVector,
  // homeUI,
  // homeDaruma,
  burger,
} from "../components/Contents/Data";
import Case_Title from "../components/Case_Title";
import { case1, case2, case3, caseMp } from "../components/Case/Data";
import {
  // worksRv,
  // worksMp,
  worksLarry,
  worksVector,
  worksDaruma,
  worksDailyUi,
  // worksArtDirections,
  worksPortfolio,
} from "../components/Works/Data";
// import PicLarry from "../components/PicLarry";
// import PicVector from "../components/PicVector";
// import PicDailyUi from "../components/PicDailyUI";
// import PicDaruma from "../components/PicDaruma";
import Case from "../components/Case";
import Works from "../components/Works";
import Contact from "../components/Contact";
import ParallaxComponent from "../components/PrallaxComponent";
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
      <Looper />
      {/* <PicLarry />
      <Contents {...homeLarry} />
      <PicVector />
      <Contents {...homeVector} />
      <PicDailyUi />
      <Contents {...homeUI} />
      <PicDaruma />
      <Contents {...homeDaruma} /> */}
      <Case_Title />
      <Case {...case1} />
      <Case {...case2} />
      <Case {...case3} />
      <Case {...caseMp} />
      {/* <Works {...worksRv} /> */}
      {/* <Works {...worksMp} /> */}
      <Works {...worksLarry} />
      <Works {...worksVector} />
      <Works {...worksDaruma} />
      <Works {...worksDailyUi} />
      {/* <Works {...worksArtDirections} /> */}
      <Works {...worksPortfolio} />
      <Contact />
      <ParallaxComponent />
      <Footer />
    </>
  );
};

export default Index;
