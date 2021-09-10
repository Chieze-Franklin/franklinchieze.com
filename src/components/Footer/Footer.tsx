import React from 'react';

import facebook from '../../assets/images/facebook.svg';
import facebookDark from '../../assets/images/facebook-dark.svg';
import github from '../../assets/images/github.svg';
import githubDark from '../../assets/images/github-dark.svg';
import instagram from '../../assets/images/instagram.svg';
import instagramDark from '../../assets/images/instagram-dark.svg';
import linkedin from '../../assets/images/linkedin.svg';
import linkedinDark from '../../assets/images/linkedin-dark.svg';
import twitter from '../../assets/images/twitter.svg';
import twitterDark from '../../assets/images/twitter-dark.svg';
import print from '../../assets/images/print.svg';

const FooterIcon = ({image, url, description}) => {
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

export const Footer = ({ color = "transparent", showPrint = false }) => {

  return (
    <footer className="fixed-bottom">
      <ul className="nav px-3">
        <li className="nav-item">
          <FooterIcon image={color === "white" ? githubDark : github} url="https://github.com/Chieze-Franklin" description="Github profile" />
        </li>
        <li className="nav-item">
          <FooterIcon image={color === "white" ? twitterDark : twitter} url="https://twitter.com/franklin_chieze" description="Twitter profile" />
        </li>
        <li className="nav-item">
          <FooterIcon image={color === "white" ? linkedinDark : linkedin} url="https://www.linkedin.com/in/franklin-chieze/" description="LinkedIn profile" />
        </li>
        <li className="nav-item">
          <FooterIcon image={color === "white" ? instagramDark : instagram} url="https://www.instagram.com/franklinchieze/" description="Instagram profile" />
        </li>
        <li className="nav-item">
          <FooterIcon image={color === "white" ? facebookDark : facebook} url="https://web.facebook.com/franklin.chieze.5" description="Facebook profile" />
        </li>
      </ul>

      {showPrint && (
        <div className="print-icon" onClick={() => alert("Hello")}>
          <img src={print} width="40" alt="Print resume icon" />
        </div>
      )}
    </footer>
  )
}
