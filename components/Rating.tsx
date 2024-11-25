import React from 'react';

interface RatingProps {
    stars: number;
}

const Rating: React.FC<RatingProps> = ({ stars }) => {
    return (
        <div className="rating">
            {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
        </div>
    );
};

export default Rating;
