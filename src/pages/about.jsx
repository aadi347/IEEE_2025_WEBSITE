import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.motion-section');
    
    const options = {
      threshold: 0.5, // Trigger animation when 50% of the section is in view
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
    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id='about' className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center motion-section">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 motion-preset-typewriter">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. In the first place, we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-8/12 motion-section">
          <img
            className="w-full h-full motion-preset-compress"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-12">
        {/* Left Section */}
        <div className="border py-5 px-5 rounded-md flex flex-col justify-center lg:justify-start lg:items-start items-center text-center lg:text-left motion-section motion-preset-shrink">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 border-b">
            Key Insights
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 py-5">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. In the first place, we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from
          </p>
        </div>

        {/* Right Section */}
        <div className="border py-5 px-5 rounded-md flex flex-col justify-center lg:justify-start lg:items-start items-center text-center lg:text-left motion-section motion-preset-shrink">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 border-b">
            Objectives & Scope
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 py-5">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. In the first place, we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="col-span-1 lg:col-span-2 lg:pt-8">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
          {/* Add your grid items here */}
        </div>
      </div>
    </div>
  );
};

export default About;
