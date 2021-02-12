import React from 'react';

export const Company = (props) => {

  return (
    <div className="row mt-md-4">
        <div className="col-md-4">
            <div className="d-flex align-items-center mb-md-2 company">
            <img
                className="mr-md-2"
                src="assets/images/logo.svg"
                width="26"
                alt="Logo"
            />
            <span className="logo-text">{props.name}</span>
            </div>
            <div className="font-weight-bold address-font mb-md-2">Lagos, Nigeria</div>
            <div className="timeline-font">Oct 2017 - Present</div>
        </div>
        <div className="col-md-8">
            <div className="profile-section overflow-auto">
            {props.children}
            </div>
        </div>
    </div>
  )
}
