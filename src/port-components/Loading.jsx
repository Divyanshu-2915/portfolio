import React, { useState } from "react";
import CountUp from "react-countup";
import HomePage from "./Home";
const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen text-[#7469B6] relative text-4xl font-bold font-basicFive">
          <CountUp end={100} start={0} duration={3} />%
        </div>
      ) : (
          <div>
            <HomePage/>
          </div>
      )}
    </>
  );
};

export default LoadingPage;
