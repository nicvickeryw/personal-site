import React from 'react';
import ContentHeader from '../content-header/ContentHeader';
import { useAnimClassState } from '../../common/helpers/use-anim-class-state';

export const Interests: React.FC = props => {
    let classes = useAnimClassState(
        0,
        'body hidden',
        null,
        'fade-in-below visible'
    );
    return (
        <React.Fragment>
            <ContentHeader dividerColour={'green'} title={'Interests'} />
            <div className={classes}>
                <p>Some of my favourite things to do are:</p>
                <ul>
                    <li>Eat food</li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Interests;
