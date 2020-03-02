import React from 'react';
import { useAnimClassState } from '../../common/helpers/use-anim-class-state';

export interface ContentHeaderProps {
    dividerColour: string;
    title: string;
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({
    dividerColour,
    title,
}) => {
    const classes = `divider-thick bg-${dividerColour}`;
    let topHeadingAnimClasses = useAnimClassState(
        0,
        'hidden',
        null,
        'fade-in-above visible'
    );

    return (
        <header>
            <h1 className={topHeadingAnimClasses}>{title}</h1>
            <hr className={classes} />
        </header>
    );
};

export default ContentHeader;
