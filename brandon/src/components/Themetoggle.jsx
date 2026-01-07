import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

export const Themetoggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {   
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []); 
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  
  return (
    <button onClick={toggleTheme}
    className={cn("z-50 p-2 rounded-full transition-colors duration-300"
    )}
    style={{ 
      position: 'fixed',
      top: '1.75rem',
      right: '1.75rem',
      left: 'auto'
    }}>
      {isDarkMode ? <Sun className="h-6 w-6" color="#FCD34D" /> : <Moon className="h-6 w-6" color="#93C5FD" />}
    </button>
  );
};