import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import Leetcode from "../../images/leetcode.png";
const Main = () => {
  return (
    <div className="main">
      <div className="socials">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/shubhamgupta2000/"
              target="blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/shuhbamgupta23" target="blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/mrjanuaryx/" target="blank">
              <img src={Leetcode} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <main>
        <h1>HEY, I'M SHUBHAM GUPTA</h1>
        <p>
          A Full Stack Web Developer building Full Fledged Websites and Web
          Applications that leads to the success of the overall product.
        </p>
        <motion.button
          drag
          whileHover={{ scale: 1.05, y: "-5px"}}
          dragConstraints={{
            right: 10,
            left: 10,
            top: 10,
            bottom: 10,
          }}
          initial={{ y: -1500 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          
        >
          <a href="/">Projects</a>
        </motion.button>

      </main>
    </div>
  );
};

export default Main;
