import { useForm } from "@formspree/react";
import {useEffect} from "react";

import "./ContactForm.css";

export function ContactForm() {
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

  const [state, handleSubmit, reset] = useForm(formId);

  useEffect(() => {
    if (!state.succeeded) {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const timeoutId = window.setTimeout(() => {
      reset();
    }, 2500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [reset, state.succeeded]);

  return (
    <>
      {state.succeeded && (
        <div
          className="contact-form__success-overlay"
          role="status"
          aria-live="polite"
        >
          <div className="contact-form__success-modal">
            <span
              className="contact-form__success-icon"
              aria-hidden="true"
            >
              ✓
            </span>

            <p>
              Message sent successfully.
            </p>
          </div>
        </div>
      )}

      <section className="contact-form">
        <form
          className="contact-form__form"
          onSubmit={handleSubmit}
        >
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

          <button
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting
              ? "Sending..."
              : "Send message"}
          </button>
        </form>
      </section>
    </>
  );
}