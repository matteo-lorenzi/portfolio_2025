import React from 'react';
import './AboutPage.scss';
import { aboutData } from '../data/aboutData';

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
                Je suis <span className="highlight">{aboutData.personalInfo.name}</span>, étudiant en informatique 
                passionné par le <span className="highlight">développement web</span> et le{' '}
                <span className="highlight">design moderne</span>. J'aime créer des expériences 
                utilisateur innovantes et esthétiques qui combinent fonctionnalité et élégance visuelle.
              </p>
            </div>

            <div className="skills-section">
              <h3 className="skills-title">Compétences</h3>
              <div className="skills-grid">
                {aboutData.skillCategories.map((category, index) => (
                  <div key={index} className="skill-category">
                    <h4>{category.title}</h4>
                    <div className="skill-tags">
                      {category.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="journey-section">
              <h3 className="journey-title">Mon Parcours</h3>
              <div className="journey-timeline">
                {aboutData.timeline.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>{item.period}</h4>
                      <p>
                        {item.title} -{' '}
                        <a 
                          href={item.institutionUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="timeline-link"
                        >
                          {item.institution}
                        </a>
                      </p>
                      <span className="timeline-detail">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>{aboutData.personalInfo.initials}</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>{aboutData.personalInfo.name}</h3>
                <p>{aboutData.personalInfo.title}</p>
                <div className="profile-stats">
                  {aboutData.profileStats.map((stat, index) => (
                    <div key={index} className="stat">
                      <span className="stat-number">{stat.number}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="profile-actions">
                  <a 
                    href={aboutData.personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                    aria-label="Voir mon profil GitHub"
                  >
                    <span className="github-icon">📂</span>
                    <span>Voir mon GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="interests-card">
              <h4>Centres d'intérêt</h4>
              <div className="interests-list">
                {aboutData.interests.map((interest, index) => (
                  <div key={index} className="interest-item">
                    <span className="interest-icon">{interest.icon}</span>
                    <span>{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
