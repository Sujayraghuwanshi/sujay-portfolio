function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-card">
        <h3>Let's Connect 👋</h3>

        <p>
          I'm currently looking for internship and software development
          opportunities. Feel free to connect with me.
        </p>

        <div className="contact-info">
          <p>📧 Email : <a href="mailto:raghuwanshid589@gmail.com">raghuwanshid589@gmail.com</a></p>

          <p>📱 Phone : <a href="tel:+917772042591">+91 7772042591</a></p>

          <p>📍 Bhopal, Madhya Pradesh, India</p>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Sujayraghuwanshi"
            target="_blank"
            rel="noreferrer"
          >
            🐙 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sujay-raghuwanshi-990a722b4/"
            target="_blank"
            rel="noreferrer"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;