
import { useEffect, useState } from "react";
import "./skillcard.css";

function Skillcard({ skill, active = true }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset progress before starting the animation.
    setProgress(0);

    if (!active) return;

    // Read and validate the skill level.
    const level = Math.min(
      100,
      Math.max(0, Number(skill.level) || 0)
    );

    // Start the progress-line animation.
    const timer = setTimeout(() => {
      setProgress(level);
    }, 100);

    return () => clearTimeout(timer);
  }, [active, skill.id, skill.level]);

  return (
    <article
      className={`skill-card ${active ? "active" : ""}`}
      aria-hidden={!active}
    >
      <span className="skill-card-number">
        {String(skill.id).padStart(2, "0")}
      </span>

      <h3 className="skill-card-title">
        {skill.title}
      </h3>

      <p className="skill-card-description">
        {skill.description}
      </p>

      <div className="skill-card-footer">
        <div className="skill-progress-info">
          <span className="skill-progress-label">
            Proficiency
          </span>

          <span className="skill-percentage">
            {progress}%
          </span>
        </div>

        <div
          className="skill-progress"
          role="progressbar"
          aria-label={`${skill.title} proficiency`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div
            className="skill-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </article>
  );
}

export default Skillcard;