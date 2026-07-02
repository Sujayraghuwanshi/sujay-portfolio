import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import profile from "./assets/passport.png";

import "./App.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
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
            Passionate about building clean, responsive, and user-friendly
            applications. Currently pursuing B.Tech in AIML while continuously
            improving my programming, problem-solving, and software development
            skills.
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download>
              <button className="hire-btn">
                📄 Download Resume
              </button>
            </a>

            <a href="#projects">
              <button className="project-btn">
                🚀 View Projects
              </button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="hero-socials">
            <a
              href="https://github.com/Sujayraghuwanshi"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sujay-raghuwanshi-990a722b4/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:raghuwanshid589@gmail.com">
              <FaEnvelope />
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

      <About />

      <Skills />

      <Education />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}

export default App;