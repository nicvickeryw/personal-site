import React from 'react';
import ContentHeader from '../content-header/ContentHeader';

export const Projects: React.FC = props => {
    return (
        <React.Fragment>
            <ContentHeader dividerColour={'green'} title={'Projects'} />
            <p>Content</p>
        </React.Fragment>
    );
};

export default Projects;
