import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './AnimatedLink.scss';

interface LinkProps {
    route: string;
    title: string;
    selectIndex: (e: any) => any;
    index: number;
    isSelected: boolean;
    fontSize: string;
}

export const AnimatedLink: React.FC<LinkProps> = ({
    title,
    route,
    isSelected,
    selectIndex,
    index,
    fontSize,
}) => {
    // If this item is selected, keep the underline and bold props. Enforce via dynamic class name.
    let classes = 'link';
    if (isSelected) {
        classes = 'selected-link';
    }

    return (
        <RouterLink
            to={`/${route}`}
            onClick={() => selectIndex(index)}
            className={classes}
            style={{ fontSize }}
        >
            {title}
        </RouterLink>
    );
};
