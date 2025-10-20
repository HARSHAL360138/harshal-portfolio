// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

// function Contact() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section id="contact" className="w-full py-20 px-4 md:px-16 bg-white dark:bg-gray-900">
//       <div className="text-center mb-10" data-aos="fade-down">
//         <p className="text-gray-500 dark:text-gray-400 text-sm">Get in Touch</p>
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
//       </div>

//       <div
//         className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between border border-gray-300 dark:border-gray-600 rounded-2xl px-6 py-5 gap-6 bg-white dark:bg-gray-800 shadow-lg"
//         data-aos="zoom-in"
//       >
//         <div className="flex items-center gap-3 text-gray-800 dark:text-gray-100">
//           <FaEnvelope className="text-xl" />
//           <span className="text-base md:text-lg">20013himanshu@gmail.com</span>
//         </div>
//         <a
//           href="https://linkedin.com" // <-- Replace with your actual LinkedIn
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-3 text-gray-800 dark:text-gray-100 hover:text-blue-600 transition"
//         >
//           <FaLinkedin className="text-xl" />
//           <span className="text-base md:text-lg">LinkedIn</span>
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Contact;






import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="w-full py-20 px-4 md:px-16 bg-white dark:bg-gray-900">
      <div className="text-center mb-10" data-aos="fade-down">
        <p className="text-gray-500 dark:text-gray-400 text-sm">Get in Touch</p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
      </div>

      <div
        className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between border border-gray-300 dark:border-gray-600 rounded-2xl px-6 py-5 gap-6 bg-white dark:bg-gray-800 shadow-lg"
        data-aos="zoom-in"
      >
        <div className="flex items-center gap-3 text-gray-800 dark:text-gray-100">
          <FaEnvelope className="text-xl" />
          <span className="text-base md:text-lg">harshalkhapekar41@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-800 dark:text-gray-100">
          <FaPhone className="text-xl" />
          <span className="text-base md:text-lg">+91 8669027241</span>
        </div>
        <a
          href="https://www.linkedin.com/in/harshal-khapekar-99418225b/" // <-- Replace with your actual LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-800 dark:text-gray-100 hover:text-blue-600 transition"
        >
          <FaLinkedin className="text-xl" />
          <span className="text-base md:text-lg">LinkedIn</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
