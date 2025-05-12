import React from 'react';
import './Services.css';

const services = [
  {
    icon: 'fas fa-users',
    title: 'Espace Coworking',
    desc: 'Bureaux équipés, accès 24/7, salles de réunion et réseau professionnel.',
    features: ['Accès 24/7', 'Salles de réunion', 'Réseau premium'],
    link: '#coworking',
  },
  {
    icon: 'fas fa-headset',
    title: 'Centre d\'Appel',
    desc: 'Externalisez votre service client avec des équipes qualifiées multilingues.',
    features: ['Équipes multilingues', 'Support 24/7', 'Solutions sur mesure'],
    link: '#centre-appel',
  },
  {
    icon: 'fas fa-shipping-fast',
    title: 'Import/Export',
    desc: 'Accompagnement complet pour vos opérations internationales.',
    features: ['Solutions logistiques', 'Support douane', 'Expertise internationale'],
    link: '#import-export',
  },
];

const Services = () => (
  <section className="services-section" id="services">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">Nos Services</span>
        <h2>Solutions Professionnelles Premium</h2>
        <p className="section-subtitle">Découvrez nos services conçus pour répondre à tous vos besoins d'entreprise</p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <article className="service-card" key={i}>
            <div className="service-icon">
              <i className={s.icon}></i>
            </div>
            <div className="service-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service-features">
                {s.features.map((f, j) => (
                  <li key={j}><i className="fas fa-check"></i> {f}</li>
                ))}
              </ul>
              <a href={s.link} className="service-link">
                En savoir plus <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services; 