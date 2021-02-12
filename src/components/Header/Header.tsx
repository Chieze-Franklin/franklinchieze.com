import React from 'react';
import { Link } from 'react-router-dom';

import bars from '../../assets/images/bars.svg';
import barsDark from '../../assets/images/bars-dark.svg';
import file from '../../assets/images/file.svg';
import fileDark from '../../assets/images/file-dark.svg';
import home from '../../assets/images/home.svg';
import homeDark from '../../assets/images/home-dark.svg';
import logo from '../../assets/images/logo.jpg';

const HeaderIcon = ({image, url, description, width}) => {
  return (
    <Link
      to={url}
      className="nav-link"
      data-toggle="tooltip"
      data-placement="bottom"
      title={description}
    >
      <img
        src={image}
        width={width}
        alt={description}
      />
      {/* <span className="sr-only">(current)</span> */}
    </Link>
  );
}

export const Header = ({color, fixed = false, shadow = false}) => {

  return (
    <header>
      <nav className={`navbar navbar-expand-lg navbar-light ${fixed ? "fixed-top" : ""} bg-${color} ${shadow ? "shadow-sm" : ""}`}>
        <Link to="\" className="navbar-brand">
          <img src={logo} id="logo" alt="logo" width="40" height="40" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={color === "white" ? barsDark : bars} width="25" alt="Hamburger" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <HeaderIcon url="/" image={color === "white" ? homeDark : home} description="Home page" width="25" />
            </li>
            <li className="nav-item">
              <HeaderIcon url="/resume" image={color === "white" ? fileDark : file} description="Resume page" width="15" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
