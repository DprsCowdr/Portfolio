import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {   
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Default to dark mode
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
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
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        isScrolled ? 'py-2 bg-background/80 backdrop-blur-md shadow-xs' : 'py-4'
      )}
    >
      <div className="navbar-container">
       <a className="flex items-center">
        <span className="relative z-10"> 
          <span className="text-glow navbar-title">Brandon Caritos</span>
          <span className="navbar-subtitle"> Portfolio</span>
        </span>
       </a>
        {/* Desktop nav links */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? <Sun className="h-5 w-5" color="#FCD34D" /> : <Moon className="h-5 w-5" color="#93C5FD" />}
          </button>
        </div>
        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-btn">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn('mobile-menu', isMenuOpen ? 'mobile-menu-open' : '')}>
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <button onClick={toggleTheme} className="mobile-theme-btn">
          {isDarkMode ? <Sun className="h-5 w-5" color="#FCD34D" /> : <Moon className="h-5 w-5" color="#93C5FD" />}
        </button>
      </div>
    </nav>
  );
};
