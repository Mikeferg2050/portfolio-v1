import React from "react";
import "./App.css";

function App() {
  return (
    <div className="backgroundContainer">
      {""}

      <div className="app">
        <header className="header">
          <h1>Michael Ferguson</h1>

          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="hero">
          <img src="assets/crop.jpg" alt="Profile" className="profile-img" />
          <div className="hero-content">
            <h1>Bridging the gap between design and development.</h1>
            <p>
              I'm passionate about blending code with creativity. Skilled in
              HTML, CSS, JavaScript, and Adobe Creative Suite.
            </p>
          </div>
        </section>
        <section id="portfolio" className="portfolio">
          <h2>Website Projects</h2>
          <div className="grid">
            <div className="card">Project 1</div>
            <div className="card">Project 2</div>
          </div>

          <h2>Graphic Design</h2>
          <div className="grid">
            <div className="card">Design 1</div>
            <div className="card">Design 2</div>
          </div>
        </section>
        <section id="about" className="about">
          <h2>About Me</h2>
          <p>
            User-focused UX/UI Designer and Full-Stack Web Developer with 6+
            years of experience in multimedia, marketing, and graphic design.
            Proven ability to blend creativity with functionality to deliver
            intuitive, visually compelling, and responsive digital experiences.
            Skilled in user research, wireframing, prototyping, and developing
            full-stack applications. Proficient in front-end and back-end
            technologies, including HTML, CSS, JavaScript, Node.js, and React.
            Adept at collaborating with clients to understand user needs and
            deliver solutions that exceed expectations in fast-paced,
            deadline-driven environments. Expert in design tools such as Adobe
            XD, Figma, Illustrator, Indesign and Photoshop.
          </p>
        </section>
        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>Email: Mikeferguson@designprollc.com</p>
          <p>Instagram: @mikedesignpro</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
          <p>GitHub: https://github.com/Mikeferg2050</p>
          <p>Availability: Open to new opportunities</p>
        </section>
        <footer className="footer">© 2025 Michael Ferguson </footer>
      </div>
    </div>
  );
}

export default App;
