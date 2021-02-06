import React from 'react';

import facebook from '../../assets/images/facebook.svg';
import github from '../../assets/images/github.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedin from '../../assets/images/linkedin.svg';
import twitter from '../../assets/images/twitter.svg';

const FooterIcons = ({image, url, description}) => {
  return (
    <a
      className="nav-link"
      href={url}
      data-toggle="tooltip"
      data-placement="top"
      title={description}
      target="_blank"
      rel="noreferrer"
      ><img
        src={image}
        width="18"
        alt={description}
    /></a>
  );
}

export const Footer = () => {

  return (
    <footer className="fixed-bottom">
      <ul className="nav px-3">
        <li className="nav-item">
          <FooterIcons image={github} url="https://github.com/Chieze-Franklin" description="Github profile" />
        </li>
        <li className="nav-item">
          <FooterIcons image={twitter} url="https://twitter.com/franklin_chieze" description="Twitter profile" />
        </li>
        <li className="nav-item">
          <FooterIcons image={linkedin} url="https://www.linkedin.com/in/franklin-chieze/" description="LinkedIn profile" />
        </li>
        <li className="nav-item">
          <FooterIcons image={instagram} url="https://www.instagram.com/franklinchieze/" description="Instagram profile" />
        </li>
        <li className="nav-item">
          <FooterIcons image={facebook} url="https://web.facebook.com/franklin.chieze.5" description="Facebook profile" />
        </li>
      </ul>
    </footer>
  )
}
