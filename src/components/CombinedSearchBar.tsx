import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import useTypingEffect from "../hooks/useTypingEffect";
import "./CombinedSearchBar.css";
import { FaPaperclip } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

interface CombinedSearchBarProps {
  selectedFunction: number;
}

const CombinedSearchBar: React.FC<CombinedSearchBarProps> = ({
  selectedFunction,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => setFile(acceptedFiles[0]),
  });

  const selectedText = useTypingEffect(
    `You selected functionality ${selectedFunction}. We will guide you.`,
    50
  );

  return (
    <>
      <motion.div
        className="selected-function-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {selectedText}
      </motion.div>
      <motion.div
        className="search-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="search-bar-inner">
          <div {...getRootProps({ className: "file-input" })}>
            <input {...getInputProps()} />
            <FaPaperclip />
          </div>
          <input
            type="text"
            className="text-input"
            placeholder="메시지 | ChatGPT"
          />
          <button className="enter-button">
            <IoMdSend />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default CombinedSearchBar;
