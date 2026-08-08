import { ContactForm } from "../components/ContactForm/ContactForm";
import { Availability } from "../components/Availability/Availability";
import { availability } from "../domain/avaliability";

import "../styles/ContactPage.css";

export function ContactPage() {
  return (
    <section
      className="contact-page"
    >
      <Availability availability={availability} />
      <ContactForm />
    </section>
  );
}