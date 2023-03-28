import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      id="main"
      style={{
        backgroundColor: isDarkMode ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)",
        color: isDarkMode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
      }}
    >
      <h1>{isDarkMode ? "Dark Mode Activated" : "Light Mode Activated"}</h1>
      <button onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default App;
