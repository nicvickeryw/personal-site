import React from 'react';

export interface ContentHeaderProps {
    dividerColour: string;
    title: string;
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({
    dividerColour,
    title,
}) => {
    const classes = `divider-thick bg-${dividerColour}-dark`;

    return (
        <header>
            <h1>{title}</h1>
            <hr className={classes} />
        </header>
    );
};
