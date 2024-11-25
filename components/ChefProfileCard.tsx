import React from 'react';
import './ChefProfileCard.css';

const ChefProfileCard = () => (
  <div className="chef-profile-card">
    <div className="background-image">
      <img src="/images/bandera.png" alt="Bandera" className="flag-image" />
    </div>
    <div className="chef-info">
      <img src="/images/chef.png" alt="Chef" className="chef-image" />
      <h2 className="chef-name">ÓSCAR MORA</h2>
      <p className="chef-title">Chef, Maestro Culinario Y Educador Gastronómico</p>
      <div className="rating-stars">★★★★★</div>
      <p className="chef-description">
      Óscar Mora es un chef y docente boliviano de gran influencia, reconocido tanto por su habilidad en la cocina como por su compromiso en la formación de nuevos talentos en la gastronomía boliviana. En 2012, funda el Instituto Tecnológico Superior de Gastronomía Bolivia Gourmet, con el objetivo de profesionalizar la gastronomía en el país y crear un espacio educativo para futuras generaciones de chefs. Destaca en la repostería y en la creación de recetas innovadoras, participando en programas de televisión y eventos culinarios, y consolidando así su lugar en el ámbito gastronómico boliviano.      </p>
    </div>
  </div>
);

export default ChefProfileCard;
