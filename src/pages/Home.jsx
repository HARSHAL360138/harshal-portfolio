import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image1 from '../assets/image2.png';
import 'animate.css';

function Home() {
  return (
    <section  id="home" className="w-full flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 py-40 bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* Image - Left to Right Animation */}
      <div className="flex justify-center md:justify-end animate__animated animate__fadeInLeft animate__faster">
        <img
          src={Image1} // Replace with actual image path
          alt="Harshal Khapekar"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg border-4 border-gray-300 dark:border-gray-700"
        />
      </div>

      {/* Text - Right to Left Animation */}
      <div className="text-center flex flex-col items-center md:text-left max-w-xl animate__animated animate__fadeInRight animate__faster">
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">Hello, I'm</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
          Harshal Khapekar
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-2">
          MERN STACK Developer
        </h2>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate__animated animate__fadeInUp animate__delay-1s">
          <a
            href="/Harshal_Khapekar.pdf"
            download
            className="px-6 py-2 border border-black dark:border-white rounded-full text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm sm:text-base"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-90 transition text-sm sm:text-base"
          >
            Contact Info
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-6 text-xl sm:text-2xl animate__animated animate__fadeInUp animate__delay-1s">
          <a href="https://www.linkedin.com/in/harshal-khapekar-99418225b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-black dark:text-white hover:text-blue-600 transition" />
          </a>
          <a href="https://github.com/HARSHAL360138" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-black dark:text-white hover:text-gray-600 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
