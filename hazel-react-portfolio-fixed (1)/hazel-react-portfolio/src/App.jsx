import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Partnership from "./components/Partnership.jsx";
import Skills from "./components/Skills.jsx";
import Journey from "./components/Journey.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .journey-card, .journey-heading, .journey-footer"
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("is-visible");
          entry.target.classList.remove("show");
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Work />
        <Partnership />
        <Skills />
        <Journey />
        <Services />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Hazel Jane. Built while learning frontend development.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
