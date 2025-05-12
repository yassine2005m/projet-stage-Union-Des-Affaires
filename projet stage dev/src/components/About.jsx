import React from 'react';
import './About.css';
import aboutImg from '../assets/about-office.jpg';

const About = () => (
  <section className="about-section" id="about">
    <div className="container about-content">
      <div className="about-text">
        <span className="section-tag">À propos</span>
        <h2>Union des Affaires</h2>
        <p className="about-subtitle">Votre partenaire pour le développement de votre entreprise depuis 2010</p>
        <ul className="features-list">
          <li><i className="fas fa-map-marker-alt"></i> Localisation stratégique au cœur de Casablanca</li>
          <li><i className="fas fa-shield-alt"></i> Infrastructure haut de gamme et sécurisée</li>
          <li><i className="fas fa-users"></i> Équipe dédiée et professionnelle</li>
          <li><i className="fas fa-sliders-h"></i> Solutions flexibles adaptées à vos besoins</li>
        </ul>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Années d'expérience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Clients satisfaits</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support client</span>
          </div>
        </div>
      </div>
      <div className="about-image">
        <img src={aboutImg} alt="Nos espaces de travail" loading="lazy" />
      </div>
    </div>
  </section>
);

export default About; 