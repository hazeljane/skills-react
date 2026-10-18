
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("Message sent successfully! Thank you for reaching out.");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Sorry, your message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section section-light contact-section">
      <div className="section-heading reveal">
        <span className="section-label">HAVE A PROJECT IN MIND?</span>
        <h2>
          Get in Touch<span className="accent">.</span>
        </h2>
        <p>Have a question or want to collaborate? Send me a message.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-form-card reveal-left">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Your name</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
              <span>{sending ? "..." : "↗"}</span>
            </button>

            <p className="form-note" role="status" aria-live="polite">
              {status ||
                "Your message will be sent securely through EmailJS."}
            </p>
          </form>
        </div>

        <aside className="contact-info reveal-right">
          <span className="contact-symbol">✦</span>
          <h3>Let's Connect!</h3>
          <p>
            Feel free to reach out and connect with me through my social
            platforms.
          </p>

          <a
            className="social-link"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Facebook</span>
            <strong>Hazel Jane Guno ↗</strong>
          </a>

          <a
            className="social-link"
            href="https://github.com/hazeljane"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <strong>@hazeljane ↗</strong>
          </a>

          <p className="contact-note">
            Open to learning, teamwork, and exciting project ideas.
          </p>
        </aside>
      </div>
    </section>
  );
}
