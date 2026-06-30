function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>🚀 Currently Building</h3>

        <p>
          Projects are currently under development. New projects will be added
          as they are completed.
        </p>

        <div className="project-list">
          <div className="coming-card">
            <h4>🧮 Java Calculator</h4>
            <p>Core Java based calculator with clean UI.</p>
          </div>

          <div className="coming-card">
            <h4>🎓 Student Management System</h4>
            <p>Java + SQL project for managing student records.</p>
          </div>

          <div className="coming-card">
            <h4>🌦 Weather App</h4>
            <p>Weather application using JavaScript and API.</p>
          </div>
        </div>

        <button className="coming-btn">
          More Projects Coming Soon 🚀
        </button>
      </div>
    </section>
  );
}

export default Projects;