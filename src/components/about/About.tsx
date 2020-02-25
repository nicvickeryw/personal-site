import React from 'react';
import ContentHeader from '../content-header/ContentHeader';

export const About: React.FC = props => {
    return (
        <React.Fragment>
            <ContentHeader dividerColour={'green'} title={'About'} />
            <div className="body">
                <h4>Hey there!</h4>
                <p>
                    I'm a professional software developer from Wollongong, NSW.
                </p>
                <p>
                    As a full-stack developer, my development toolkit includes
                    JavaScript/TypeScript, PHP, HTML/SCSS, C# .NET, with a
                    specialisation in the former two. Although my speciality
                    lies in building fluid and responsive UIs, I have a
                    background in network design & architecture.
                </p>
            </div>
        </React.Fragment>
    );
};

export default About;
