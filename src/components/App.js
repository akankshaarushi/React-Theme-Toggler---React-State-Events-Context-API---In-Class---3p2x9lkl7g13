import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {

const [isDarkMode, setIsDarkMode] = useState(false);

const handleModeToggle = () => {
setIsDarkMode(!isDarkMode);
};

const mainStyle = {
backgroundColor: isDarkMode ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
color: isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
padding: '20px'
};

const h1Text = isDarkMode ? 'Dark Mode Activated' : 'Light Mode Activated';

const buttonText = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';

return (
<div id="main" style={mainStyle}>
<h1>{h1Text}</h1>
<button onClick={handleModeToggle}>{buttonText}</button>
</div>
);


export default App;
