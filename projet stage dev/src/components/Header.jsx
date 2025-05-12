import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="container header-container">
        <div className="logo">
          <a href="#accueil" aria-label="Accueil Union des Affaires">
            <img src={logo} alt="Logo Union des Affaires" height={60} />
          </a>
        </div>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#accueil" className="active">Accueil</a></li>
            <li><a href="#coworking">Coworking</a></li>
            <li><a href="#centre-appel">Centre d'Appel</a></li>
            <li><a href="#import-export">Import/Export</a></li>
            <li><a href="#contact" className="cta-link">Contact</a></li>
          </ul>
        </nav>
        <button className="mobile-menu-toggle" aria-label="Menu mobile" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 