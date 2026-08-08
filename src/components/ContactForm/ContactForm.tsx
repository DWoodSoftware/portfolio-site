import "./ContactForm.css";

export function ContactForm() {
  return (
    <section
      className="contact-form"
      aria-labelledby="contact-title"
    >
      <form className="contact-form__form">
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </label>

        <label>
          <span>Company</span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
          />
        </label>

        <label className="contact-form__message">
          <span>Message</span>
          <textarea
            name="message"
            rows={6}
            required
          />
        </label>

        <button type="submit">
          Send message
        </button>
      </form>
    </section>
  );
}