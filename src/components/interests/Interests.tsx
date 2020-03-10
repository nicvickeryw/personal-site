import React from 'react';
import ContentHeader from '../content-header/ContentHeader';
import { useAnimClassState } from '../../common/helpers/use-anim-class-state';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { AlbumCarousel } from '../album-carousel/AlbumCarousel';

export const Interests: React.FC = props => {
    let classes = useAnimClassState(0, 'body hidden', 'fade-in-below visible');
    console.log(process.env.LAST_FM_API_KEY);
    return (
        <React.Fragment>
            <ContentHeader dividerColour={'green'} title={'Interests'} />
            <div className={classes}>
                <h3>Music</h3>
                <p>{process.env.LAST_FM_API_KEY}</p>
                <p>Here are some of the albums I've been enjoying recently:</p>
                <AlbumCarousel />
            </div>
        </React.Fragment>
    );
};

export default Interests;
