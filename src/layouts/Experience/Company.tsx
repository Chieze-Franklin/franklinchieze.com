import React from 'react';

export const Company = (props) => {
  const { company } = props;

  return (
    <div className="row mt-md-4">
        <div className="col-md-4">
            <div className="d-flex align-items-center mb-md-2 company">
              {company.logo && <img
                className="mr-md-2"
                src={company.logo}
                width="26"
                alt="Logo"
              />}
              <a href={company.website} target="_blank" rel="noreferrer">
                <span className="logo-text">{company.name}</span>
              </a>
            </div>
            {company.location && <div className="font-weight-bold address-font mb-md-2">{company.location}</div>}
            <div className="timeline-font">{company.startDate} - {company.endDate}</div>
        </div>
        <div className="col-md-8">
            <div className="profile-section overflow-auto">
            {props.children}
            </div>
        </div>
    </div>
  )
}
