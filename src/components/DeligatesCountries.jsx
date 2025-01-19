import React, { useState, useEffect } from "react";

const countries = [
  { name: "Sydney NSW, Australia", img: "https://cdn.pixabay.com/photo/2016/03/27/00/01/australia-1281935_1280.jpg" },
  { name: "Dubai, UAE", img: "https://cdn.pixabay.com/photo/2020/03/04/21/18/dubai-4902764_1280.jpg" },
  { name: "Bentonville, AR, USA", img: "https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616_1280.jpg" },
  { name: "Abbotsford, New South Wales, Australia", img: "https://cdn.pixabay.com/photo/2020/06/04/04/12/beach-5257079_1280.jpg" },
];

const DeligatesCountries = () => {
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
      className={`p-10 mx-auto ${isInView ? "motion-preset-shrink" : ""}`}
    >
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Countries from where foreign​: Delegates are expected
      </h1>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-500"
          >
            {/* Country Image */}
            <img
              src={country.img}
              alt={country.name}
              className="w-full h-48 object-cover group-hover:blur-sm transition-all duration-500"
            />
            
            {/* Overlay with Country Name */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-white text-center font-semibold px-2">
                {country.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeligatesCountries;
