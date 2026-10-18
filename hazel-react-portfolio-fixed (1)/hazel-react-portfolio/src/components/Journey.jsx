const journey = [
  { number: "01", tag: "FOUNDATION", title: "HTML, CSS & JavaScript", tool: "Sublime Text", description: "Started with the fundamentals of web development: structuring pages with HTML, styling layouts with CSS, and adding interactivity with JavaScript.", skills: ["HTML", "CSS", "JavaScript"], status: "Current foundation", icon: "</>" },
  { number: "02", tag: "DEVELOPMENT WORKFLOW", title: "VS Code & Terminal", tool: "Visual Studio Code", description: "Moving to a more complete development environment with extensions, integrated terminal, debugging, project folders, and an organized coding workflow.", skills: ["VS Code", "Extensions", "Debugging"], status: "Next step", icon: ">_" },
  { number: "03", tag: "VERSION CONTROL", title: "Git, Git Bash & GitHub", tool: "Command-line workflow", description: "Learning terminal commands, tracking code changes, creating commits, managing branches, and publishing projects using Git and GitHub.", skills: ["Git", "Git Bash", "GitHub"], status: "Learning goal", icon: "⌘" },
  { number: "04", tag: "MODERN FRONTEND", title: "React", tool: "Component-based development", description: "Progressing toward reusable components, props, state, hooks, routing, and building interactive user interfaces with React.", skills: ["Components", "Props & State", "Hooks"], status: "Future goal", icon: "⚛" },
  { number: "05", tag: "FRONTEND FRAMEWORK", title: "Angular", tool: "Structured application development", description: "Exploring TypeScript, components, services, dependency injection, routing, and forms to build larger, maintainable web applications.", skills: ["TypeScript", "Services", "Routing"], status: "Future goal", icon: "A" }
];

export default function Journey() {
  return (
    <section id="journey" className="section journey-section">
      <div className="journey-container">
        <div className="journey-heading reveal"><span className="eyebrow">LEARNING • BUILDING • GROWING</span><h2>My Development <span>Journey</span></h2><p>From my first HTML page to modern frontend frameworks, I'm continuously improving my skills, tools, and workflow.</p></div>
        <div className="journey-timeline">
          {journey.map(item => <article className="journey-card reveal" key={item.number}>
            <div className="journey-number">{item.number}</div><div className="journey-icon">{item.icon}</div>
            <div className="journey-content"><span className="journey-tag">{item.tag}</span><h3>{item.title}</h3><p className="journey-tool">{item.tool}</p><p>{item.description}</p><div className="journey-skills">{item.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
            <span className="journey-status">{item.status}</span>
          </article>)}
        </div>
        <div className="journey-footer reveal"><span className="journey-footer-icon">✦</span><div><h3>The goal: become a well-rounded developer</h3><p>Keep practicing, build real projects, and improve one step at a time.</p></div></div>
      </div>
    </section>
  );
}
