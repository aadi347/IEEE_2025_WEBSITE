import React, { useEffect } from 'react';
import './OrganizingAgencies.css';  // Import the CSS file

const OrganizingAgenciesComp = () => {
  useEffect(() => {
    const agencies = document.querySelectorAll('.agency');
    
    const options = {
      threshold: 0.9, // Trigger animation when 50% of the section is in view
    };

    const handleScroll = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-visible');
        } else {
          entry.target.classList.remove('motion-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, options);
    agencies.forEach(agency => observer.observe(agency));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="py-10 p-10">
      <div className="flex flex-col justify-center items-center py-5 px-5 rounded-lg bg-white shadow-md">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 border-b">Proposed Organizing Agencies</h1>

        <div className="flex flex-col lg:flex-row gap-8 pt-12">
          {/* Springer */}
          <div className="agency motion-section motion-preset-fade">
            <h2 className="text-xl font-semibold text-gray-800">Springer</h2>
            <p className="text-gray-600 border-r">
              Springer is a leading global scientific publisher, specializing in research, academic, and professional literature.
            </p>
          </div>

          {/* IEEE */}
          <div className="agency motion-section motion-preset-zoom">
            <h2 className="text-xl font-semibold text-gray-800">IEEE</h2>
            <p className="text-gray-600 border-r">
              IEEE (Institute of Electrical and Electronics Engineers) is the world’s largest technical professional organization dedicated to advancing technology.
            </p>
          </div>

          {/* Taylor & Francis */}
          <div className="agency motion-section motion-preset-slide">
            <h2 className="text-xl font-semibold text-gray-800">Taylor & Francis</h2>
            <p className="text-gray-600">
              Taylor & Francis is a global academic publisher specializing in the fields of humanities, science, and social sciences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizingAgenciesComp;
