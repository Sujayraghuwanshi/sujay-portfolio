import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>SR</h2>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" className={active === "about" ? "active" : ""}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" className={active === "skills" ? "active" : ""}>
            Skills
          </a>
        </li>

        <li>
          <a
            href="#education"
            className={active === "education" ? "active" : ""}
          >
            Education
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>

      <a href="/resume.pdf" download>
        <button className="resume-btn">📄 Resume</button>
      </a>
    </nav>
  );
}

export default Navbar;