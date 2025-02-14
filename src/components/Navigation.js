// Navigation.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assests/styling/Navigation.css';

const Navigation = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const location = useLocation(); // React Router's useLocation hook

  const handleToggle = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };


  const handleNavItemClick = () => {
    // Close the menu when a nav-item is clicked
    if (window.innerWidth < 600) {
      setHamburgerOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600 && isHamburgerOpen) {
        setHamburgerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isHamburgerOpen]);

  return (
    <nav className={`navbar ${isHamburgerOpen ? 'active' : ''}`}>
      <div className="menu-toggle" onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className='nav-list-container'>
      <ul className={`nav-list ${isHamburgerOpen ? 'active' : ''}`}>
        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/" onClick={handleNavItemClick}>
            Home
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
          <Link to="/about" onClick={handleNavItemClick}>
            About
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/skills' ? 'active' : ''}`}>
          <Link to="/skills" onClick={handleNavItemClick}>
            Skills
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`}>
          <Link to="/projects" onClick={handleNavItemClick}>
            Projects
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
          <Link to="/contact" onClick={handleNavItemClick}>
            Contact
          </Link>
        </li>
      </ul>

      </div>
          </nav>
  );
};

export default Navigation;
