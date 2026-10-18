const stack = [["5", "HTML5"], ["3", "CSS3"], ["JS", "JavaScript"]];

export default function Home() {
  return (
    <section id="home" className="section home-section">
      <div className="home-container">
        <div className="home-content reveal-left">
          <span className="eyebrow">HELLO, I'M</span>
          <h1>Hazel Jane<span className="accent">.</span></h1>
          <span className="role-badge">Junior Frontend Developer</span>
          <p className="home-description">
            I build beautiful, responsive, and user-friendly websites with HTML, CSS, and JavaScript.
            Turning ideas into interactive digital experiences is what I'm working toward.
          </p>
          <div className="home-buttons">
            <a href="#work" className="btn btn-primary">View My Work <span>→</span></a>
            <a href="#contact" className="btn btn-outline">Contact Me <span>✉</span></a>
          </div>
          <div className="tech-stack">
            {stack.map(([icon, label], i) => (
              <div className="tech-item-wrap" key={label}>
                {i > 0 && <span className="tech-divider" />}
                <div className="tech-item"><span className="tech-icon">{icon}</span><span>{label}</span></div>
              </div>
            ))}
          </div>
        </div>

        <div className="home-visual reveal-right" aria-label="Decorative website mockup">
          <div className="visual-circle" />
          <div className="visual-dot dot-one" />
          <div className="visual-dot dot-two" />
          <div className="browser-card browser-back">
            <div className="browser-top"><i /><i /><i /></div>
            <div className="browser-placeholder">
              <div className="placeholder-circle" /><div className="placeholder-line" />
              <div className="placeholder-line short" /><div className="placeholder-art" />
            </div>
          </div>
          <div className="browser-card browser-front">
            <div className="browser-top"><i /><i /><i /></div>
            <div className="browser-body">
              <span className="browser-label">MY PORTFOLIO</span>
              <h2>Build<br />Something<br /><span>Great.</span></h2>
              <div className="mockup-art"><div className="art-sun" /><div className="art-wave" /></div>
              <div className="mockup-features"><div>&lt;/&gt;</div><div>▣</div><div>✦</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
