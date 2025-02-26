import React from "react";
import '../app/portfolio.css';  


import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaXTwitter } from "react-icons/fa6";
import { TypewriterEffectSmoothDemo } from "./Header";


const Portfolio = () => {
  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Pratik <span>Kumar</span>
        </a>
        <i className="bx bx-menu" id="menu-icon"></i>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="gradient-btn">Contact Me</button>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h1>Hi, It's <span>Pratik</span></h1>
          
          <h3 className="typing-text">I'm a <span></span></h3>
          <p>🧑‍💻 Currently pursuing Bachelors' degree.</p>
          
          <div className="social-icons">
            <a href="https://github.com/DetoX0707"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/pratik-kumar-91942b26b/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/prxtikkkkk/"><FaInstagram /></a>
            <a href="https://x.com/Pratik_x_23"><FaXTwitter /></a>

          </div>
          <div className="btn-group">
            <a href="#" className="btn">Hire</a>
            <a href="#contact" className="btn">Contact</a>
          </div>
        </div>
        <div className="home-img">
          <img src="image.jpg" alt="Profile" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src="6.jpg" alt="About Me" />
        </div>
        <div className="about-content">
          <h2>About <span>Me</span></h2>
          <p>Hi, I'm Pratik, a web developer with a strong foundation in mechanical engineering, currently studying at NIT Agartala. With a passion for both technology and design, I specialize in creating interactive and user-friendly web experiences.

Beyond coding, I have experience in graphic design, allowing me to craft visually appealing and functional websites. My recent project involves developing a mental well-being platform for children, integrating chatbot interactions with fantasy characters to provide a supportive environment.

I'm always eager to learn and take on challenging projects that blend creativity with technical expertise. Whether it's front-end development, UI/UX design, or problem-solving, I thrive on turning ideas into reality.

Let's connect and build something amazing together!</p>
          <a href="#" className="btn">Read More</a>
        </div>
      </section>

      <section className="education" id="education">
        <h2 className="heading"> My <span>Education</span></h2>
        <div className="timeline">
          <div className="container left">
            <div className="content">
              <div className="tag">
              <h2> High School </h2>
            </div>
            <div className="decs">
              <h3>(2019)</h3>
              <p>📍 De Nobili School, Dhanbad</p>
<p>📜 Board: ICSE </p>
<p>🎓 Completed: Class X</p>
<p>📊 Percentage: 89.6%</p>
          </div>
          </div>
        </div>
        <div className="container right">
            <div className="content">
              <div className="tag">
              <h2> Higher Secondary </h2>
            </div>
            <div className="decs">
              <h3>(2021)</h3>
              <p>📍 RSVM, Dhanbad</p>
<p>📜 Board: CBSE</p>
<p>🎓 Completed: Class XII</p>
<p>📊 Percentage: 83%</p>
          </div>
          </div>
        </div>
        <div className="container left">
            <div className="content">
              <div className="tag">
              <h2> Undergraduate</h2>
            </div>
            <div className="decs">
              <h3>(2022-2026)</h3>
              <p>📍 National Institute of Technology (NIT), Agartala</p>
<p>📜 Course: B.Tech (Mechanical Engineering)</p>
<p>🎓 Status: Pursuing</p>
          </div>
          </div>
        </div>
      </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="heading">Projects</h2>
        <div className="projects-box">
          <div className="project-card">
            <img src="Project 1.png" alt="Project 1" />
            <h3>Unleash the snake!</h3>
            <p>A classic snake game with an arcade theme, featuring basic keyboard controls.</p>
                    	<p>Designed and developed the game using HTML, CSS, JavaScript, achieving smooth gameplay and responsiveness, reducing input lag by 15%.
                    	Created an engaging arcade theme, enhancing user retention by 20%.
                    	Implemented intuitive keyboard controls, improving user satisfaction rates by 35%. </p>
                    
            <div className="btn">Review Project</div>
          </div>
          <div className="project-card">
            <img src="night.jpg" alt="Weather App" />
            <h3>Tempest:Weather App</h3>
            <p>A weather application where users can enter a city name to view current weather conditions. </p>
                    	<p>Developed using HTML, CSS, JavaScript, integrating a third-party API to fetch live weather data, reducing data refresh times by 40%.
                    Implemented a clean and responsive user interface, improving cross-device compatibility and increasing mobile user access by 50%.
                	Optimized API calls and rendering, ensuring fast weather updates with a 95% accuracy rate.
                    </p>
            <div className="btn">Review Project</div>
          </div>
          <div className="project-card">
            <img src="p3.png" alt="Task Manager" />
            <h3>Task Manager</h3>
            <p>A simple web application to manage daily tasks and to-do lists.</p>
            <div className="btn">Review Project</div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
        <form>
          <div className="input-group">
            <div className="input-box">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-box">
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="input-group-2">
            <textarea placeholder="Your Message" cols="30" rows="10"></textarea>
            <input type="submit" value="Send Message" className="btn" />
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="social-icons">
        <a href="https://github.com/DetoX0707"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/pratik-kumar-91942b26b/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/prxtikkkkk/"><FaInstagram /></a>
            <a href="https://x.com/Pratik_x_23"><FaXTwitter /></a>
        </div>
        <ul className="list">
          <li><a href="#">FAQ</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="copyright">© Pratik Kumar │ All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Portfolio;
