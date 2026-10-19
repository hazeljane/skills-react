import "./Project.css";
import projects from "../data/projects";

function Projects() {
  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <p>No projects available yet.</p>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <header className="projects-heading">
          <p className="projects-eyebrow">
            A SELECTION OF MY WORK
          </p>

          <h2>
            My <span>Projects</span>
          </h2>

          <p className="projects-intro">
            A collection of projects where I practice,
            experiment, and grow as a developer.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <section className="project-card" key={project.id}>
              <div className="project-card-top">
                <span className="project-number">
                  {String(project.id).padStart(2, "0")}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-preview">
                <div className="preview-window">
                  <div className="preview-toolbar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="preview-content">
                    <div className="preview-sidebar">
                      <div className="preview-logo"></div>
                      <div className="preview-menu active"></div>
                      <div className="preview-menu"></div>
                      <div className="preview-menu"></div>
                    </div>

                    <div className="preview-main">
                      <div className="preview-heading"></div>

                      <div className="preview-stats">
  {[1, 2, 3].map((item) => (
    <div className="preview-stat" key={item}>
      <span></span>
      <strong></strong>
    </div>
  ))}
</div>
                      <div className="preview-panel">
  <div className="preview-panel-heading"></div>
  <div className="preview-line"></div>
  <div className="preview-line medium"></div>
  <div className="preview-line short"></div>
</div>
                    </div>
                  </div>
                </div>

                <span className="preview-label">
                  {project.title}
                </span>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span className="project-tech" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      className="project-link project-link-primary"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      className="project-link project-link-secondary"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo <span aria-hidden="true">↗</span>
                    </a>
                  )}

                  {!project.github && !project.demo && (
                    <span className="project-coming-soon">
                      Links coming soon
                    </span>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;