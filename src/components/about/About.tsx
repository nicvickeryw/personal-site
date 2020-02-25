import React from 'react';
import ContentHeader from '../content-header/ContentHeader';

export const About: React.FC = props => {
    return (
        <React.Fragment>
            <ContentHeader dividerColour={'green'} title={'About'} />
            <div className="body">
                <h3>
                    Hey there! <span style={{ fontSize: '26px' }}>👋</span>
                </h3>
                <h4>My name is Nic.</h4>
                <p>
                    I'm a skilled, driven and motivated software developer from
                    Wollongong, NSW.
                </p>
                <p>
                    I'm currently working as for Padua Financial Group, where I
                    use PHP alongside SilverStripe for our back-end RESTful API
                    development, alongside an Angular 2+ front-end system, all
                    hosted on local machines or AWS microservices.
                </p>
                <p>
                    As a full-stack developer, my development toolkit includes a
                    wide variety of languages like JavaScript/TypeScript, PHP,
                    HTML/SCSS, C# .NET, with a specialisation in the former two.
                    Although my speciality lies in building fluid and responsive
                    UIs, I have a background in network design & architecture.
                </p>
            </div>
        </React.Fragment>
    );
};

export default About;
