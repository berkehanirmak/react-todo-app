import { useState } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import './App.css';
import { FaLightbulb } from "react-icons/fa";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <div className="app-container">
        <div className="toggle-switch">
          <input 
            type="checkbox" 
            id="toggle" 
            checked={!isDarkTheme} 
            onChange={toggleTheme} 
          />
          <label htmlFor="toggle">
            <div className="circle">
            <FaLightbulb/>
            </div>
            <span className="background"></span>
          </label>
        </div>
        <TodoCreate />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
