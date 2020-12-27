import React from "react";
import profileImage from "../assets/profile.png";
import classes from "./navigation.module.css";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navigation = () => {
  const IconSize = 48;
  return (
    <div className={classes.navigation}>
      <div className={classes.navProfileContainer}>
        <Link to="/" className={classes.profileInfoContainer}>
          <img src={profileImage} className={classes.navProfile} />
          <span className={classes.name}>Aditya Pahilwani</span>
        </Link>
        <div className={classes.tagsContainer}>
          <div className={classes.tags}>
            <Link to="/Project" className={classes.navLink}>
              Projects
            </Link>
          </div>
          <a
            className={classes.tags}
            href="https://dev.to/insomaniacgamer"
            target="_blank"
          >
            <FaDev size={IconSize} />
          </a>
          <a
            className={classes.tags}
            href="https://github.com/Insomaniacgamer/"
            target="_blank"
          >
            <AiOutlineGithub size={IconSize} />
          </a>
          <a
            className={classes.tags}
            href="https://twitter.com/AdityaPahilwani"
            target="_blank"
          >
            <AiOutlineTwitter size={IconSize} />
          </a>
          <a
            className={classes.tags}
            href="https://www.linkedin.com/in/aditya-pahilwani-93b42bb5/"
            target="_blank"
          >
            <AiFillLinkedin size={IconSize} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
