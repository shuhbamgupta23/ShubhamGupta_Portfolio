import React from "react";
import "./style.css";
const About = () => {
  return (
    <div className="about">
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
            learn and grow. If you have a opportunity that matches my skills and
            experience then don't hesitate to <span>contact</span>
            me.
          </p>
          <button>Contact</button>
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
  );
};

export default About;
