import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import profile from "./assets/passport.png";
import "./App.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="hero-socials">
  <a
    href="https://github.com/YOUR_GITHUB_USERNAME"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin />
  </a>

  <a href="mailto:YOUR_EMAIL@gmail.com">
    <FaEnvelope />
  </a>
</div>
      <section className="hero" id="home">
        <div className="left">
          <h3>👋 Hello, I'm</h3>

          <h1>
            SUJAY <br />
            RAGHUWANSHI
          </h1>

          <h2>Java Developer | AIML Student</h2>

          <p className="tech-stack">
            Java • Python • SQL • DSA
          </p>

          <p>
            Passionate about building clean, responsive, and 
            user-friendly applications. Currently pursuing B.Tech in AIML
            while continuously improving my programming, problem-solving, 
            and software development skills.
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download>
              <button className="hire-btn">
                Download Resume
              </button>
            </a>

            <a href="#projects">
              <button className="project-btn">
                View Projects ↓
              </button>
            </a>
          </div>
        </div>

        <div className="right">
          <img
            src={profile}
            alt="Sujay Raghuwanshi"
            className="profile"
          />
        </div>
      </section>

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />
      <Education />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;