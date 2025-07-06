import React from 'react';
import './ExperiencePage.scss'; // Garde les styles existants
import { experienceData } from '../data/experienceData';

const ExperiencePage: React.FC = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <span className="section-label">Parcours</span>
        <h2 className="experience-title">Mon Expérience</h2>
        <p className="experience-subtitle">
          Découvrez mon parcours professionnel et mes compétences acquises.
        </p>

        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p className="timeline-duration">{item.duration}</p>
                <p className="timeline-description">{item.description}</p>
                {item.technologies && item.technologies.length > 0 && (
                  <div className="timeline-technologies">
                    {item.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
