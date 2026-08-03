import React, { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#experience' },
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
      // The paper-inspired palette is the primary portfolio experience.
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
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
    <nav className={`site-nav ${isScrolled ? 'site-nav-scrolled' : ''}`}>
      <div className="navbar-container">
       <a className="navbar-brand" href="#hero" aria-label="Go to top">
        <span className="brand-mark" aria-hidden="true">B</span>
        <span className="navbar-subtitle"> My Portfolio</span>
       </a>
        {/* Desktop nav links */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-btn" aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
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
        <button onClick={toggleTheme} className="mobile-theme-btn" aria-label="Toggle theme">
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </nav>
  );
};
