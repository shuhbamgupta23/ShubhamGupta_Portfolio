import React, { useRef, useState } from "react";
import Profile from "../../images/profile_pic.png";
import "./style.css";
import { motion } from "framer-motion";
import resume from "./resume.pdf";
import Leetcode from "../../images/leetcode.png";
import MOVIES from "../../images/movieapp.jpeg";
import RESUME from "../../images/resumepicc.jpeg";
import EXCEL from "../../images/excel.jpeg";
import ECOMMERCE from "../../images/ecommerce.jpeg";
import emailjs from "@emailjs/browser";
const NavBar = () => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const small_screen = useRef(null);
  const hamburger = useRef(null);
  const hamburger_close = useRef(null);
  const scrollToComponent = (currEle) => {
    currEle.current.scrollIntoView({ behavior: "smooth" });
  };
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setInputValue({ user_name: "", user_email: "", message: "" });
    emailjs
      .sendForm(
        "service_8bt4qb9",
        "template_ibog4ib",
        form.current,
        "rrF5iIqQm0G7kBEMo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const smallMenuScroll = (currEle) => {
    currEle.current.scrollIntoView({ behavior: "smooth" });
    handleClick();
  };

  const buttonScroll = (currEle) => {
    currEle.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = () => {
    if (active) {
      hamburger_close.current.classList.remove("active");
      hamburger.current.classList.add("active");
      small_screen.current.classList.remove("active");
    } else {
      hamburger_close.current.classList.add("active");
      hamburger.current.classList.remove("active");
      small_screen.current.classList.add("active");
    }

    setActive((prev) => !prev);
  };

  const main = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  return (
    <>
      <div className="nav_main">
        <nav>
          <div className="nav_left">
            <img src={Profile} alt="profile" />
            <motion.a
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              href="/"
            >
              Shubham Gupta
            </motion.a>
          </div>
          <ul className="nav_right">
            <motion.li
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
            >
              <button type="button" onClick={() => scrollToComponent(main)}>
                Home
              </button>
            </motion.li>

            <motion.li
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 0.7 }}
              whileHover={{ scale: 1.1 }}
            >
              <button type="button" onClick={() => scrollToComponent(about)}>
                About
              </button>
            </motion.li>
            <motion.li
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <button type="button" onClick={() => scrollToComponent(project)}>
                Projects
              </button>
            </motion.li>
            <motion.li
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <button type="button" onClick={() => scrollToComponent(contact)}>
                contact
              </button>
            </motion.li>
            <motion.li
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <a href={resume} download="ShubhamGupta_Resume">
                <button>Download Resume</button>
              </a>
            </motion.li>
            <div className="icons">
              <i
                className="material-icons hamburger active"
                ref={hamburger}
                onClick={handleClick}
              >
                menu
              </i>
              <i
                className="fa-solid fa-xmark hamburger_close"
                ref={hamburger_close}
                onClick={handleClick}
              ></i>
            </div>
          </ul>
        </nav>
        <ul className="small_screen" ref={small_screen}>
          <li>
            <button type="button" onClick={() => smallMenuScroll(main)}>
              Home
            </button>
          </li>
          <li>
            <button type="button" onClick={() => smallMenuScroll(about)}>
              About
            </button>
          </li>
          <li>
            <button type="button" onClick={() => smallMenuScroll(project)}>
              Projects
            </button>
          </li>
          <li>
            <button type="button" onClick={() => smallMenuScroll(contact)}>
              Contact
            </button>
          </li>
          <li>
            <a href={resume} download="ShubhamGupta_Resume">
              <button> Download Resume</button>
            </a>
          </li>
        </ul>
      </div>
      <div className="main" ref={main}>
        <div className="socials">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/shubhamgupta2000/"
                target="blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/shuhbamgupta23" target="blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/mrjanuaryx/" target="blank">
                <img src={Leetcode} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <main ref={main}>
          <h1>HEY, I'M SHUBHAM GUPTA</h1>
          <p>
            A Full Stack Web Developer building Full Fledged Websites and Web
            Applications that leads to the success of the overall product.
          </p>
          <motion.button
            drag
            whileHover={{ scale: 1.05, y: "-5px" }}
            dragConstraints={{
              right: 10,
              left: 10,
              top: 10,
              bottom: 10,
            }}
            initial={{ y: -1500 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1 }}
            onClick={() => buttonScroll(project)}
          >
            Projects
          </motion.button>
        </main>
      </div>
      <div className="about" ref={about}>
        <header className="about-header">
          <h1>About me</h1>
          <span></span>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in <br />
            terms of programming and technology.
          </p>
        </header>
        <div className="about-bottom">
          <div className="about-left">
            <h2>Get to know me!</h2>
            <p>
              I'm a <span>Full Stack Web Developer</span> building the Front-end
              of Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the
              <span>Projects</span> section.
            </p>
            <p>
              I'm open to <span>Job</span> opportunities where I can contribute,
              learn and grow. If you have a opportunity that matches my skills
              and experience then don't hesitate to <span>contact</span>
              me.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: "-5px" }}
              transition={{ duration: 1 }}
              onClick={() => buttonScroll(contact)}
            >
              Contact
            </motion.button>
          </div>
          <div className="about-right">
            <h2>My Skills</h2>
            <div className="skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>NextJs</span>
              <span>BootStrap</span>
              <span>Git</span>
              <span>Node</span>
              <span>Express</span>
              <span>Java</span>
              <span>Redux</span>
            </div>
          </div>
        </div>
      </div>
      <div className="projects" ref={project}>
        <header className="project-header">
          <h1>Projects</h1>
          <span></span>
          <p>
            Here you will find some of the projects that I created throughout my
            learning journey.
          </p>
        </header>
        <div className="project-bottom">
          <div className="project">
            <img src={MOVIES} alt="movies"></img>
            <div className="project-detail">
              <h1>Movies Application</h1>
              <p>
                Movies application is a application built using React which
                fetch movies detail using REST api. Allowing user to add their
                favorite movies. All the bookmarked movies are stored in
                local-storage making it reusable even after closing the tab.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                href="https://movie-app-xi-drab.vercel.app/"
                target="blank"
              >
                <button>Visit Project</button>
              </motion.a>
            </div>
          </div>
          <div className="project">
            <img src={RESUME} alt="movies"></img>
            <div className="project-detail">
              <h1>Resume Builder</h1>
              <p>
                Movies application is a application built using React which
                fetch movies detail using REST api. Allowing user to add their
                favorite movies. All the bookmarked movies are stored in
                local-storage making it reusable even after closing the tab.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                href="https://resume-builder-six-beta.vercel.app/"
                target="blank"
              >
                <button>Visit Project</button>
              </motion.a>
            </div>
          </div>
          <div className="project">
            <img src={ECOMMERCE} alt="movies"></img>
            <div className="project-detail">
              <h1>Ecommerce</h1>
              <p>
                Movies application is a application built using React which
                fetch movies detail using REST api. Allowing user to add their
                favorite movies. All the bookmarked movies are stored in
                local-storage making it reusable even after closing the tab.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                href="https://github.com/shuhbamgupta23/major_project"
                target="blank"
              >
                <button>Visit Project</button>
              </motion.a>
            </div>
          </div>
          <div className="project">
            <img src={EXCEL} alt="movies"></img>
            <div className="project-detail">
              <h1>Excel Clone</h1>
              <p>
                Movies application is a application built using React which
                fetch movies detail using REST api. Allowing user to add their
                favorite movies. All the bookmarked movies are stored in
                local-storage making it reusable even after closing the tab.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                href="https://shuhbamgupta23.github.io/excelClone/"
                target="blank"
              >
                <button>Visit Project</button>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact" ref={contact}>
        <header className="contact-header">
          <h1>Contact Me</h1>
          <span></span>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible.
          </p>
        </header>
        <div className="contact-bottom">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
              value={inputValue.user_name}
            />
            <label>Email</label>
            <input
              onChange={(e) => handleChange(e)}
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
              value={inputValue.user_email}
            />
            <label>Message</label>
            <textarea
              onChange={(e) => handleChange(e)}
              name="message"
              placeholder="Enter Your Message"
              value={inputValue.message}
            />
            <div className="contact-button">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                type="submit"
              >
                Send
              </motion.button>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <div>
          <h2>SHUBHAM GUPTA</h2>
          <p>
            A Full Stack Web Developer building Full Fledged Websites and Web
            Applications that leads to the success of the overall product.
          </p>
          <span className="line"></span>
        </div>
        <p>
          Made by<a href="/">Shubham Gupta</a>
        </p>
      </footer>
    </>
  );
};

export default NavBar;
