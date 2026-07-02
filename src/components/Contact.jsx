import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_xop0acn",
        "template_y4fa6kj",
        form.current,
        "oemSkRE5Hys0r3A4W"
      )
      .then(
        () => {
          setLoading(false);

          alert("✅ Message Sent Successfully!");

          form.current.reset();
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("❌ Failed to send message.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div
        className="contact-card"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h3>Let's Connect 👋</h3>

        <p>
          I'm currently looking for internship and software development
          opportunities. Feel free to connect with me.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
                <div className="contact-info">
          <p>
            📧 Email :
            <a href="mailto:raghuwanshid589@gmail.com">
              {" "}raghuwanshid589@gmail.com
            </a>
          </p>

          <p>
            📱 Phone :
            <a href="tel:+917772042591">
              {" "}+91 7772042591
            </a>
          </p>

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