import React from 'react';
import './FoodName.css';

interface FoodNameProps {
    name: string;
}

const FoodName: React.FC<FoodNameProps> = ({ name }) => {
    return <h3 className="food-name">{name}</h3>;
};

export default FoodName;
