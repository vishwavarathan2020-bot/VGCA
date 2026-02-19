import { useEffect, useState } from "react";


const BlurText = ({
  text = "",
  delay = 200,
  animateBy = "words", // "words" | "letters"
  direction = "top",   // "top" | "bottom" | "left" | "right"
  onAnimationComplete,
  className = "",
}) => {
  const items =
    animateBy === "letters" ? text.split("") : text.split(" ");

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!text) return;

    let index = 0;
    const interval = setInterval(() => {
      index++;
      setVisibleCount(index);

      if (index >= items.length) {
        clearInterval(interval);
        if (onAnimationComplete) onAnimationComplete();
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay, items.length, onAnimationComplete]);

  const getInitialTransform = () => {
    switch (direction) {
      case "top":
        return "translateY(-20px)";
      case "bottom":
        return "translateY(20px)";
      case "left":
        return "translateX(-20px)";
      case "right":
        return "translateX(20px)";
      default:
        return "translateY(-20px)";
    }
  };

  return (
    <div className={`flex flex-wrap ${className}`}>
      {items.map((item, index) => {
        const isVisible = index < visibleCount;

        return (
          <span
            key={index}
            style={{
              marginRight: animateBy === "words" ? "8px" : "0px",
              opacity: isVisible ? 1 : 0,
              filter: isVisible ? "blur(0px)" : "blur(10px)",
              transform: isVisible ? "translate(0,0)" : getInitialTransform(),
              transition: "all 0.6s ease",
              display: "inline-block",
              whiteSpace: "pre",
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default BlurText;
