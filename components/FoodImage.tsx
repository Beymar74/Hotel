import React from 'react';
import './FoodImage.css';

interface FoodImageProps {
    src: string;
    alt: string;
}

const FoodImage: React.FC<FoodImageProps> = ({ src, alt }) => {
    return <img src={src} alt={alt} className="food-image" />;
};

export default FoodImage;
