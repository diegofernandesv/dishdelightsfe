import styles from "./contact.module.css";

export default function ContactView() {
  return (
    
    <div className={styles.contactContainer}>
      {/* Heading */}
      <h1 className={styles.heading}>Contact Us</h1>
      {/* Contact Information */}
      <section className={styles.section}>
        <p className={styles.paragraph}>
          Have questions, feedback, or just want to say hello? We'd love to hear from you!  
          Reach out to us via email or fill out the form below, and we'll get back to you as soon as possible.  
        </p>
        <p className={styles.paragraph}>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@dishdelights.com" className={styles.emailLink}>
            info@dishdelights.com
          </a>
        </p>
      </section>

      {/* Contact Form */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Send Us a Message</h2>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              placeholder="Your name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="Your message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </section>

      {/* Find Us Section */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Want to visit us?</h2>
        <p className={styles.paragraph}>
          <strong>Go to our Address, we are waiting for you😊:</strong> 456 Culinary Avenue, Gourmet Town, 1010 Vienna, Austria
        </p>
        {/* Embedded Google Map */}
        <div className={styles.mapContainer} style={{ borderRadius: "20px", overflow: "hidden" }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.3002116078473!2d16.3725043!3d48.2081742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079fdd655555%3A0x3c3bc9f6b5b3e5f3!2s456%20Culinary%20Avenue%2C%201010%20Vienna%2C%20Austria!5e0!3m2!1sen!2sus!4v1647673243905!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div> 
  );
}
