import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import './ProjectDetailsPage.scss';

const ProjectDetailsPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === Number(projectId));

  if (!project) {
    return (
      <div className="project-details-page">
        <div className="project-container">
          <div className="error-state">
            <div className="error-icon">404</div>
            <h2>Projet non trouvé</h2>
            <p>Le projet que vous recherchez n'existe pas ou a été supprimé.</p>
            <button className="btn-back" onClick={() => navigate('/projects')}>
              ← Retour aux projets
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      <div className="project-container">
        <div className="project-header">
          <button className="btn-back" onClick={() => navigate('/projects')}>
            ← Retour aux projets
          </button>
          <div className="project-title-section">
            <span className="section-label">Projet</span>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-short-desc">{project.short_description}</p>
          </div>
        </div>

        <div className="project-content">
          <div className="project-main">
            <div className="project-overview">
              <h2>Aperçu du projet</h2>
              <p className="project-description">{project.long_description}</p>
            </div>

            <div className="project-technologies">
              <h3>Technologies utilisées</h3>
              <div className="tech-grid">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.tags && project.tags.length > 0 && (
              <div className="project-tags">
                <h3>Catégories</h3>
                <div className="tags-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-item">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="project-sidebar">
            <div className="project-actions">
              <h3>Liens du projet</h3>
              <div className="action-buttons">
                {project.sourceCodeUrl && (
                  <a 
                    href={project.sourceCodeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-action btn-source"
                  >                  <span className="btn-icon">📂</span>
                  Code Source
                    <span className="btn-external">↗</span>
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a 
                    href={project.liveDemoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-action btn-demo"
                  >
                  <span className="btn-icon">🚀</span>
                  Démo Live
                    <span className="btn-external">↗</span>
                  </a>
                )}
              </div>
            </div>

            <div className="project-images">
              <h3>Galerie</h3>
              {project.images && project.images.length > 0 ? (
                <div className="images-grid">
                  {project.images.map((image) => (
                    <div key={image} className="image-item">
                      <img src={image} alt={`${project.title} capture`} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="project-image-placeholder">
                  <div className="placeholder-content">
                    <span className="placeholder-icon">{project.title.charAt(0)}</span>
                    <p>Captures d'écran à venir</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
