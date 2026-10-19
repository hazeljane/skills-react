
import { useState } from "react";
import Skillcard from "../components/Skillcard";
import skills from "../data/skills";
import "./Skills.css";

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (skills.length === 0) {
    return (
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <h2>My Skills</h2>
          <p>No skills available yet.</p>
        </div>
      </section>
    );
  }

  const currentSkill = skills[currentIndex];

  function previous() {
    setCurrentIndex(
      (index) => (index - 1 + skills.length) % skills.length
    );
  }

  function next() {
    setCurrentIndex(
      (index) => (index + 1) % skills.length
    );
  }

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <header className="skills-heading">
          <p className="skills-eyebrow">WHAT I CAN DO</p>
          <h2>
            My <span>Skills</span>
          </h2>
          <p className="skills-intro">
            Technologies and tools I'm learning as I grow
            as a frontend developer, one project at a time.
          </p>
        </header>

        <div className="skills-carousel" aria-live="polite">
          <Skillcard
            key={currentSkill.id}
            skill={currentSkill}
            active
          />
        </div>

        <div className="skills-controls">
          <button
            type="button"
            className="skills-arrow"
            onClick={previous}
            aria-label="Previous skill"
          >
            ←
          </button>

          <span className="skills-counter">
            {String(currentIndex + 1).padStart(2, "0")}
            {" / "}
            {String(skills.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            className="skills-arrow"
            onClick={next}
            aria-label="Next skill"
          >
            →
          </button>
        </div>

        <p className="skills-note">
          <span aria-hidden="true">✦</span>
          Always learning. Always building.
        </p>
      </div>
    </section>
  );
}

export default Skills;
