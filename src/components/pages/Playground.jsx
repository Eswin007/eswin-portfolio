import React from "react";
import DayNightToggle from "../playground/DayNightToggle";
import Avatar from "../playground/Avatar";
import HeartToggle from "../playground/HeartToggle";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Playground = () => {
  return (
    <div className="playground">
      <div className="playground__title">Playground</div>
      <div className="playground__items">
        <div className="playground__item">
          <a
            target="_blank"
            href="https://github.com/Eswin007/directory"
            className="playground__git-link"
          >
            <FontAwesomeIcon className="btn-icon" icon={faGithub} /> Github
          </a>
          <DayNightToggle />
        </div>
        <div className="playground__item">
          <a
            target="_blank"
            href="https://github.com/Eswin007/directory"
            className="playground__git-link"
          >
            <FontAwesomeIcon className="btn-icon" icon={faGithub} /> Github
          </a>
          <Avatar />
        </div>
        <div className="playground__item">
          <a
            target="_blank"
            href="https://github.com/Eswin007/directory"
            className="playground__git-link"
          >
            <FontAwesomeIcon className="btn-icon" icon={faGithub} /> Github
          </a>
          <HeartToggle />
        </div>
      </div>
    </div>
  );
};

export default Playground;
