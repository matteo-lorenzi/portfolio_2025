import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projectsData, technologyThemes, getAllTags, type Project } from '../data/projectsData.ts';
import './ProjectsPage.scss';

const ProjectsPage: React.FC = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filtrage des projets
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project: Project) => {
      const techMatch = selectedTechnologies.length === 0 || 
        selectedTechnologies.some(tech => project.technologies.includes(tech));
      const tagMatch = selectedTags.length === 0 || 
        selectedTags.some(tag => project.tags.includes(tag));
      return techMatch && tagMatch;
    });
  }, [selectedTechnologies, selectedTags]);

  // Gestion des filtres de technologies
  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  // Gestion des filtres de tags
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Reset des filtres
  const clearFilters = () => {
    setSelectedTechnologies([]);
    setSelectedTags([]);
  };

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div className="projects-title">
          <h1>Mes Projets</h1>
          <p>Découvrez mes réalisations et expérimentations techniques</p>
        </div>
        
        <div className="projects-controls">
          <div className="view-mode">
            <button 
              className={viewMode === 'grid' ? 'active' : ''}
              onClick={() => setViewMode('grid')}
            >
              <i className="icon-grid"></i>
            </button>
            <button 
              className={viewMode === 'list' ? 'active' : ''}
              onClick={() => setViewMode('list')}
            >
              <i className="icon-list"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="projects-content">
        <aside className="filters-sidebar">
          <div className="filters-section">
            <div className="filter-header">
              <h3>Filtres</h3>
              {(selectedTechnologies.length > 0 || selectedTags.length > 0) && (
                <button className="clear-filters" onClick={clearFilters}>
                  Effacer
                </button>
              )}
            </div>

            {/* Filtres par technologies (groupées par thème) */}
            <div className="filter-group">
              <h4>Technologies</h4>
              {Object.entries(technologyThemes).map(([theme, techs]) => (
                <div key={theme} className="tech-theme">
                  <h5>{theme}</h5>
                  <div className="filter-options">
                    {(techs as string[]).map((tech: string) => (
                      <button
                        key={tech}
                        className={`filter-btn ${selectedTechnologies.includes(tech) ? 'active' : ''}`}
                        onClick={() => toggleTechnology(tech)}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Filtres par tags */}
            <div className="filter-group">
              <h4>Catégories</h4>
              <div className="filter-options">
                {getAllTags().map((tag: string) => (
                  <button
                    key={tag}
                    className={`filter-btn ${selectedTags.includes(tag) ? 'active' : ''}`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="results-count">
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
            </div>
          </div>
        </aside>

        <main className="projects-main">
          <div className={`projects-grid ${viewMode}`}>
            {filteredProjects.map((project: Project) => (
              <article key={project.id} className="project-card">
                <div className="project-image">
                  {project.images && project.images.length > 0 ? (
                    <img src={project.images[0]} alt={project.title} />
                  ) : (
                    <div className="project-image-placeholder">
                      <span>{project.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="project-overlay">
                    <Link 
                      to={`/projects/${project.id}`}
                      className="view-details"
                    >
                      Voir les détails
                    </Link>
                  </div>
                </div>
                
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.short_description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech: string) => (
                      <span key={tech} className="tech">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-actions">
                    {project.sourceCodeUrl && (
                      <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
                        Code source
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                        Démo live
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="no-results">
              <h3>Aucun projet trouvé</h3>
              <p>Essayez de modifier vos filtres pour voir plus de projets.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage;
