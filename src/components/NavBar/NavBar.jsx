import React, { useRef, useState } from "react";
import Profile from "../../images/profile_pic.png";
import "./style.css";
import { motion } from "framer-motion";
const NavBar = () => {
  const [active, setActive] = useState(false);
  const small_screen = useRef(null);
  const hamburger = useRef(null);
  const hamburger_close = useRef(null);

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

  return (
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
            <a href="/home">Home</a>
          </motion.li>
          <motion.li
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
            <a href="/home">About</a>
          </motion.li>
          <motion.li
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <a href="/home">Projects</a>
          </motion.li>
          <motion.li
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <a href="/home">Contact</a>
          </motion.li>
          <div className="icons">
            <i
              class="material-icons hamburger active"
              ref={hamburger}
              onClick={handleClick}
            >
              menu
            </i>
            <i
              class="fa-solid fa-xmark hamburger_close"
              ref={hamburger_close}
              onClick={handleClick}
            ></i>
          </div>
        </ul>
      </nav>
      <ul className="small_screen" ref={small_screen} >
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/home">About</a>
        </li>
        <li>
          <a href="/home">Projects</a>
        </li>
        <li>
          <a href="/home">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
