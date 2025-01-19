import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

function Foot() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="flex flex-wrap items-center justify-between">
        {/* Logo Section with Vertical Divider */}
        <div className="flex items-center px-32 w-full md:w-1/4 p-8 pb-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/d8/BIT_Mesra_logo.png"
            alt="Logo"
            className="h-24 w-24 object-contain"
          />
          <div className="h-16 border-l-2 border-gray-400 mx-4"></div> {/* Vertical Divider */}
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/d8/BIT_Mesra_logo.png"
            alt="Another Logo"
            className="h-24 w-24 object-contain"
          />
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap- w-full md:w-2/4 p-4">
          <div className="p-4">
            <h2 className="text-md hover:text-blue-500 hover:cursor-pointer">Contact</h2>
          </div>
          <div className="p-4">
            <h2 className="text-md hover:text-blue-500 hover:cursor-pointer">Contact</h2>
          </div>
          <div className="p-4">
            <h2 className="text-md hover:text-blue-500 hover:cursor-pointer">Contact</h2>
          </div>
          <div className="p-4">
            <h2 className="text-md hover:text-blue-500 hover:cursor-pointer">About Us</h2>
          </div>
          <div className="p-4">
            <h2 className="text-md hover:text-blue-500 hover:cursor-pointer">Manage</h2>
          </div>
          <div className="p-4">
            <h2 className="text-md hover:text-blue-500 hover:cursor-pointer">Location</h2>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t-2 border-gray-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-center pt-8 text-gray-400 text-sm pb-4">
            <span>© 2025. All rights reserved.</span>
            <span>This Website is developed by TwoFriends</span>

            <div className="flex justify-center space-x-6 md:w-1/4 mx-72">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
