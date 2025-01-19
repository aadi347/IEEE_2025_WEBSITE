import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; 
// import Logo_M from '../../assets/470037611_978632547630831_5224990882630034862_n.jpg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 py-4">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="https://upload.wikimedia.org/wikipedia/en/d/d8/BIT_Mesra_logo.png" alt='10'className='w-auto h-16'/>
          </div>


          <div className="hidden md:flex items-center flex-grow mx-4">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-1.5 rounded-md text-gray-900 focus:outline-sky-600"
              />
              <FiSearch className="absolute right-3 top-2.5 text-gray-500" size={20} />
            </div>
          </div>

 
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:bg-teal-400 px-3 py-2 rounded-md">
              Home
            </a>
            <a href="#" className="text-white hover:bg-teal-400 px-3 py-2 rounded-md">
              About
            </a>
            <a href="#" className="text-white hover:bg-teal-400 px-3 py-2 rounded-md">
            Event Schedule
            </a>
            <a href="#" className="text-white hover:bg-teal-400 px-3 py-2 rounded-md">
            Delegate Statistics
            </a>
            <a href="#" className="text-white hover:bg-teal-400 px-3 py-2 rounded-md">
            Organizing Agencies
            </a>
          </div>


          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

  
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="#" className="text-white block px-3 py-2 rounded-md hover:bg-teal-400">
              Home
            </a>
            <a href="#" className="text-white block px-3 py-2 rounded-md hover:bg-teal-400">
              About
            </a>
            <a href="#" className="text-white block px-3 py-2 rounded-md hover:bg-teal-400">
              Services
            </a>
            <a href="#" className="text-white block px-3 py-2 rounded-md hover:bg-teal-400">
              Contact
            </a>
          </div>

      
          <div className="px-3 py-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-sky-600"
              />
              <FiSearch className="absolute right-3 top-2.5 text-gray-500" size={20} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
