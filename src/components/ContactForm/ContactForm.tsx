import "./ContactForm.css";

export function ContactForm() {
  return (
    <section className="contact-form">
      <div className="contact-form__form">
        <p className="contact-form__intro">
          Want to discuss a role, contract, project, or something
          technically interesting?
        </p>

        <div
          className="contact-form__links"
          aria-label="Contact options"
        >
          <a
          className="contact-form__email" 
            href="mailto:davidwoodcontact+site@gmail.com"
          >
            Email me
          </a>

          <a
            href="https://www.linkedin.com/in/david-wood-software/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/DWoodSoftware"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}