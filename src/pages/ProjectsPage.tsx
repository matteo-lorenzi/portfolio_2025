import React, { useState, useMemo, useEffect } from 'react';
import { projectsData, technologyThemes, getAllTags, type Project } from '../data/projectsData.ts';
import './ProjectsPage.scss';

const ProjectsPage: React.FC = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Gestionnaire pour fermer la modal avec Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProject) {
        closeProjectDetail();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (selectedProject && target.classList.contains('project-modal-overlay')) {
        closeProjectDetail();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

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

  // Ouverture du détail d'un projet
  const openProjectDetail = (project: Project) => {
    setSelectedProject(project);
  };

  // Fermeture du détail
  const closeProjectDetail = () => {
    setSelectedProject(null);
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
                  {project.imageUrl ? (
                    <img src={project.imageUrl} alt={project.title} />
                  ) : (
                    <div className="project-image-placeholder">
                      <span>{project.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="project-overlay">
                    <button 
                      className="view-details"
                      onClick={() => openProjectDetail(project)}
                    >
                      Voir les détails
                    </button>
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

      {/* Modal de détail du projet */}
      {selectedProject && (
        <div className="project-modal-overlay">
          <div className="project-modal">
            <button 
              className="close-modal" 
              onClick={closeProjectDetail}
              aria-label="Fermer la modal"
            >
              ×
            </button>
            
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedProject.imageUrl} alt={selectedProject.title} />
              </div>
              
              <div className="modal-info">
                <h2>{selectedProject.title}</h2>
                <p className="project-description">{selectedProject.long_description}</p>
                
                <div className="modal-tags">
                  <h4>Catégories</h4>
                  <div className="tags-list">
                    {selectedProject.tags.map((tag: string) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-technologies">
                  <h4>Technologies utilisées</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech: string) => (
                      <span key={tech} className="tech">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-actions">
                  {selectedProject.sourceCodeUrl && (
                    <a 
                      href={selectedProject.sourceCodeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Voir le code source
                    </a>
                  )}
                  {selectedProject.liveDemoUrl && (
                    <a 
                      href={selectedProject.liveDemoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Démo live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
