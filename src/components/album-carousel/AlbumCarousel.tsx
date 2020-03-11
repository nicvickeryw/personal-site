import React, { useState } from 'react';
import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    DotGroup,
    Slide,
    Slider,
    Image,
} from 'pure-react-carousel';
import axios from 'axios';
import './AlbumCarousel.scss';

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
    ['@attr']: { rank: string };
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
                    console.log(album);
                    setAlbumData(album);
                }
            );
    }

    const albumJSX = albumData.map((album, i) => {
        const albumImageObject = album.image.find(
            image => image.size === 'extralarge'
        );

        return (
            <Slide key={i} index={i}>
                <div className={'album-item-container'}>
                    <h3 style={{ textAlign: 'center' }}>
                        #{album['@attr'].rank}
                    </h3>
                    <img
                        alt="lol"
                        src={albumImageObject ? albumImageObject['#text'] : ''}
                    />
                    <span
                        style={{
                            marginTop: '15px',
                            textAlign: 'center',
                            display: 'grid',
                        }}
                    >
                        <span>
                            <b>{album.name}</b>
                        </span>
                        <span>{album.artist.name}</span>
                    </span>
                </div>
            </Slide>
        );
    });

    return (
        <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={60}
            totalSlides={albumData.length}
            visibleSlides={4}
            hasMasterSpinner={!albumData.length}
            isPlaying={true}
            step={1}
            infinite
        >
            <div className="slider-container">
                <Slider
                    className="album-item-background"
                    style={{ height: '430px' }}
                >
                    {albumJSX}
                </Slider>
                <ButtonBack className="button-back">Back</ButtonBack>
                <ButtonNext className="button-next">Next</ButtonNext>
            </div>
            <div className="dot-group-container">
                <DotGroup
                    dotNumbers={true}
                    showAsSelectedForCurrentSlideOnly={true}
                />
            </div>
        </CarouselProvider>
    );
};
