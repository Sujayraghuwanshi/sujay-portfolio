function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-list">

        <div className="project-card">
          <h3>🧮 Java Calculator</h3>

          <p>
            A modern Java Swing calculator with a clean dark user interface.
            Supports basic arithmetic operations, percentage, decimal,
            backspace and clear functionality.
          </p>

          <div className="tech-stack">
            <span>Java</span>
            <span>Swing</span>
            <span>AWT</span>
          </div>

          <div className="project-buttons">
            <a
              href="https://github.com/Sujayraghuwanshi/Java-Calculator"
              target="_blank"
              rel="noreferrer"
            >
              <button>💻 GitHub</button>
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>🎓 Student Management System</h3>

          <p>
            Currently under development using Java and MySQL.
          </p>

          <button className="coming-btn">
            Coming Soon
          </button>
        </div>

        <div className="project-card">
          <h3>🌦 Weather App</h3>

          <p>
            Responsive weather application using React and Weather API.
          </p>

          <button className="coming-btn">
            Coming Soon
          </button>
        </div>

      </div>
    </section>
  );
}

export default Projects;