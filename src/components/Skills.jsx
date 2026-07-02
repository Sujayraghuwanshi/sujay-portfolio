function Skills() {
  const skills = [
    { icon: "☕", name: "Java" },
    { icon: "🐍", name: "Python" },
    { icon: "🗄️", name: "SQL" },
    { icon: "⚡", name: "Data Structures & Algorithms" },
    { icon: "📦", name: "Object Oriented Programming" },
    { icon: "🌿", name: "Git" },
    { icon: "🐙", name: "GitHub" },
    { icon: "💡", name: "Problem Solving" },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div
           className="skill-card"
           key={skill.name}
           data-aos="zoom-in"
          data-aos-duration="800"
          >
            <h1>{skill.icon}</h1>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;