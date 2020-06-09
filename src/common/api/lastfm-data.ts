export interface AlbumsAPIData {
    artist: {
        url: string;
        name: string;
        mbid: string;
    };
    image: Image[];
    playcount: string;
    url: string;
    name: string;
    mbid: string;
    ['@attr']: { rank: string };
}

export interface Image {
    size: 'small' | 'medium' | 'large' | 'extralarge'; // Size for source image
    ['#text']: string; // Link to source image
}
