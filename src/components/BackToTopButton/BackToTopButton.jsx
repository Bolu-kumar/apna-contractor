import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa"; // Importing the Font Awesome icon
import "./BackToTopButton.css";
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling and toggle visibility of the button
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Effect to add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <a href="#" className="back-to-top mb-5" onClick={scrollToTop}>
          <FaChevronUp
            className="fa fa-chevron-up"
            style={{ color: "#FFFFFF", marginTop: "10px" }}
          />
        </a>
      )}
    </>
  );
};

export default BackToTopButton;
