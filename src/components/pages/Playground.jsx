import React from "react";
import DayNightToggle from "../playground/DayNightToggle";
import Avatar from "../playground/Avatar";
import HeartToggle from "../playground/HeartToggle";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Playground = () => {
  return (
    <div className="playground">
      <div className="playground__title">Playground</div>
      <div className="playground__items">
        <div className="playground__item">
          <div className="playground__link-wrap">
           <a target="_blank" href="https://www.youtube.com/shorts/FwZYNwPLO-c" className="playground__yt-link"><FontAwesomeIcon icon={faYoutube} /></a>
          <a target="_blank"
            href="https://github.com/Eswin007/directory"
            className="playground__git-link"
          >
            <FontAwesomeIcon className="btn-icon" icon={faGithub} /> Github
          </a>
          </div>
          <DayNightToggle />
        </div>
        <div className="playground__item">
          <div className="playground__link-wrap">
           <a target="_blank" href="https://www.youtube.com/shorts/0eroIUWqNsM" className="playground__yt-link"><FontAwesomeIcon icon={faYoutube} /></a>
            <a
              target="_blank"
              href="https://github.com/Eswin007/directory"
              className="playground__git-link"
              >
              <FontAwesomeIcon className="btn-icon" icon={faGithub} /> Github
            </a>
              </div>
            <Avatar />
        </div>
        <div className="playground__item">
          <div className="playground__link-wrap">
           <a target="_blank" href="https://www.youtube.com/shorts/7ka-ZuIpvD4" className="playground__yt-link"><FontAwesomeIcon icon={faYoutube} /></a>

            <a
              target="_blank"
              href="https://github.com/Eswin007/directory"
              className="playground__git-link"
            >
              <FontAwesomeIcon className="btn-icon" icon={faGithub} /> Github
            </a>
          </div>
          <HeartToggle />
        </div>
      </div>
    </div>
  );
};

export default Playground;
