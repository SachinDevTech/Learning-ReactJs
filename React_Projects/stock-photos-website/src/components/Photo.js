import React from "react";
import './Photo.css';

const Photo = ({ photo }) => {
  return (
    <article className="photo">
      <img src={photo.urls.small} alt={photo.alt_description} className="photo-img" />
      <div className="photo-info">
        <p>Photographer: {photo.user.name}</p>
        <p>Description: {photo.description || "No description available"}</p>
        <a 
          href={photo.urls.full} 
          download 
          className="download-btn"
        >
          Download
        </a>
      </div>
    </article>
  );
};

export default Photo;
