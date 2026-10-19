
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <p className="home-eyebrow">HELLO, I'M</p>

          <h1>
            Frontend
            <br />
            <span>Developer</span>
          </h1>

          <p className="home-description">
            I create responsive and interactive web experiences
            using modern frontend technologies.
          </p>

          <div className="home-actions">
            <a href="#projects" className="home-button">
              View My Projects
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="home-tech">
            <span className="tech-label">MY TOOLS</span>
            <div className="tech-list" aria-label="Technologies">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>React</span>
            </div>
          </div>
        </div>

        <div className="home-visual">
          <div className="portrait-shape"></div>
          <div className="portrait-ring"></div>

          <div className="portrait-frame">
            <img
              src="/images/profile.jpg"
              alt="Portrait of the portfolio owner"
              className="home-portrait"
            />
          </div>

          <div className="visual-note">
            <span>Build</span>
            <span>Better</span>
            <span>Web.</span>
          </div>

          <div className="visual-dots" aria-hidden="true"></div>

          <div className="visual-badge">
            <span className="status-dot"></span>
            Available for opportunities
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
