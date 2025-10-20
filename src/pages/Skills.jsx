




// import React from 'react';

// const skillsData = {
//   frontend: [
//     { name: 'HTML5', level: 'Experienced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
//     { name: 'CSS3', level: 'Experienced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
//     { name: 'JavaScript', level: 'Experienced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
//     { name: 'TypeScript', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
//     { name: 'ES6', level: 'Intermediate', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
//     { name: 'React JS', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
//     { name: 'Tailwind', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
//     { name: 'Material UI', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
//   ],
//   backend: [
//     { name: 'Node JS', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
//     { name: 'Express JS', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
//     { name: 'Nest JS', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
//     { name: 'MongoDB', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
//     { name: 'SQL', level: 'Intermediate', icon: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png' },
//     { name: 'Git', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
//   ]
// };

// function Skills() {
//   return (
//     <section id="skills" className="w-full py-20 px-4 md:px-16 bg-white dark:bg-gray-900">
//       <div className="text-center mb-12 animate__animated animate__fadeInDown">
//         <p className="text-gray-500 dark:text-gray-400 text-sm">Explore My</p>
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//         <SkillCategory
//           title="Frontend Development"
//           skills={skillsData.frontend}
//           animation="animate__fadeInLeft"
//         />
//         <SkillCategory
//           title="Backend Development"
//           skills={skillsData.backend}
//           animation="animate__fadeInRight"
//         />
//       </div>
//     </section>
//   );
// }

// const SkillCategory = ({ title, skills, animation }) => (
//   <div className={`border rounded-2xl p-6 shadow-md dark:border-gray-700 bg-white dark:bg-gray-800 animate__animated ${animation}`}>
//     <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-6">{title}</h3>
//     <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
//       {skills.map(({ name, level, icon }, idx) => (
//         <div
//           key={name}
//           className={`flex items-center gap-3 p-2 rounded-lg transition animate__animated animate__fadeInUp animate__delay-${idx + 1}s`}
//         >
//           <img src={icon} alt={`${name} logo`} className="w-8 h-8 object-contain" />
//           <div>
//             <h4 className="font-semibold text-gray-800 dark:text-white">{name}</h4>
//             <p className="text-sm text-gray-600 dark:text-gray-400">{level}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default Skills;








import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillsData = {
  frontend: [
    { name: 'HTML5', level: 'Experienced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', level: 'Experienced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', level: 'Experienced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'ES6', level: 'Intermediate', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
    { name: 'React JS', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'Material UI', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  ],
  backend: [
    { name: 'Node JS', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express JS', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Nest JS', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
    { name: 'MongoDB', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'SQL', level: 'Intermediate', icon: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png' },
    { name: 'Git', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ]
};

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="skills" className="w-full py-20 px-4 md:px-16 bg-white dark:bg-gray-900">
      <div className="text-center mb-12" data-aos="fade-down">
        <p className="text-gray-500 dark:text-gray-400 text-sm">Explore My</p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <SkillCategory
          title="Frontend Development"
          skills={skillsData.frontend}
          animation="fade-right"
        />
        <SkillCategory
          title="Backend Development"
          skills={skillsData.backend}
          animation="fade-left"
        />
      </div>
    </section>
  );
}

const SkillCategory = ({ title, skills, animation }) => (
  <div
    className="border rounded-2xl p-6 shadow-md dark:border-gray-700 bg-white dark:bg-gray-800"
    data-aos={animation}
  >
    <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-6">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
      {skills.map(({ name, level, icon }, idx) => (
        <div
          key={name}
          className="flex items-center gap-3 p-2 rounded-lg transition"
          data-aos="fade-up"
          data-aos-delay={idx * 100}
        >
          <img src={icon} alt={`${name} logo`} className="w-8 h-8 object-contain" />
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white">{name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{level}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
