import React from "react";

const Header = () => {
  return (
    <div className="header-wrap ">
      <header className="header max-width-wrap">
        <div className="header__logo">ED</div>
        <menu className="header__menu">
          <li className="header__item">
            <a href="" className="header__item-link">
              about
            </a>
          </li>
          <li className="header__item">
            <a href="" className="header__item-link">
              works
            </a>
          </li>
        </menu>
      </header>
    </div>
  );
};

export default Header;
