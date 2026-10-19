import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const recipient = "your-email@example.com";
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `${formData.message}`
    );

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <header className="contact-heading">
          <p className="contact-eyebrow">LET'S CONNECT</p>

          <h2>
            Have a project in <span>mind?</span>
          </h2>

          <p className="contact-intro">
            I'm always open to learning opportunities, creative ideas,
            and collaborations with fellow developers.
            Let's build something meaningful together.
          </p>
        </header>

        <div className="contact-layout">
          <div className="contact-info">
            <span className="contact-label">GET IN TOUCH</span>

            <h3>
              Let's turn your ideas into something
              <span> wonderful.</span>
            </h3>

            <p className="contact-description">
              Whether you have a project, an opportunity,
              or simply want to connect, feel free to send me a message.
            </p>

            <a
              className="contact-detail"
              href="mailto:your-email@example.com"
            >
              <span className="contact-icon" aria-hidden="true">
                @
              </span>
              <span>
                <small>Email me</small>
                <strong>your-email@example.com</strong>
              </span>
              <span className="contact-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/hazeljane"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook ↗
              </a>
            </div>

            <p className="contact-note">
              <span aria-hidden="true">✦</span>
              Open to collaboration and new opportunities.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <h3>Send a message</h3>
              <p>Fill in the details below to get in touch.</p>
            </div>

            <div className="contact-field-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me a little about your idea..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="contact-submit" type="submit">
              Send message <span aria-hidden="true">↗</span>
            </button>

            <p className="contact-form-note">
              Your email application will open with your message prepared.
            </p>
          </form>
        </div>

        <footer className="contact-footer">
          <p>Designed and built with care.</p>
          <a href="#home">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}

export default Contact;