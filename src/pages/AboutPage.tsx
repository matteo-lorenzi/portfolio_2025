import React from 'react';
import './AboutPage.scss';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <div className="section-label">Découvrez</div>
          <h1 className="about-title">À propos de moi</h1>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-text">
              <p className="about-description">
                Je suis <span className="highlight">Matteo Lorenzi</span>, étudiant en informatique 
                passionné par le <span className="highlight">développement web</span> et le{' '}
                <span className="highlight">design moderne</span>. J'aime créer des expériences 
                utilisateur innovantes et esthétiques qui combinent fonctionnalité et élégance visuelle.
              </p>
            </div>

            <div className="skills-section">
              <h3 className="skills-title">Compétences</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">HTML</span>
                    <span className="skill-tag">CSS</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">SCSS</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">PHP</span>
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">SQL</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Design & Outils</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Figma</span>
                    <span className="skill-tag">UI/UX</span>
                    <span className="skill-tag">Git/GitHub</span>
                    <span className="skill-tag">VS Code</span>
                    <span className="skill-tag">Vite</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="journey-section">
              <h3 className="journey-title">Mon Parcours</h3>
              <div className="journey-timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2025 - 2027</h4>
                    <p>
                      Master UX et Web Éditorial -{' '}
                      <a 
                        href="https://www.univ-poitiers.fr/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="timeline-link"
                      >
                        Poitiers
                      </a>
                    </p>
                    <span className="timeline-detail">Projet de poursuite d'études en expérience utilisateur</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2024 - 2025</h4>
                    <p>
                      3ème année -{' '}
                      <a 
                        href="https://iut2.univ-grenoble-alpes.fr/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="timeline-link"
                      >
                        IUT2 Grenoble
                      </a>
                    </p>
                    <span className="timeline-detail">Parcours A : Réalisation d'applications Web</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2023 - 2024</h4>
                    <p>
                      2ème année -{' '}
                      <a 
                        href="https://iut2.univ-grenoble-alpes.fr/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="timeline-link"
                      >
                        IUT2 Grenoble
                      </a>
                    </p>
                    <span className="timeline-detail">Parcours A : Réalisation d'applications Web</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2022 - 2023</h4>
                    <p>
                      1ère année -{' '}
                      <a 
                        href="https://iut2.univ-grenoble-alpes.fr/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="timeline-link"
                      >
                        IUT2 Grenoble
                      </a>
                    </p>
                    <span className="timeline-detail">Formation générale en informatique</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>ML</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Matteo Lorenzi</h3>
                <p>Étudiant Développeur</p>
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Années d'études</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Projets réalisés</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="interests-card">
              <h4>Centres d'intérêt</h4>
              <div className="interests-list">
                <div className="interest-item">
                  <span className="interest-icon">💻</span>
                  <span>Nouvelles technologies</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🎨</span>
                  <span>Design graphique</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🚀</span>
                  <span>Innovation</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">📱</span>
                  <span>Applications mobiles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
