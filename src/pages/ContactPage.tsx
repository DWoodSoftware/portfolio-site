import { ContactForm } from "../components/ContactForm/ContactForm";

import "../styles/ContactPage.css";

export function ContactPage() {
  return (
    <section
      className="contact-page"
      aria-labelledby="contact-page-title"
    >
      <header className="contact-page__header">
        <div>
          <h1 id="contact-page-title">
            Let&apos;s talk.
          </h1>

          <p>
            Have a role, project or problem worth discussing?
            I&apos;d like to hear about it.
          </p>
        </div>

        <dl className="contact-page__availability">
          <div>
            <dt>Open to</dt>
            <dd>Permanent · Contract · Temporary · Part-time</dd>
          </div>

          <div>
            <dt>Location</dt>
            <dd>United Kingdom</dd>
          </div>

          <div>
            <dt>Working</dt>
            <dd>Remote · Hybrid · On-site</dd>
          </div>
        </dl>
      </header>

      <ContactForm />
    </section>
  );
}