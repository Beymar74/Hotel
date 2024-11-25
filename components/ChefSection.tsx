import React from 'react';
import ChefProfileCard from './ChefProfileCard';
import './ChefSection.css';

const ChefSection = () => (
  <section className="chef-section">
    <div className="back-button">← Chef del Hotel</div>
    <h1 className="section-title">El Chef</h1>
    <ChefProfileCard />
  </section>
);

export default ChefSection;
