import React, { useState } from 'react';
import ContentHeader from '../content-header/ContentHeader';
import { useAnimClassState } from '../../common/helpers/use-anim-class-state';
import axios from 'axios';
import HoverImageWrapper from '../hover-image-wrapper/HoverImageWrapper';
import { AlbumsAPIData } from '../../common/api/lastfm-data';
import AlbumImageContentLoader from '../content-loader/AlbumImageContentLoader';

const NUM_OF_ALBUMS = 25;

export const Interests: React.FC = () => {
    let [classes, hasMountedOnce] = useAnimClassState(
        0,
        'body hidden',
        'fade-in-below visible'
    );

    const [albumData, setAlbumData] = useState<AlbumsAPIData[]>([]),
        albums = albumData.map((album, i) => {
            const image = album.image.find(({ size }) => size === 'extralarge');

            return (
                <HoverImageWrapper
                    key={i}
                    rank={i}
                    title={album.name}
                    subtitle={album.artist.name}
                    src={image ? image['#text'] : ''}
                />
            );
        });

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

    return hasMountedOnce ? (
        <React.Fragment>
            <ContentHeader dividerColour={'green'} title={'Interests'} />
            <div className={classes}>
                <h3>Music</h3>
                <p>Here are some of the albums I've been enjoying recently:</p>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}
                >
                    {albums.length
                        ? albums
                        : Array.from(Array(NUM_OF_ALBUMS)).map((_, i) => (
                              <AlbumImageContentLoader
                                  key={i}
                                  style={{ margin: '20px' }}
                              />
                          ))}
                </div>
            </div>
        </React.Fragment>
    ) : null;
};

export default Interests;
