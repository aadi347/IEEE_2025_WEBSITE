import React, { useEffect, useState } from 'react';
import { CiCalendarDate } from "react-icons/ci";
import DateCard from '../components/DateCard';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://www.bitmesra.ac.in/UploadedDocuments/user_adminpatna/Header/Header_20151201124720301_e3af4825f6254938867eac7a60ecc635_bit1.JPG",
    "https://www.bitmesra.ac.in/UploadedDocuments/user_pratyush_869/Header/Header_20150203121347030_855857f2f0dd49478a7e5b98a133fe80_Front%20view1.JPG",
    "https://www.bitmesra.ac.in/UploadedDocuments/user_adminpatna/Header/Header_20151201124439051_35031cf368c040fa884de5c019cd00ed_DSC_0002%20(2).JPG",
    "https://www.bitmesra.ac.in/UploadedDocuments/user_pratyush_869/Header/Header_20150204144017605_5fedd42a75b7435ca80099b58031ef8a_Auditorium1.JPG",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out ${
              index === currentImageIndex
                ? "translate-y-0"
                : index < currentImageIndex
                ? "-translate-y-full"
                : "translate-y-full"
            }`}
            style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center animate-fade-in">
        <h1 className="text-5xl font-bold leading-tight mb-4 motion-preset-typewriter ">Welcome to the INTERNATIONAL CONFERENCE of IEEE</h1>
        <DateCard />
        <p className="text-lg text-gray-300 mb-8">Patna, Bihar</p>
        <a href="#" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg animate-reveal-delay2">Get Started</a>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 2s ease-in-out;
        }

        .animate-reveal {
          animation: reveal 1.5s ease-out;
        }

        .animate-reveal-delay {
          animation: reveal 1.5s ease-out 0.5s;
          animation-fill-mode: forwards;
        }

        .animate-reveal-delay2 {
          animation: reveal 1.5s ease-out 1s;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
