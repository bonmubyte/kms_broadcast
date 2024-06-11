import React from "react";
import { motion } from "framer-motion";
import useTypingEffect from "../hooks/useTypingEffect";
import "./Header.css";

interface HeaderProps {
  showContent: boolean;
}

const Header: React.FC<HeaderProps> = ({ showContent }) => {
  const introText1 = "안녕하세요. 방송심의/대외활동 검수 챗봇입니다.";
  const introText2 = "아래 3가지 기능 중 어떤 기능이 필요하신가요?";

  const typedText1 = useTypingEffect(introText1, 50);
  const typedText2 = useTypingEffect(introText2, 50);

  return (
    <div className="App-title-container">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="App-title"
      >
        방송심의/대외활동 검수 챗봇
      </motion.h1>
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="App-intro"
        >
          <div>{typedText1}</div>
          <div>{typedText2}</div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
