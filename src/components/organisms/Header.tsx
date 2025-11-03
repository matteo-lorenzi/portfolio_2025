import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  // Gérer le scroll-lock quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMenuOpen]);

  // Fermer le menu lors du changement de route
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Gérer la fermeture avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">Matteo Lorenzi</span>
          </Link>
        </div>
        
        <nav 
          className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`}
          id="main-navigation"
          role="navigation"
          aria-label="Navigation principale"
        >
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
            tabIndex={isMenuOpen || window.innerWidth > 768 ? 0 : -1}
          >
            Accueil
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
            tabIndex={isMenuOpen || window.innerWidth > 768 ? 0 : -1}
          >
            À propos
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
            onClick={closeMenu}
            tabIndex={isMenuOpen || window.innerWidth > 768 ? 0 : -1}
          >
            Projets
          </Link>
          <Link
            to="/experience"
            className={`nav-link ${isActive('/experience') ? 'active' : ''}`}
            onClick={closeMenu}
            tabIndex={isMenuOpen || window.innerWidth > 768 ? 0 : -1}
          >
            Expérience
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
            tabIndex={isMenuOpen || window.innerWidth > 768 ? 0 : -1}
          >
            Contact
          </Link>
        </nav>

        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;