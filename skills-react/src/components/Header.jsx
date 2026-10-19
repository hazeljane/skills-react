
import "./Header.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

function Header() {
  return (
    <header className="site-header">
      <a href="#home" className="site-logo">
        My<span>Portfolio</span>
        <small>FRONTEND DEVELOPER</small>
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="header-contact">
        Contact <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

export default Header;
