import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <p className="footer-text">
              © {currentYear} Matteo Lorenzi. Créé avec{' '}
              <span className="tech-highlight">React</span>,{' '}
              <span className="tech-highlight">TypeScript</span>{' '}&{' '}
              <span className="tech-highlight">SCSS</span>
            </p>
            <p className="footer-motto">
              "Code is poetry, design is art, innovation is the future."
            </p>
          </div>
          
          <div className="footer-links">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:contact@matteo.dev" 
              className="footer-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
