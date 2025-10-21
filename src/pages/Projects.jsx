
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import Image1 from '../assets/Lovely-Classes.png';
import Image2 from '../assets/Weather-App.png';
import Image3 from '../assets/Restaurant.png';
import Image4 from '../assets/Hoobank.png';
import Image5 from '../assets/Hubnex.png';
import Image6 from '../assets/Biynest.png';

const projectData = [
  {
    title: 'Lovely Classes',
    image: Image1,
    github: 'https://github.com',
    demo: 'https://lovelyclasses.in/',
  },
  {
    title: 'Weather App',
    image: Image2,
    github: 'https://github.com/HARSHAL360138/weather-app',
    demo: 'https://weather-app-one-delta-99.vercel.app/',
  },
  {
    title: 'Restaurant',
    image: Image3,
    github: 'https://github.com/HARSHAL360138/restaurant',
    demo: 'https://restaurant-gilt-eta.vercel.app/',
  },
  {
    title: 'Hoobank',
    image: Image4,
    github: 'https://github.com/HARSHAL360138/Hoobank',
    demo: 'https://hoobank-orcin.vercel.app/',
  },
  {
    title: 'Hubnex Invest',
    image: Image5,
    github: 'https://github.com/HARSHAL360138/hubnex',
    demo: 'https://hubnex-xi.vercel.app/',
  },
  {
    title: 'BiyNest',
    image: Image6,
    github: 'https://github.com/HARSHAL360138/biynest-frontend',
    demo: 'https://biynest-frontend.vercel.app/',
  },
];

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className="w-full py-20 px-4 md:px-16 bg-white dark:bg-gray-900">
      <div className="text-center mb-12" data-aos="fade-down">
        <p className="text-sm text-gray-500 dark:text-gray-400">Browse My Recent</p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden flex flex-col items-center p-6"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-48 object-cover mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
              {project.title}
            </h3>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-500 dark:border-gray-300 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Github
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-500 dark:border-gray-300 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
