import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

import profile from "./assets/passport.png";

import "./App.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

function App() {
  return (
    <>
      <Loader />

      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="left">
          <h3>👋 Hello, I'm</h3>

          <h1>
            SUJAY <br />
            RAGHUWANSHI
          </h1>

          <h2 style={{ color: "#3b82f6" }}>
            <Typewriter
              words={[
                "Software Developer",
                "AI/ML Student",
                "Problem Solver",
                "React Learner",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

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

      <ScrollToTop />

      <Footer />
    </>
  );
}

export default App;