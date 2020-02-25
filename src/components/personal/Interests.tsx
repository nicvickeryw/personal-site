import React from 'react';
import ContentHeader from '../content-header/ContentHeader';

export const Interests: React.FC = props => {
    return (
        <React.Fragment>
            <ContentHeader dividerColour={'green'} title={'Interests'} />
            <div className="body">
                <p>Some of my favourite things to do are:</p>
                <ul>
                    <li>Eat food</li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Interests;
