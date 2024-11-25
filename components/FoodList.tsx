import React from 'react';
import './FoodList.css';
import FoodItem from './FoodItem';

const foodData = [
    { id: '1', src: '/images/image1.jpg', alt: 'Desayuno Americano', name: 'Desayuno Americano', stars: 5 },
    { id: '16', src: '/images/image2.jpg', alt: 'Ensalada de langosta', name: 'Ensalada de langosta', stars: 5 },
    { id: '6', src: '/images/image3.jpg', alt: 'Pique Macho', name: 'Pique Macho', stars: 5 },
    { id: '7', src: '/images/image4.jpg', alt: 'Pampaku', name: 'Pampaku', stars: 5 },
];

const FoodList = () => {
    return (
        <section className="food-list">
            <h2>Platos Principales</h2>
            {foodData.map((food) => (
                <FoodItem
                    key={food.id}
                    src={food.src}
                    alt={food.alt}
                    name={food.name}
                    stars={food.stars}
                    id={food.id} 
                />
            ))}
        </section>
    );
};

export default FoodList;
