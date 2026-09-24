import "./ContactForm.css";

export function ContactForm() {
  return (
    <section className="contact-form">
      <div className="contact-form__form">
        <p>
          Want to discuss a role, contract, project, or something
          technically interesting?
        </p>

        <a href="mailto:davidwoodcontact@gmail.com">
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
    </section>
  );
}