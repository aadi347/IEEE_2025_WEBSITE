import React, { useEffect, useState } from 'react';

const Dates = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('dates-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      id="dates-section"
      className={`flex flex-col items-center justify-center px-4 lg:px-12 py-8 lg:py-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Heading and Small Paragraph */}
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
          Event Schedule
        </h1>
        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 mt-4">
          Discover the detailed schedule for our upcoming event, featuring keynote sessions, technical workshops, and networking opportunities.
        </p>
      </div>

      {/* Existing Timeline */}
      <div className="flex items-center justify-center h-screen pt-40">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {/* Existing Timeline */}
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-bold leading-none text-red-500 dark:text-gray-500 rounded-full py-2 px-2 shadow-sm border">
              Day 1st - <span>28/08/2025</span>
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white pt-2">
              09:30 - Inaugural Function
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Chief Minister Of Bihar or HRD Minister
            </p>
            <a
              href="#"
              className="motion-preset-shake inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              <span className="text-gray-800">Tea</span> - 12:00 PM
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Key Note Session - 1
            </h3>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">
              Lunch<span className="mx-2">- 02:00 PM</span>
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              <p className="text-base font-normal text-gray-800 dark:text-gray-400">
                <span>Tech Session - 1</span> <span className="mx-2">|</span>
                <span>Tech Session - 2</span> <span className="mx-2">|</span>
                <span>Tech Session - 3</span> <span className="mx-2">|</span>
                <span>Tech Session - 4</span>
              </p>
            </h3>
          </li>

          {/* Hardcoded Additional Timeline */}
          <li className="mb-10 ms-4">
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">
              05:30 PM
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Keynote Session - 2
            </h3>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">
              09:00 PM
            </time>
            <time className="mb-1 text-sm font-bold leading-none text-red-500 dark:text-gray-500 rounded-full py-2 px-2 shadow-sm border">
              Day 2nd - <span>29/08/2025</span>
            </time>
            <p className="text-base font-normal text-gray-800 dark:text-gray-400 mt-5">
              <span>Tech Session - 5</span> <span className="mx-2">|</span>
              <span>Tech Session - 6</span> <span className="mx-2">|</span>
              <span>Tech Session - 7</span> <span className="mx-2">|</span>
              <span>Tech Session - 8</span>
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              <span className="text-gray-800">Tea</span> - 12:30 PM
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Key Note Session - 3 | Lunch
            </h3>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">
              02:30 PM
            </time>
            <p className="text-base font-normal text-gray-800 dark:text-gray-400 mt-5">
              <span>Tech Session - 9</span> <span className="mx-2">|</span>
              <span>Tech Session - 10</span> <span className="mx-2">|</span>
              <span>Buffer Session - 1</span> <span className="mx-2">|</span>
              <span>Buffer Session - 2</span>
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              <span className="text-gray-800">04:30 PM</span>
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Key Note Session - 4
            </h3>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Dates;
