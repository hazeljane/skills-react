const services = [
  { icon: "</>", title: "Website Development", description: "Building structured web pages using HTML and CSS with clean, readable code and organized layouts.", tag: "HTML · CSS" },
  { icon: "▧", title: "Responsive Web Design", description: "Creating layouts that adapt to mobile phones, tablets, and desktop screens.", tag: "Flexbox · Grid" },
  { icon: "✦", title: "UI Design", description: "Designing attractive interfaces with consistent colors, typography, spacing, and reusable cards.", tag: "Layout · Styling" },
  { icon: "⚡", title: "Interactive Websites", description: "Adding buttons, navigation interactions, form validation, and dynamic features with JavaScript.", tag: "JavaScript" }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section-heading reveal"><span className="section-label">HOW I CAN HELP</span><h2>My Services<span className="accent">.</span></h2><p className="section-intro">I focus on building clean, attractive, and responsive website interfaces while continuing to improve my skills.</p></div>
      <div className="services-grid">
        {services.map((service, i) => <article className={`service-card reveal delay-${i}`} key={service.title}><div className="service-icon">{service.icon}</div><h3>{service.title}</h3><p>{service.description}</p><span className="service-tag">{service.tag}</span></article>)}
      </div>
    </section>
  );
}
