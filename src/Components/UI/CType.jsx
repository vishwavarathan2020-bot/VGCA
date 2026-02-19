import React, { useState, useEffect } from "react";

const TextType = ({
  text = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  cursorBlinkDuration = 0.5,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = text[textIndex];
    let timeout;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % text.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, text, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="relative">
      {displayText}
      {showCursor && (
        <span
          style={{
            marginLeft: "5px",
            animation: `blink ${cursorBlinkDuration}s infinite`,
          }}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;
