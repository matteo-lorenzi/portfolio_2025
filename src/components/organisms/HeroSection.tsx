import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.scss';

const HeroSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Matteo Lorenzi';
  const navigate = useNavigate();
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="hero-section">
      <div className="hero-terminal">
        <div className="terminal-header">
          <div className="terminal-controls">
            <span className="control close"></span>
            <span className="control minimize"></span>
            <span className="control maximize"></span>
          </div>
          <div className="terminal-title">portfolio.tsx</div>
        </div>
        <div className="terminal-body">
          <div className="hero-content">
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">whoami</span>
            </div>
            <div className="terminal-output">
              <h1 className="hero-title">
                <span className="hero-greeting">Bonjour, je suis</span>
                <br />
                <span className="hero-name">
                  {displayedText}
                  <span className="cursor">|</span>
                </span>
              </h1>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">cat about.txt</span>
            </div>
            <div className="terminal-output">
              <p className="hero-description">
                Étudiant en 3ème année d'informatique, passionné par le design et l'innovation.
                <br />
                Créateur d'expériences numériques modernes et accessibles.
              </p>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command animate-command">npm run portfolio</span>
            </div>
            <div className="hero-actions">
              <button className="btn-primary" onClick={handleProjectsClick}>
                Voir mes projets
              </button>
              <button className="btn-secondary" onClick={handleContactClick}>
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="code-snippet">
          <div className="code-line">
            <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">name</span>: <span className="string">'Matteo'</span>,
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'TypeScript'</span>],
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">passion</span>: <span className="string">'Innovation'</span>
          </div>
          <div className="code-line">
            {'}'};
          </div>
        </div>
        <div className="floating-elements">
          <div className="floating-element">{'{ }'}</div>
          <div className="floating-element">{'< />'}</div>
          <div className="floating-element">{'[ ]'}</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
