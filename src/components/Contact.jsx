function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-card">
        <h3>Let's Connect 👋</h3>

        <p>
          I'm currently looking for internship and software development
          opportunities. Feel free to contact me.
        </p>

        <div className="contact-info">
          <p>📧 Email : youremail@gmail.com</p>
          <p>📱 Phone : +91 XXXXXXXXXX</p>
          <p>📍 Bhopal, Madhya Pradesh</p>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;