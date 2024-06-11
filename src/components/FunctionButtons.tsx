import React from "react";
import { motion } from "framer-motion";
import "./FunctionButtons.css";

interface FunctionButtonsProps {
  handleFunctionClick: (func: number) => void;
}

const FunctionButtons: React.FC<FunctionButtonsProps> = ({
  handleFunctionClick,
}) => {
  return (
    <motion.div
      className="function-buttons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <button onClick={() => handleFunctionClick(1)}>필수안내문구 검수</button>
      <button onClick={() => handleFunctionClick(2)}>금지어표현 탐색</button>
      <button onClick={() => handleFunctionClick(3)}>특정종목여부 점검</button>
    </motion.div>
  );
};

export default FunctionButtons;
