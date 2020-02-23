import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './AnimatedLink.scss';

interface LinkProps {
    route: string;
    title: string;
    fontSize: string;
    isSelected: boolean;
}

export const AnimatedLink: React.FC<LinkProps> = ({
    title,
    route,
    isSelected,
    fontSize,
}) => {
    return (
        <RouterLink
            to={`/${route}`}
            className={isSelected ? 'selected-link' : 'link'}
            style={{ fontSize }}
        >
            {title}
        </RouterLink>
    );
};
