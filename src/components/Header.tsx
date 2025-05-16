import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className={`h-6 w-6 ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white dark:text-gray-200'}`} />
            <span className={`font-semibold text-lg ${isScrolled ? 'text-gray-800 dark:text-white' : 'text-white dark:text-white'}`}>
              Aperture
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-8">
              {['Home', 'Gallery', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className={`font-medium transition-colors duration-200 hover:text-gray-500 dark:hover:text-gray-400 ${
                      isScrolled ? 'text-gray-800 dark:text-white' : 'text-white dark:text-white'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button 
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800' 
                      : 'text-white dark:text-white hover:bg-white/10 dark:hover:bg-black/10'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800' 
                  : 'text-white dark:text-white hover:bg-white/10 dark:hover:bg-black/10'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-800 dark:text-white' : 'text-white dark:text-white'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 animate-fadeIn">
          <nav className="container mx-auto px-4">
            <ul className="space-y-4">
              {['Home', 'Gallery', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-800 dark:text-white font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;