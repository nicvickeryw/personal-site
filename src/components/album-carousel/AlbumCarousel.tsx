import React, { useContext, useState } from 'react';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import axios from 'axios';
import './AlbumCarousel.scss';
import ViewportContext from '../../common/context/viewport-context';
import { AlbumsAPIData, Image } from '../../common/api/lastfm-data';

const VIEWPORT_TYPE_TO_CAROUSEL_HEIGHT = {
    'desktop-lg': '460px',
    desktop: '320px',
    tablet: '320px',
    mobile: '220px',
};

export const AlbumCarousel: React.FC = props => {
    const [albumData, setAlbumData] = useState<AlbumsAPIData[]>([]),
        viewportType = useContext(ViewportContext),
        // Find the right size image for the viewport width
        findImageFromViewportWidth = ({ size }: Image) => {
            switch (viewportType) {
                case 'desktop-lg':
                    return size === 'extralarge';
                case 'desktop':
                case 'tablet':
                    return size === 'large';
                default:
                    return size === 'medium';
            }
        };

    if (!albumData.length) {
        axios
            .get('/.netlify/functions/lastfm-query-handler', {
                headers: { Accept: 'application/json' },
            })
            // It's really confusing that the LF API returns `album` instead of `albums` as an array..
            .then(({ data: { topalbums: { album: albums } } }) =>
                setAlbumData(albums)
            );
    }

    const albumJSX = albumData.map((album, i) => {
        const albumImageObject = album.image.find(findImageFromViewportWidth);

        return (
            <Slide key={i} index={i}>
                <div className={'album-item-container'}>
                    <h3 style={{ textAlign: 'center' }}>
                        #{album['@attr'].rank}
                    </h3>
                    <img
                        style={{ cursor: 'grab' }}
                        alt="test"
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
            visibleSlides={3}
            hasMasterSpinner={!albumData.length}
            isPlaying={true}
            step={1}
            infinite
        >
            <div className="slider-container">
                <Slider
                    className="album-item-background"
                    style={{
                        height: VIEWPORT_TYPE_TO_CAROUSEL_HEIGHT[viewportType],
                    }}
                >
                    {albumJSX}
                </Slider>
            </div>
        </CarouselProvider>
    );
};
