import React, { useState } from 'react';
import './Testimonials.css';
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';

const testimonials = [
  {
    text: "L'espace de coworking a transformé notre façon de travailler. L'environnement est inspirant et les services impeccables.",
    name: 'Mohamed K.',
    role: 'CEO, TechSolutions',
    img: client1,
    rating: 5,
  },
  {
    text: "Le service de domiciliation nous a permis d'avoir une adresse prestigieuse sans les coûts d'un bureau traditionnel.",
    name: 'Fatima Z.',
    role: 'Directrice, GreenImport',
    img: client2,
    rating: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[index];
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Témoignages</span>
          <h2>Ils nous font confiance</h2>
          <p className="section-subtitle">Découvrez ce que nos clients disent de nos services</p>
        </div>
        <div className="testimonials-slider">
          <button className="slider-btn left" onClick={prev} aria-label="Précédent">&#8592;</button>
          <div className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(t.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
            </div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <img src={t.img} alt={t.name} loading="lazy" />
              <div className="author-info">
                <h4>{t.name}</h4>
                <small>{t.role}</small>
              </div>
            </div>
          </div>
          <button className="slider-btn right" onClick={next} aria-label="Suivant">&#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 