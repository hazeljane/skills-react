import { useState } from "react";

const links = [
  ["HOME", "#home"], ["ABOUT", "#about"], ["WORK", "#work"],
  ["PARTNERSHIP", "#partnership"], ["SKILLS", "#skills"],
  ["JOURNEY", "#journey"], ["SERVICES", "#services"], ["CONTACT", "#contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-avatar">HJ</span>
        <span className="brand-copy"><strong>HAZEL JANE</strong><small>Frontend Developer</small></span>
      </a>

      <button
        className={`menu-toggle ${open ? "active" : ""}`}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mainNav"
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>

      <nav id="mainNav" className={open ? "nav-open" : ""} aria-label="Main navigation">
        <ul>
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      {open && <button className="nav-backdrop" aria-label="Close navigation" onClick={() => setOpen(false)} />}
    </header>
  );
}
