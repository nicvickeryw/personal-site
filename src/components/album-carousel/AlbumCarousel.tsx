import React, { useState } from 'react';
import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    Slide,
    Slider,
} from 'pure-react-carousel';
import { ALBUM_DATA } from '../interests/albums';
import axios from 'axios';

export const AlbumCarousel: React.FC = props => {
    const [albumData, setAlbumData] = useState(ALBUM_DATA);

    axios
        .get('/.netlify/functions/lastfm-query-handler', {
            headers: { Accept: 'application/json' },
        })
        .then(result => {
            console.log(result);
        });

    return (
        <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={30}
            totalSlides={albumData.length}
            visibleSlides={4}
        >
            <Slider>
                {albumData.map((data, i) => {
                    return (
                        <Slide
                            key={i}
                            style={{ backgroundColor: 'red' }}
                            index={i}
                        >
                            I am the {data.id} Slide.
                        </Slide>
                    );
                })}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    );
};
