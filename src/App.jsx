import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import GitHubStats from "./components/GitHubStats";
import ScrollProgress from "./components/ScrollProgress";

import profile from "./assets/profile.png";

import "./App.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}

      <section className="hero" id="home">

  <div className="left">

    

    <h3>Hello, I'm</h3>

    <h1>
      SUJAY <br />
      <span>RAGHUWANSHI</span>
    </h1>

    <h2 className="hero-title">
      Java Developer <span>|</span> AIML Student
    </h2>

    <div className="hero-tech">
      <span>☕ Java</span>
      <span>🐍 Python</span>
      <span>🗄 SQL</span>
      <span>📂 Git</span>
    </div>

    <p className="hero-desc">
      Passionate Java Developer and AIML student focused on building clean,
      responsive and user-friendly applications. Currently seeking internship
      opportunities to grow as a Software Developer.
    </p>

    <div className="hero-buttons">

      <a href="/resume.pdf" download>
        <button className="hire-btn">
          📄 Download CV
        </button>
      </a>

      <a href="#projects">
        <button className="project-btn">
          🚀 View Projects
        </button>
      </a>

    </div>

    <div className="hero-info">

      <div className="info-box">
        📍 Bhopal
      </div>

      <div className="info-box">
        🎓 B.Tech AIML
      </div>

      <div className="info-box">
        💼 Open to Internship
      </div>

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

    <div className="profile-wrapper">
      <img
        src={profile}
        alt="Sujay Raghuwanshi"
        className="profile"
      />
    </div>

  </div>

</section>
      <About />
      <Skills />
      <Certificates />
      <Education />
      <Projects />
      <GitHubStats />
      <Contact />

      <ScrollToTop />

      <Footer />
                     </>
);
}

export default App;
     


