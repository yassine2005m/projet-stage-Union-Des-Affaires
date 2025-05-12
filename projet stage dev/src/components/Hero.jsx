import React from 'react';
import './Hero.css';
import logo from '../assets/logo.png';
import heroImg from '../assets/hero-office.jpg';

const Hero = () => {
  return (
    <section className="hero-section hero-split" id="accueil">
      <div className="container hero-split-container">
        <div className="hero-split-left">
          <div className="contact-logo-premium">
            <img src={logo} alt="Logo Union des Affaires" className="logo-premium-img" loading="lazy" />
          </div>
          <div className="hero-badge">
            <i className="fas fa-award"></i>
            <span>Centre d'Affaires</span>
          </div>
          <h1>Votre Espace Professionnel d'Excellence</h1>
          <p className="hero-subtitle">Solutions complètes pour développer votre entreprise dans un environnement premium au cœur de Casablanca</p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              <i className="fas fa-rocket"></i> Découvrir nos services
            </a>
            <a href="#contact" className="btn btn-secondary">
              <i className="fas fa-calendar-alt"></i> Visiter nos locaux
            </a>
          </div>
          <div className="trust-badges trust-badges-column">
            <div className="badge">
              <i className="fas fa-award"></i>
              <span>15 ans d'excellence</span>
            </div>
            <div className="badge">
              <i className="fas fa-users"></i>
              <span>1000+ clients satisfaits</span>
            </div>
            <div className="badge">
              <i className="fas fa-star"></i>
              <span>4.9/5 satisfaction</span>
            </div>
          </div>
        </div>
        <div className="hero-split-right">
          <img src={heroImg} alt="Espace Union des Affaires" className="hero-split-img" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 