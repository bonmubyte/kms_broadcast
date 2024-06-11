import React from "react";
import "./ChatHistory.css";

interface ChatHistoryProps {
  showHistory: boolean;
  toggleHistory: () => void;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({
  showHistory,
  toggleHistory,
}) => {
  return (
    <div className={`chat-history ${showHistory ? "" : "hidden"}`}>
      <button className="toggle-history" onClick={toggleHistory}>
        {showHistory ? "닫기" : "열기"}
      </button>
      {showHistory && (
        <>
          <h2>채팅 기록</h2>
          <ul>
            {[...Array(10)].map((_, i) => (
              <li key={i}>기능 {i + 1}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ChatHistory;
