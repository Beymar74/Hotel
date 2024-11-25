import React from 'react';
import './ChefTitle.css';

const ChefTitle: React.FC<{ title: string }> = ({ title }) => (
  <p className="chef-title">{title}</p>
);

export default ChefTitle;
