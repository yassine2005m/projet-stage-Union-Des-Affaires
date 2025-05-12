import React from 'react';
import './Gallery.css';
import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';

const images = [
  { src: img1, caption: 'Espace de travail commun' },
  { src: img2, caption: 'Bureau privatif' },
  { src: img3, caption: 'Salle de réunion' },
  { src: img4, caption: 'Espace détente' },
];

const Gallery = () => (
  <section className="gallery-section" id="gallery">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">Galerie</span>
        <h2>Nos Espaces & Réalisations</h2>
        <p className="section-subtitle">Découvrez nos locaux, notre équipe et nos événements en images</p>
      </div>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div className="gallery-item gallery-hover" key={i}>
            <img src={img.src} alt={img.caption} loading="lazy" />
            <div className="gallery-overlay">{img.caption}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery; 