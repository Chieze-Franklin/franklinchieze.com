import React from 'react';
import { Sticky, StickyContainer } from "react-sticky";

import line from '../../assets/images/line.svg';

export const Experience = (props: any) => {

  return (
    <StickyContainer>
      <div className="container mt-md-5 profile-main-section" style={{ pageBreakAfter: "auto" }}>
        <Sticky>{({ style }) => {delete style.left; delete style.width; console.log(style); return (
          <div className="row" style={{...style, paddingTop: 30, zIndex: 1, backgroundColor: "white", width: "100vw" }}>
            <div className="col-12 mt-5">
              <h3 className="text-center">
              <img src={line} className="line" alt="Line" />
              <span className="px-2 header">{props.title}</span>
              <img src={line} className="line" alt="Line" />
              </h3>
            </div>
          </div>
        )}}</Sticky>
          {props.children}
      </div>
    </StickyContainer>
  )
}
