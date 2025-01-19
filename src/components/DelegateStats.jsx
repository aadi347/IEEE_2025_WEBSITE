import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const DelegateStats = () => {
  const { ref: statsRef, inView: isStatsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the component is visible
  });
  const [isInView, setIsInView] = useState(false);
  
    const handleScroll = () => {
      const container = document.getElementById("countries-container");
      const rect = container.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      // Clean up the event listener
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div
      id="countries-container"
      ref={statsRef}
      className={`flex flex-col items-center justify-center py-32 px-6 lg:px-12 pt-48 dark:bg-gray-900 min-h-screen p-10 mx-auto ${isInView ? "motion-preset-bounce" : ""}`}
    >
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-8">
        Delegate Statistics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* International Delegates */}
        <div className="bg-white dark:bg-gray-800 border shadow-sm rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Number of International
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-4 text-center">
            Delegates expected to participate
          </p>
          <span className="text-4xl font-bold text-red-500">
            {isStatsVisible && (
              <CountUp start={0} end={5} duration={2} delay={0.2} />
            )}
          </span>
        </div>

        {/* National Delegates */}
        <div className="bg-white dark:bg-gray-800 border shadow-sm rounded-lg p-6 flex flex-col items-center ">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Number of National
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-4 text-center">
            Delegates expected to participate
          </p>
          <span className="text-4xl font-bold text-red-500">
            {isStatsVisible && (
              <CountUp start={0} end={15} duration={2} delay={0.2} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DelegateStats;
