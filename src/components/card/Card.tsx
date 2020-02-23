import React from 'react';
import './Card.scss';

interface CardProps {
    width: string;
}

export const Card: React.FC<CardProps> = (props: any) => {
    return <div className="card-container">{props.children}</div>;
};

export default Card;
