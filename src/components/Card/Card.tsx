import React from 'react';

export const Card = ({title, text, url, urlText}) => {
  return (
    <div className="card px-3 py-4 mb-2">
      <div className="card-body text-dark">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={url} className="card-link" target="_blank" rel="noreferrer">{urlText}</a>
      </div>
    </div>
  )
}
