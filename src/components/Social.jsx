import {
  faBehance,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Social = () => {
  return (
    <div className="social-wrap">
      <menu className="social max-width-wrap">
        <li className="social__items">
          <a
            href="https://www.linkedin.com/in/eswindixon/"
            className="social__link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>

        <li className="social__items">
          <a
            href="https://www.behance.net/eswindixon"
            className="social__link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faBehance} />
          </a>
        </li>

        <li className="social__items">
          <a
            href="https://www.instagram.com/eswindixon/"
            className="social__link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </menu>
    </div>
  );
};

export default Social;
