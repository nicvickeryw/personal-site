import React from 'react';
import './Card.scss'

export const Card: React.FC = (props: any) => {
    return <div className="card-container">
        {props.children}
    </div>;
};

export default Card;
