
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <p className="about-eyebrow">GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <p className="about-intro">
            Hi! I'm a frontend developer in progress who enjoys
            turning ideas into clean, responsive, and interactive
            web experiences.
          </p>

          <p className="about-description">
            I'm currently building my skills in HTML, CSS,
            JavaScript, and React. I enjoy exploring modern UI
            designs, solving coding challenges, and improving
            my projects one step at a time.
          </p>

          <p className="about-description">
            My goal is to become a well-rounded developer who can
            build complete web applications, from attractive
            interfaces to functional systems backed by databases.
          </p>

          <a href="#contact" className="about-button">
            Let's Connect <span aria-hidden="true">↗</span>
          </a>
        </div>

        <aside className="about-card">
          <div className="about-card-top">
            <div className="about-avatar" aria-hidden="true">
              H
            </div>

            <div>
              <h3>Frontend Developer</h3>
              <p>Learning, building, improving.</p>
            </div>
          </div>

          <div className="about-divider"></div>

          <h4>What I'm focused on</h4>

          <ul className="about-focus-list">
            <li>
              <span>01</span>
              Responsive web design
            </li>
            <li>
              <span>02</span>
              Interactive user interfaces
            </li>
            <li>
              <span>03</span>
              React component development
            </li>
            <li>
              <span>04</span>
              Full-stack development
            </li>
          </ul>

          <div className="about-card-footer">
            <span className="about-status-dot"></span>
            Always open to learning
          </div>
        </aside>
      </div>
    </section>
  );
}

export default About;
