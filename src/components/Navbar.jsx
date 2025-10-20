// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(
//     () => localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const linkClasses = ({ isActive }) =>
//     `relative hover:text-blue-600 transition-colors duration-200 ${
//       isActive ? "text-blue-600 font-medium" : ""
//     } after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left`;

//   return (
//     <nav className="bg-white  dark:bg-gray-900 py-4 w-full z-50 transition-colors duration-300 ">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
//           Harshal Khapekar
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 text-lg lg:text-xl text-gray-700 dark:text-gray-300">
//           <a href="#home" className={linkClasses}>
//             Home
//           </a>
//           <a href="#about" className={linkClasses}>
//             About Me
//           </a>
//           <a href="#skills" className={linkClasses}>
//             Services
//           </a>
//           <a href="#projects" className={linkClasses}>
//             Projects
//           </a>
//           <a href="#contact" className={linkClasses}>
//             Contact
//           </a>
//           <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
//             {darkMode ? "☀️" : "🌙"}
//           </button>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-2xl focus:outline-none text-gray-700 dark:text-gray-300"
//           >
//             {menuOpen ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu with Animate.css */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           menuOpen
//             ? "animate__animated animate__fadeIn animate__faster"
//             : "animate__animated animate__fadeOut animate__faster"
//         }`}
//         style={{
//           maxHeight: menuOpen ? "300px" : "0",
//           opacity: menuOpen ? 1 : 0,
//         }}
//       >
//         <div className="flex flex-col space-y-3 py-4 text-lg text-gray-700 dark:text-gray-300">
//           <a
//             href="#home"
//             className={linkClasses}
//             onClick={() => setMenuOpen(false)}
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className={linkClasses}
//             onClick={() => setMenuOpen(false)}
//           >
//             About Me
//           </a>
//           <a
//             href="#skills"
//             className={linkClasses}
//             onClick={() => setMenuOpen(false)}
//           >
//             Services
//           </a>
//           <a
//             href="#projects"
//             className={linkClasses}
//             onClick={() => setMenuOpen(false)}
//           >
//             Projects
//           </a>
//           <a
//             href="#contact"
//             className={linkClasses}
//             onClick={() => setMenuOpen(false)}
//           >
//             Contact
//           </a>
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="text-xl w-fit"
//           >
//             {darkMode ? "☀️" : "🌙"}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;










// import React, { useState, useEffect } from "react";
// import "animate.css";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(
//     () => localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const menuItems = [
//     { label: "Home", href: "#home" },
//     { label: "About Me", href: "#about" },
//     { label: "Services", href: "#skills" },
//     { label: "Projects", href: "#projects" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="bg-white dark:bg-gray-900 py-4 w-full z-50 transition-colors duration-300 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//         <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
//           Harshal Khapekar
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6 text-lg lg:text-xl text-gray-700 dark:text-gray-300">
//           {menuItems.map((item, index) => (
//             <a
//               key={index}
//               href={item.href}
//               className={`relative transition-all duration-10 hover:text-blue-600 hover:scale-105 animate__animated animate__fadeInDown animate__faster animate__delay-${index + 1}s`}
//             >
//               {item.label}
//             </a>
//           ))}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="text-xl ml-4"
//           >
//             {darkMode ? "☀️" : "🌙"}
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-3xl focus:outline-none text-gray-700 dark:text-gray-300"
//           >
//             {menuOpen ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-500 overflow-hidden ${
//           menuOpen
//             ? "max-h-[300px] animate__animated animate__fadeInDown"
//             : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="flex flex-col px-4 pt-4 pb-6 space-y-4 text-lg text-gray-700 dark:text-gray-300">
//           {menuItems.map((item, index) => (
//             <a
//               key={index}
//               href={item.href}
//               onClick={() => setMenuOpen(false)}
//               className={`animate__animated animate__fadeInLeft animate__faster animate__delay-${index + 1}s`}
//             >
//               {item.label}
//             </a>
//           ))}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="text-xl mt-2 w-fit"
//           >
//             {darkMode ? "☀️" : "🌙"}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


















import React, { useState, useEffect } from "react";
import "animate.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Services", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 py-4 w-full  z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          Harshal Khapekar
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-lg lg:text-xl text-gray-700 dark:text-gray-300">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`relative transition-all duration-5 hover:text-blue-600 hover:scale-105 animate__animated animate__fadeInDown animate__faster animate__delay-${index + 1}s`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl ml-4"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl focus:outline-none text-gray-700 dark:text-gray-300"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white dark:bg-gray-900 transition-all duration-500 z-40 ${
          menuOpen
            ? "max-h-[300px] animate__animated animate__fadeInDown"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center px-4 pt-4 pb-6 space-y-4 text-lg text-gray-700 dark:text-gray-300">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`animate__animated animate__fadeInUp animate__faster animate__delay-${index + 1}s`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl mt-2"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
