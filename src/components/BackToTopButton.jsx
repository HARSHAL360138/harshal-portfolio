import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 z-[1] right-5 p-3 rounded-full bg-[#007BFF] text-white shadow-lg transition-all duration-300 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;
