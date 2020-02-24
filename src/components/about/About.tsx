import React from 'react';
import Card from '../card/Card';

export const About: React.FC = (props: any) => {
    return (
        <React.Fragment>
            <header>
                <h1>About me</h1>
                <hr/>
            </header>
            <h4>Hey there!</h4>
            <p>I'm a professional software developer from Wollongong, NSW.</p>
            <p>
                As a full-stack developer, my development toolkit includes JavaScript/TypeScript, PHP, HTML/SCSS, C# .NET.
            </p>
            <p>
                On weekends I like to do stuff like this!
            </p>
        </React.Fragment>
    );
};
