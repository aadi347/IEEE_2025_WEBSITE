import React from 'react';
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import NationalData from '/Users/adityakumar/Desktop/confrence_bitp/frontend/src/persons/NationalsData.js';

const PersonCard = ({ person }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
   
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-blue-500 text-white p-4 rounded-full">
            <FaUserAlt size={24} />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{person.name}</h2>
            <p className="text-sm text-gray-500">{person.designation}</p>
          </div>
        </div>

   
        <div className="space-y-2">
          <p className="text-gray-600">
            <strong>Department:</strong> {person.department}
          </p>
          <p className="text-gray-600">
            <strong>Institution:</strong> {person.institution}
          </p>
          <p className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2 text-blue-500" /> {person.location}
          </p>
          <p className="flex items-center text-gray-600">
            <FaEnvelope className="mr-2 text-red-500" /> {person.email}
          </p>
          <p className="flex items-center text-gray-600">
            <FaPhoneAlt className="mr-2 text-green-500" /> {person.contact}
          </p>
        </div>
      </div>
    </div>
  );
};

const PersonList = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap items-center justify-center gap-6 p-6">
      {NationalData.map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}
    </div>
  );
};

export default PersonList;
