export default function Partnership() {
  return (
    <section id="partnership" className="section partnership-section">
      <div className="partnership-container">
        <div className="partnership-content reveal-left">
          <span className="section-label">LET'S BUILD SOMETHING TOGETHER</span>
          <h2>Looking for a <span>Frontend Partner?</span></h2>
          <p className="partnership-description">I'm a junior frontend developer looking to collaborate with full-stack developers on meaningful web projects. I can contribute to responsive interfaces, UI design, and frontend development while learning from experienced developers along the way.</p>
          <div className="partnership-tags"><span>Frontend Development</span><span>UI Implementation</span><span>Team Collaboration</span></div>
          <a href="#contact" className="btn btn-primary">Let's Collaborate <span>↗</span></a>
          <p className="partnership-note">Open to learning, teamwork, and exciting project ideas.</p>
        </div>
        <div className="partnership-visual reveal-right">
          <div className="collab-card"><span className="collab-icon">&lt;/&gt;</span><div><small>YOUR ROLE</small><h3>Frontend</h3><p>UI · Responsive Design</p></div></div>
          <div className="collab-plus">+</div>
          <div className="collab-card backend"><span className="collab-icon">{ }</span><div><small>YOUR PARTNER</small><h3>Full Stack</h3><p>Backend · Database · APIs</p></div></div>
          <div className="collab-result"><span>✦</span><div><strong>One team. One project.</strong><p>Building better web experiences together.</p></div></div>
        </div>
      </div>
    </section>
  );
}
