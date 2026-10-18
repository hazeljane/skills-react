const projects = [
  { number: "01", type: "WEB APPLICATION", title: "Admin Dashboard", description: "A dashboard interface with sidebar navigation, user management, statistics, and organized data tables.", tags: ["HTML", "CSS", "JavaScript"], style: "dashboard-preview" },
  { number: "02", type: "WEB DESIGN", title: "Personal Portfolio", description: "A personal website introducing my skills, background, services, and frontend development journey.", tags: ["HTML", "CSS", "Responsive UI"], style: "portfolio-preview" },
  { number: "03", type: "INTERACTIVE UI", title: "Interactive Card Layout", description: "An interactive card interface exploring CSS animations, transitions, responsive grids, and JavaScript interactions.", tags: ["HTML", "CSS Animation", "JavaScript"], style: "cards-preview" }
];

function Preview({ style }) {
  if (style === "dashboard-preview") {
    return <div className="project-preview dashboard-preview"><aside><b>✦</b><i /><i /><i /><i /></aside><div className="dash-mock"><div className="dash-top"><b>Dashboard</b><i /></div><div className="dash-stats"><i /><i /><i /></div><div className="dash-chart"><span /><span /><span /><span /><span /><span /><span /></div><div className="dash-lines"><i /><i /><i /></div></div></div>;
  }
  if (style === "portfolio-preview") {
    return <div className="project-preview portfolio-preview"><div className="portfolio-nav">PORTFOLIO <span>☰</span></div><div className="portfolio-hero"><small>HELLO, I'M</small><h4>Creative<br />Developer<span>.</span></h4><i /></div><div className="portfolio-shape" /></div>;
  }
  return <div className="project-preview cards-preview"><small>MY LEARNING JOURNEY</small><h4>Explore & Learn.</h4><div className="mini-cards">{["HTML", "CSS", "JavaScript"].map((x, i) => <div key={x}><small>0{i + 1}</small><b>{x}</b><i /><i /></div>)}</div></div>;
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="section-heading work-heading reveal"><div><span className="section-label">MY PORTFOLIO</span><h2>Selected Work<span className="accent">.</span></h2></div><p>A collection of projects I've built while learning frontend development and improving my design skills.</p></div>
      <div className="work-grid">
        {projects.map((project, i) => <article className={`work-card reveal delay-${i}`} key={project.number}>
          <Preview style={project.style} />
          <div className="work-card-body">
            <div className="project-meta"><span>{project.number} / {project.type}</span><span className="project-status">Practice</span></div>
            <h3>{project.title}</h3><p>{project.description}</p>
            <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <a className="project-link" href="#contact">Ask about this project <span>↗</span></a>
          </div>
        </article>)}
      </div>
    </section>
  );
}
