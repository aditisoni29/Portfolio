import React from 'react';

function ProjectCard({ src, link, h3, p, title, description }) {
  return (
    <a href={link} target="_blank" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card__image">
        <img className="hover" src={src} alt={`${h3} logo`} style={{ width: '200px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}/>
      </div>
      <div className="card__content">
        <h3>{h3}</h3>
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
        <p>{p}</p>
      </div>
    </a>
  );
}

export default ProjectCard;