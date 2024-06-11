import React, { useEffect } from "react";
import "./ChatHistory.css";

interface ChatHistoryProps {
  showHistory: boolean;
  toggleHistory: () => void;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({
  showHistory,
  toggleHistory,
}) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        if (showHistory) {
          toggleHistory();
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showHistory, toggleHistory]);

  return (
    <>
      <div className={`chat-history-container ${showHistory ? "" : "closed"}`}>
        <div className="chat-history-header">
          <span className="chat-history-title">채팅 기록</span>
          <button className="chat-history-toggle" onClick={toggleHistory}>
            {showHistory ? "닫기" : "열기"}
          </button>
        </div>
        <div className="chat-history-content">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="chat-history-item">
              채팅기록 {i + 1}
            </div>
          ))}
        </div>
      </div>
      {!showHistory && (
        <div className="chat-history-toggle-container" onClick={toggleHistory}>
          <span>열기</span>
        </div>
      )}
    </>
  );
};

export default ChatHistory;
