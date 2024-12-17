import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='main-navbar-container'>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/assets/images/logo.jpg" alt="Logo" />
          </Link>
          <Link to="/">
            <p>CRYPTOXNFT</p>
          </Link>
        </div>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu}>HOME</Link>
          </li>
          <li className="dropdown">
            <Link to="/services" onClick={closeMenu}>SERVICES</Link>
          </li>
          <li>
            <Link to="/results" onClick={closeMenu}>RESULTS</Link> {/* Added Results Link */}
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
          </li>
          <li>
            <Link to="/faq" onClick={closeMenu}>FAQ</Link>
          </li>
        </ul>
        <div className={`close-menu ${isOpen ? 'show' : ''}`} onClick={closeMenu}>
          &times;
        </div>
        <div className="telegram-button">
          <a href="https://t.me/cryptoxnfts" target="_blank" rel="noopener noreferrer">
            <button>TELEGRAM<img src="/assets/icons/tgWhite.png" alt="Telegram Icon" /></button>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;