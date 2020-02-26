import React from 'react';
import './Card.scss';

interface CardProps {
    style?: any;
}

export const Card: React.FC<CardProps> = ({ style, children }) => {
    return (
        <div style={style} className="card-container">
            {children}
        </div>
    );
};

export default Card;
