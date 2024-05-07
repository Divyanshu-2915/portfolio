import React, { useState } from "react";
import CountUp from "react-countup";
import { ParallaxProvider } from "react-scroll-parallax";
import NavbarPage from "./port-components/Navbar";
import ReviewPage from "./port-components/Reviews";
import HomePage from "./port-components/Home";
import FooterPage from "./port-components/Footer";
import ContactPage from "./port-components/Contact";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen border-2 border-black relative text-4xl font-bold font-basicFive text-[#f8853e]">
          <CountUp end={100} start={0} duration={3} />%
        </div>
      ) : (
        <ParallaxProvider>
          <div className="transform -translate-y transition-transform duration-1000 ease-in-out">
            <HomePage/>
          </div>
        </ParallaxProvider>
      )}
    </>
  );
};

export default App;
