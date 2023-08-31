import React from "react";
import "./style.css";
import MOVIES from "../../images/movieapp.jpeg";
import RESUME from "../../images/resumepicc.jpeg";
import EXCEL from "../../images/excel.jpeg";
import ECOMMERCE from "../../images/ecommerce.jpeg";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="projects">
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
              Movies application is a application built using React which fetch
              movies detail using REST api. Allowing user to add their favorite
              movies. All the bookmarked movies are stored in local-storage
              making it reusable even after closing the tab.
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
              Movies application is a application built using React which fetch
              movies detail using REST api. Allowing user to add their favorite
              movies. All the bookmarked movies are stored in local-storage
              making it reusable even after closing the tab.
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
              Movies application is a application built using React which fetch
              movies detail using REST api. Allowing user to add their favorite
              movies. All the bookmarked movies are stored in local-storage
              making it reusable even after closing the tab.
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
              Movies application is a application built using React which fetch
              movies detail using REST api. Allowing user to add their favorite
              movies. All the bookmarked movies are stored in local-storage
              making it reusable even after closing the tab.
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
  );
};

export default Project;
