import React from 'react';
import './ChefImage.css';

type ChefImageProps = {
  src: string;
  alt: string;
};

const ChefImage: React.FC<ChefImageProps> = ({ src, alt }) => (
  <img className="chef-image" src={src} alt={alt} />
);

export default ChefImage;
