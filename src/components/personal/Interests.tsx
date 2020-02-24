import React from 'react';
import { ContentHeader } from '../content-header/ContentHeader';

export const Interests: React.FC = props => {
    return (
        <React.Fragment>
            <ContentHeader dividerColour={'green'} title={'Interests'} />
            <div className="body">
                <p>This is the interests component.</p>
            </div>
        </React.Fragment>
    );
};
