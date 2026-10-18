const cards = [
  { label: "MY JOURNEY", title: "Learning", description: "I'm continuously improving my coding skills by building projects and learning modern web development practices.", icon: "↗" },
  { label: "MY SKILLS", title: "Frontend", description: "I practice HTML for structure, CSS for styling, and JavaScript for interactivity and dynamic website features.", icon: "</>" },
  { label: "MY GOAL", title: "Growing", description: "My goal is to become a skilled developer who can create complete web applications with responsive interfaces and functional features.", icon: "✦" }
];

export default function About() {
  return (
    <section id="about" className="section section-light">
      <div className="section-heading reveal"><span className="section-label">A LITTLE ABOUT ME</span><h2>Curious by nature. <span className="accent">Developer in progress.</span></h2></div>
      <div className="about-grid">
        {cards.map((card, i) => (
          <article className={`about-card reveal delay-${i}`} key={card.title}>
            <div className="about-card-top"><span className="about-icon">{card.icon}</span><span className="card-index">0{i + 1}</span></div>
            <span className="mini-label">{card.label}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
