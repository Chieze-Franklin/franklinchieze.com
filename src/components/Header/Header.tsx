import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';

// import './Header.less';

export const Header = () => {

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <Link to="\" className="navbar-brand">
          <img src={Logo} alt="logo" width="32" height="32" />
        </Link>
      </nav>
    </header>
  )
}
