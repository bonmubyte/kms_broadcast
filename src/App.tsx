import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FunctionButtons from "./components/FunctionButtons";
import CombinedSearchBar from "./components/CombinedSearchBar";
import ChatHistory from "./components/ChatHistory";

const App: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState<number | null>(null);
  const [showHistory, setShowHistory] = useState(true);

  const handleFunctionClick = (func: number) => {
    setSelectedFunction(func);
    setShowChat(true);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="App">
      <header className="App-header">
        <a href="/">
          <img src="/logo.png" alt="Logo" className="App-logo" />
        </a>
        {!showChat ? (
          <>
            <Header showContent={!showChat} />
            <FunctionButtons handleFunctionClick={handleFunctionClick} />
          </>
        ) : (
          <>
            <Header showContent={false} />
            {selectedFunction !== null && (
              <CombinedSearchBar selectedFunction={selectedFunction} />
            )}
          </>
        )}
        <ChatHistory showHistory={showHistory} toggleHistory={toggleHistory} />
      </header>
    </div>
  );
};

export default App;
