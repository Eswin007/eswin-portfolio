import React from "react";
import parishDirectory from "../../assets/showcase.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import Playground from "./Playground";
import { motion } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";

const Works = () => {
  return (
    <div className="works-wrap">
      <div className="works max-width-wrap">
        <div className="works__title">works.</div>
        <div className="works__body">
          Feel free to explore, admire, or even critique—but if you find a bug,
          let’s just call it an “undocumented feature,” shall we?
        </div>
        <div className="works__directory">
          <img src={parishDirectory} alt="" />
          <div className="works__directory-details">
            <h3>Directory App</h3>
            <p>
              A React-based directory for managing parish families and members.
              It supports adding, editing, and deleting entries, photo uploads,
              search, and filtering. Built with Supabase for data management and
              deployed on Vercel.
            </p>
            <div className="works__btn-wrap">
              {/* <a className="btn btn-primary">
                Case Study{" "}
                <FontAwesomeIcon className="btn-icon" icon={faArrowRight} />{" "}
              </a> */}
              <NavLink className="btn btn-primary" to={`directory-case-study`}>
                Case Study
                <FontAwesomeIcon
                  className="btn-icon"
                  icon={faArrowRight}
                />{" "}
              </NavLink>
              <a
                target="_blank"
                href="https://github.com/Eswin007/directory"
                className="btn btn-primary"
              >
                <FontAwesomeIcon className="btn-icon" icon={faGithub} /> Github
              </a>

              <a
                target="_blank"
                href="https://directory-azure.vercel.app/"
                className="btn btn-primary accent"
              >
                <FontAwesomeIcon
                  className="btn-icon"
                  icon={faArrowUpRightFromSquare}
                />{" "}
                Open App
              </a>
            </div>
          </div>
        </div>

        <Playground />
      </div>
    </div>
  );
};

export default Works;
