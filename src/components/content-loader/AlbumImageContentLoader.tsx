import React from 'react';
import ContentLoader from 'react-content-loader';

export const AlbumImageContentLoader: React.FC<{ style: any }> = props => {
    return (
        <ContentLoader
            speed={2}
            width={300}
            height={400}
            viewBox="0 0 300 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="19" y="8" rx="2" ry="2" width="300" height="300" />
            <rect x="139" y="316" rx="0" ry="0" width="57" height="14" />
            <rect x="80" y="341" rx="0" ry="0" width="176" height="15" />
            <rect x="82" y="364" rx="0" ry="0" width="176" height="15" />
        </ContentLoader>
    );
};

export default AlbumImageContentLoader;
