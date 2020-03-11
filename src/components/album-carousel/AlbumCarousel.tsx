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

export interface AlbumsAPIData {
    artist: {
        url: string;
        name: string;
        mbid: string;
    };
    image: { size: string; ['#text']: string }[];
    playcount: string;
    url: string;
    name: string;
    mbid: string;
    // also has @attr
}

export const AlbumCarousel: React.FC = props => {
    const [albumData, setAlbumData] = useState<AlbumsAPIData[]>([]);

    if (!albumData.length) {
        axios
            .get('/.netlify/functions/lastfm-query-handler', {
                headers: { Accept: 'application/json' },
            })
            .then(
                ({
                    data: {
                        topalbums: { album },
                    },
                }) => {
                    console.log(album[0].attr);
                    setAlbumData(album);
                }
            );
    }

    return (
        <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={60}
            totalSlides={albumData.length}
            visibleSlides={4}
        >
            <Slider>
                {albumData.map((album, i) => {
                    const albumImageObject = album.image.find(
                        image => image.size === 'extralarge'
                    );

                    if (albumImageObject) {
                        console.log(albumImageObject['#text']);
                    }

                    return (
                        <Slide
                            key={i}
                            style={{ backgroundColor: 'grey' }}
                            index={i}
                        >
                            <p>{album.name}</p>
                            <img
                                alt="lol"
                                src={
                                    albumImageObject
                                        ? albumImageObject['#text']
                                        : ''
                                }
                            />
                        </Slide>
                    );
                })}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    );
};
