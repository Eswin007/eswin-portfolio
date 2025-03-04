import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = ["about", "works"];

  return (
    <div className="header-wrap ">
      <header className="header max-width-wrap">
        <div className="header__logo">
          <NavLink to="/">ED</NavLink>
        </div>
        <menu className="header__menu">
          {links.map((link) => (
            <li className="header__item">
              <NavLink
                to={`/${link}`}
                className={({ isActive }) =>
                  `header__item-link ${isActive ? "active" : ""}`
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </menu>
      </header>
    </div>
  );
};

export default Header;
