import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './AnimatedLink.scss';

interface LinkProps {
    route: string;
    title: string;
    fontSize: string;
    isSelected: boolean;
}

/**
 * Animated link component. Adds an animated underline when hovered or selected.
 *
 * @param title
 * @param route
 * @param isSelected
 * @param fontSize
 * @constructor
 */
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
            style={{ fontSize, maxHeight: '18px' }}
        >
            {title}
        </RouterLink>
    );
};
