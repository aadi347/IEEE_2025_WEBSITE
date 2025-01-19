import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const DateCard = () => {
  return (
    <div className="grid grid-cols-12 md:grid-cols-6 gap-6 bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 p-6 rounded-md shadow-lg">
    {/* Left Section: Address with Icons */}
    <div className="col-span-12 md:col-span-3 space-y-4">
      <h2 className="text-xl font-semibold text-yellow-500">Contact Information</h2>
      <div className="flex items-center space-x-2 text-white">
        <FaMapMarkerAlt className="text-lg text-blue-500" />
        <span>1234 Some Street, City, Country</span>
      </div>
      <div className="flex items-center space-x-2 text-white">
        <FaEnvelope className="text-lg text-blue-500" />
        <span>email@example.com</span>
      </div>
      <div className="flex items-center space-x-2 text-white">
        <FaPhone className="text-lg text-blue-500" />
        <span>+123-456-7890</span>
      </div>
    </div>

    {/* Right Section: Conference Date and Location */}
    <div className="col-span-12 md:col-span-3 space-y-4">
      <h2 className="text-xl font-semibold text-yellow-500">Conference Details</h2>
      <div className="flex items-center space-x-2 text-white">
        <span className="font-medium">Date:</span>
        <span>15th January 2025</span>
      </div>
      <div className="flex items-center space-x-2 text-white">
        <span className="font-medium">Location:</span>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  </div>

  )
}

export default DateCard