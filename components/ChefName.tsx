import React from 'react';
import './ChefName.css';

const ChefName: React.FC<{ name: string }> = ({ name }) => (
  <h2 className="chef-name">{name}</h2>
);

export default ChefName;
