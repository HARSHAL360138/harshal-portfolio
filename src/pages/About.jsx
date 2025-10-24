
import React, { useEffect } from 'react';
import { FaUserGraduate, FaAward } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from '../assets/image2.png';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="w-full px-4 md:px-16 py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="text-center mb-12" data-aos="fade-down">
        <p className="text-gray-500 dark:text-gray-400 text-sm">Get To Know More</p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div data-aos="fade-right">
          <img
            src={Image1}
            alt="Harshal Khapekar"
            className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-lg hover:ring-4 hover:ring-blue-400 transition duration-300"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 text-center lg:text-left" data-aos="fade-left">
          {/* Cards */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mb-8">
            <Card
              icon={<FaAward className="text-2xl mx-auto text-gray-800 dark:text-white mb-2" />}
              title="Experience"
              text={
                <>
                  Intern (MERN STACK Developer)<br />
                  @ Softtronix Software Services Pvt. Ltd., NAGPUR
                </>
              }
            />
            <Card
              icon={<FaUserGraduate className="text-2xl mx-auto text-gray-800 dark:text-white mb-2" />}
              title="Education"
              text={
                <>
                  MCA Masters Degree<br />
                  BCA Bachelors Degree
                </>
              }
            />
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            I'm deeply passionate about web development, especially with the MERN (MongoDB,
            Express.js, React.js, Node.js) stack. I bring a mix of creativity, problem-solving
            skills, and a strong commitment to learning and growing in the tech field. Mastering
            the MERN stack is my goal, driven by my passion for creating innovative solutions and
            staying up-to-date with the latest trends in web development.
          </p>
        </div>
      </div>
    </section>
  );
}

const Card = ({ icon, title, text }) => (
  <div
    className="border rounded-2xl p-6 flex-1 text-center shadow-md dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800"
    data-aos="zoom-in"
  >
    {icon}
    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-700 dark:text-gray-400 mt-2 text-sm">{text}</p>
  </div>
);

export default About;