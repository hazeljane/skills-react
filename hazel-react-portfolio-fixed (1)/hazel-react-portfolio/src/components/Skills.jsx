const skills = [
  { icon: "</>", title: "HTML5", subtitle: "Web Page Structure", level: 85 },
  { icon: "#", title: "CSS3", subtitle: "Styling & Layout", level: 80 },
  { icon: "JS", title: "JavaScript", subtitle: "Interactive Features", level: 45 },
  { icon: "RWD", title: "Responsive Design", subtitle: "Mobile-Friendly Layouts", level: 70 }
];

export default function Skills() {
  return (
    <section id="skills" className="section section-light">
      <div className="section-heading reveal"><span className="section-label">WHAT I'M LEARNING</span><h2>My Skills<span className="accent">.</span></h2><p className="section-intro">The technologies and skills I'm developing to create modern, responsive, and user-friendly websites.</p></div>
      <div className="skills-grid">
        {skills.map((skill, i) => <article className={`skill-card reveal delay-${i}`} key={skill.title}>
          <div className="skill-heading"><span className="skill-icon">{skill.icon}</span><div><h3>{skill.title}</h3><p>{skill.subtitle}</p></div></div>
          <div className="skill-track" role="progressbar" aria-label={`${skill.title} skill level`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={skill.level}><span className="skill-progress" style={{ "--level": `${skill.level}%` }} /></div>
          <p className="skill-level">{skill.level}%</p>
        </article>)}
      </div>
      <p className="honest-note">Skill levels are self-assessments and will grow as I build more projects.</p>
    </section>
  );
}
