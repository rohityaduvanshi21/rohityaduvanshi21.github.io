import React from 'react';
import './App.css';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import ReactGithubCalendar from 'react-github-calendar';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav id="nav-menu">
        <ul>
          <li><a className="nav-link home" href="#home">Home</a></li>
          <li><a className="nav-link about" href="#about">About</a></li>
          <li><a className="nav-link skills" href="#skills">Skills</a></li>
          <li><a className="nav-link projects" href="#projects">Projects</a></li>
          <li><a className="nav-link contact" href="#contact">Contact</a></li>
          <li><a className="nav-link resume" href="path_to_your_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </nav>

      <section id="home">
        <h1 id="user-detail-name">Rohit Kumar</h1>
        <p id="user-detail-intro">Greetings! Welcome to my Full Stack Developer portfolio, a showcase of my passion for creating innovative and robust web applications. I am a dedicated and versatile Full Stack Developer with a profound commitment to crafting seamless user experiences and delivering dynamic solutions. Throughout my journey, I have honed my skills in both front-end and back-end development, allowing me to create comprehensive and integrated applications that bring ideas to life. My expertise encompasses a wide array of technologies, languages, and frameworks, ensuring a holistic approach to development.</p>
        <img src="images/photo.jpg" alt="Your Photo" className="home-img" />
      </section>

      <section id="about" className="about section">
        <h2>About Me</h2>
        <p>Hey there! I'm Rohit, an enthusiastic and motivated Full Stack Web Developer with a passion for crafting robust and user-friendly digital experiences. My journey in the world of web development began during my studies, where I got hooked on the thrill of turning ideas into functional and visually appealing websites.</p>
        <ul class="about-info">
		            	<li class="d-flex"><span>Name:</span> <span>Rohit Kumar</span></li>
		            	<li class="d-flex"><span>Date of birth:</span> <span>November 21, 1999</span></li>
		            	<li class="d-flex"><span>Address:</span> <span>Jamshedpur, Jharkhand, India</span></li>
		            	<li class="d-flex"><span>Zip code:</span> <span>831019</span></li>
		            	<li class="d-flex"><span>Email:</span> <span>rohit.r.yaduvanshi@hotmail.com</span></li>
		            	<li class="d-flex"><span>Phone: </span> <span>+91 8540012206</span></li>
		            </ul>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-card">
          <img src="https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png" alt="Skill 1" className="skills-card-img" />
          <p className="skills-card-name">HTML</p>
        </div>
        <div className="skills-card">
          <img src="https://cdn.iconscout.com/icon/free/png-256/css3-11-1175239.png" alt="Skill 1" className="skills-card-img" />
          <p className="skills-card-name">CSS</p>
        </div>
        <div className="skills-card">
          <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="Skill 1" className="skills-card-img" />
          <p className="skills-card-name">Java Script</p>
        </div>
        <div className="skills-card">
          <img src="https://cdn.iconscout.com/icon/free/png-256/react-4-1175110.png" alt="Skill 1" className="skills-card-img" />
          <p className="skills-card-name">React</p>
        </div>
        <div className="skills-card">
          <img src="https://cdn.iconscout.com/icon/free/png-256/redux-283024.png" alt="Skill 1" className="skills-card-img" />
          <p className="skills-card-name">Redux</p>
        </div>
        <div className="skills-card">
          <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" alt="Skill 1" className="skills-card-img" />
          <p className="skills-card-name">Node JS</p>
        </div>
        <div className="skills-card">
          <img src="https://cdn.iconscout.com/icon/free/png-256/express-1175009.png" alt="Skill 1" className="skills-card-img" />
          <p className="skills-card-name">Express</p>
        </div>
        <div className="skills-card">
          <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-226029.png" alt="Skill 1" className="skills-card-img" />
          <p className="skills-card-name">MongoDB</p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <img src="https://imagekit.io/blog/content/images/2021/03/Big-basket-01.png" alt="Project 1" />
          <h3 className="project-title">Big Basket Clone</h3>
          <p className="project-description">This is a team Project and tried to clone The best online grocery store in India. BigBasket is an online supermarket for all your daily needs.</p>
          <p className="project-tech-stack">Tech Stack Used: HTML, CSS, Java Script, Local Storage</p>
          <a href="https://github.com/kunalgoyat999/bigbasket" className="project-github-link">GitHub Repository</a>
          <a href="  https://dreamy-peony-b35dcc.netlify.app/" className="project-deployed-link">Deployed Link</a>
        </div>
        <div className="project-card">
          <img src="https://editorial.pxcrush.net/carsales/general/editorial/rad-bumper-toyota-hilux-05.jpg?width=1024&height=683" alt='Project 2' />
          <h3 className="project-title">Auto Parts Shop</h3>
          <p className="project-description">This is a collaborative project. This is a website to checkout for if you are looking for auto-parts. We have used ReactJS to build this.</p>
          <p className="project-tech-stack">Tech Stack Used: HTML, CSS, Java Script, React JS, JSON, Tailwind CSS, Chakra UI</p>
          <a href="https://github.com/arpit017/Autoparts-Project" className="project-github-link">GitHub Repository</a>
          <a href="https://autoparts-lake.vercel.app/" className="project-deployed-link">Deployed Link</a>
        </div>
        <div className="project-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57061D7O385kh9X_grZ_lo-E_XeP1jEfTmg&usqp=CAU" alt="Project 1" />
          <h3 className="project-title">Sephora Clone</h3>
          <p className="project-description">Sephora is a French multinational retailer of personal care and beauty products with nearly 340 brands, along with its own private label, Sephora Collection, and includes beauty products such as cosmetics, skincare, body, fragrance, nail color, beauty tools, body lotions and haircare.</p>
          <p className="project-tech-stack">Tech Stack Used: Html 5, CSS 3, JavaScript, LocalStorage, BootStrap, JSON Server</p>
          <a href="https://github.com/kunalgoyat999/sephoraClone" className="project-github-link">GitHub Repository</a>
          <a href="http://creative-dieffenbachia-eb1778.netlify.app/" className="project-deployed-link">Deployed Link</a>
        </div>
        <div className="project-card">
          <img src="https://getvectorlogo.com/wp-content/uploads/2020/06/bialetti-vector-logo.png" alt="Project 1" />
          <h3 className="project-title">Bialetti Coffee Shop</h3>
          <p className="project-description">This is a collaborative project. This is a website to checkout for if you are looking for the best Italian Coffee and Coffee Products. We also sell Coffee Makers. We have used ReactJS to build this.</p>
          <p className="project-tech-stack">Tech Stack Used: HTML, CSS, Java Script, React JS, JSON, Tailwind CSS, Chakra UI</p>
          <a href="https://github.com/LuciferGod06/Bialetti_Project" className="project-github-link">GitHub Repository</a>
          <a href="https://bialetti-new-clone-project.vercel.app/" className="project-deployed-link">Deployed Link</a>
        </div>

      </section>

      <section id="contact">
        <h2>Contact</h2>
        <a href="https://github.com/rohityaduvanshi21/rohityaduvanshi21" id="contact-github"><AiOutlineGithub /> GitHub Profile</a>
        <a href="https://www.linkedin.com/in/rohit-kumar-a06788267/" id="contact-linkedin"><AiOutlineLinkedin /> LinkedIn Profile</a>
        <p id="contact-phone">+91 8540012206</p>
        <p id="contact-email">rohit.r.yaduvanshi@hotmail.com</p>
      </section>

      <section id="resume-section">
        <button id="resume-button-1" onClick={() => window.open("path_to_your_resume.pdf", "_blank")}>Resume</button>
      </section>
      <section id="resume-section2">
        <button id="resume-button-2" onClick={() => window.open("path_to_your_resume.pdf", "_blank")}>Resume</button>
      </section>

      <div className="github-stats-container">
        <div id="github-streak-stats">
          {/* Add your GitHub streak stats here */}
        </div>
        <div id="github-top-langs">
          {/* Add your GitHub top languages stats here */}
        </div>
        <div id="github-stats-card">
          {/* Add your GitHub stats card here */}
        </div>
      </div>

      {/* GitHub Calendar */}
      <div className="github-calendar-container">
        <ReactGithubCalendar username="your_github_username" blockSize={14} blockMargin={2} />
      </div>
    </div>
  );
}

export default App;
