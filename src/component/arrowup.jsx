import React, { useState, useEffect } from "react";
import { TbArrowBigUpLineFilled } from "react-icons/tb";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 p-3 rounded-full bg-neutral-50 text-custom-blue shadow-lg hover:scale-105 transition duration-300"
        >
          <TbArrowBigUpLineFilled className="w-[21px] h-[21px]" />
        </button>
      )}
    </>
  );
}
