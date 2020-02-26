import React from 'react';
import ContentHeader from '../content-header/ContentHeader';
import { useAnimClassState } from '../../common/helpers/use-anim-class-state';
import Card from '../card/Card';
import { Chip } from '../badge/Chip';

export const About: React.FC = props => {
    const contentClassToAdd = 'fade-in-below visible';
    let firstSubHeadingAnimClasses = useAnimClassState(
        0,
        'hidden',
        contentClassToAdd
    );
    let secondSubHeadingAnimClasses = useAnimClassState(
        500,
        'hidden',
        contentClassToAdd
    );
    let thirdSubHeadingAnimClasses = useAnimClassState(
        1000,
        'hidden',
        contentClassToAdd
    );

    return (
        <React.Fragment>
            <ContentHeader dividerColour={'green'} title={'About'} />
            <div className="body">
                <h3 className={firstSubHeadingAnimClasses}>
                    Hey there! <span style={{ fontSize: '26px' }}>👋</span>
                </h3>
                <h4 className={secondSubHeadingAnimClasses}>My name is Nic.</h4>
                <div className={thirdSubHeadingAnimClasses}>
                    <p>
                        I'm a skilled, driven and motivated software developer
                        from Wollongong, NSW.
                    </p>
                    <p>
                        I'm currently working for Padua Financial Group, where I
                        use <b>PHP</b> alongside SilverStripe for our back-end
                        RESTful API development, alongside an
                        <b> Angular 2+ </b>
                        front-end system, all hosted on <b>AWS EC2 & S3</b>.
                    </p>
                    <p>
                        Although my current speciality lies in building fluid
                        and responsive UIs, I have a background in network
                        design & architecture - which means I'm also well
                        acquainted with how things work under the hood.
                    </p>
                    <p>These are the languages I'm confident using:</p>
                    <ul>
                        <li>
                            <b>TypeScript/JavaScript</b>
                        </li>
                        <li>
                            <b>PHP</b>
                        </li>
                        <li>HTML/SCSS</li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                    <br />
                    <Card style={{ marginBottom: '50px' }}>
                        <h3>Skills</h3>
                        <div className="skills-chips">
                            <Chip>React</Chip>
                            <Chip>Angular 2+</Chip>
                            <Chip>Material Design</Chip>
                            <Chip>GraphQL</Chip>
                            <Chip>Apollo Client/Server</Chip>
                            <Chip>Amazon Web Services</Chip>
                        </div>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
