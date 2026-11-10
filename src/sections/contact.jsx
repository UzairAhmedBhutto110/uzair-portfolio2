
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <p className="section-label">GET IN TOUCH</p>

        <h2>Let's Connect</h2>

        <p className="contact-description">
          I am interested in learning, collaborating on projects,
          and connecting with people in the technology field.
          Feel free to reach out.
        </p>

        <a
          href="mailto:YOUR_EMAIL_ADDRESS"
          className="contact-button"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
