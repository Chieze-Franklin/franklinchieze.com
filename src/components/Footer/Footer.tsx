import React from 'react';
import { useReactToPrint } from 'react-to-print';

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
// import print from '../../assets/images/print.svg';

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

export const Footer = ({ color = "transparent", showPrint = false, printOptions }) => {

  const handlePrint = useReactToPrint({
    content: () => printOptions.componentRef.current,
    documentTitle: "Franklin Chieze - Resume",
    // pageStyle: `
    // @page {
    //   size: 250mm 297mm;
    //   /* size: A4; */
    //   margin: 0;
    // }
  
    // @media all {
    //   .pagebreak {
    //     display: none;
    //   }
    // }
  
    // @media print {
    //   .pagebreak {
    //     /*page-break-before: always;*/
    //   }
    // }
    // `,
  });

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
        <button title="Print resume" className="print-icon" onClick={() => {
            if (handlePrint) {
              window.scrollTo(0, 0); // this counters the bug that occurs when printing a scrolled page
              handlePrint();
            }
          }
        }>
          &#128424; {/* 🖨 */}
          {/* <img src={print} width="30" alt="Print resume icon" /> */}
        </button>
      )}
    </footer>
  )
}
