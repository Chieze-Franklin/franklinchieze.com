import React from 'react';

import line from '../../assets/images/line.svg';

export const Experience = (props) => {

  return (
    <div className="container mt-md-5 profile-main-section">
        <div className="row">
            <div className="col-12 mt-5">
                <h3 className="text-center">
                <img src={line} className="line" alt="Line" />
                <span className="px-2 header">{props.title}</span>
                <img src={line} className="line" alt="Line" />
                </h3>
            </div>
        </div>
        {props.children}
    </div>
  )
}
