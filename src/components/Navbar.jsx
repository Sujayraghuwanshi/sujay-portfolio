function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>SR</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="/resume.pdf" download>
         <button className="resume-btn">
           📄 Resume
         </button>
       </a>
    </nav>
  );
}

export default Navbar;