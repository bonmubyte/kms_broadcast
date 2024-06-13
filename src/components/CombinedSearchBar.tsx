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

  const functionNames = [
    "필수안내문고 검수",
    "금지어표현 탐색",
    "특정종목여부 점검",
  ];

  const selectedText = useTypingEffect(
    `귀하는 방송심의/대외활동 기능 중 ${
      functionNames[selectedFunction - 1]
    }를 선택하셨습니다. \n잘못 누르셨다면 뒤로가기 버튼을 눌러주세요.`,
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
            placeholder="심의가 필요한 파일이나 텍스트를 업로드하세요."
          />
          <button className="enter-button">
            <IoMdSend />
          </button>
        </div>
        {file && (
          <motion.div
            className="file-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p>Uploaded file: {file.name}</p>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default CombinedSearchBar;
