import React, { useEffect } from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mkgpppnb"); // your Formspree form ID

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        window.location.reload(); // refresh page to show form again
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  
  if (state.succeeded) {
    return (
      <section className="contact success">
        <div className="contact-container">
          <h1>
            Thank <span>You!</span>
          </h1>
          <p className="thank-message">
            Your message has been sent successfully. ☕  
            I’ll get back to you soon!
          </p>
        </div>
      </section>
    );

  }
  
  return (
    <section className="contact">
      <div className="contact-container">
        <h1>
          Contact <span>Us</span>
        </h1>
        <p className="contact-intro">
          We’d love to hear from you! Whether you have a question, suggestion,
          or just want to say hi — let’s connect over a cup of coffee ☕.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* ✅ Name Field */}
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          {/* ✅ Email Field */}
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* ✅ Message Field */}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Write your message..."
            rows="5"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="contact-details">
          <p>📍 Gomia, Bokaro, Jharkhand</p>
          <p>📧 rehanmd705063@gmail.com</p>
          <p>📞 +91 7050630067</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
