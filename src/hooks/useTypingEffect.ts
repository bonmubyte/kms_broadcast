import { useState, useEffect } from "react";

const useTypingEffect = (text: string, speed: number = 50): string => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i === text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => {
      setDisplayedText("");
      clearInterval(timer);
    };
  }, [text, speed]);

  return displayedText;
};

export default useTypingEffect;
