import React from 'react';
import ContentHeader from '../content-header/ContentHeader';
import { useAnimClassState } from '../../common/helpers/use-anim-class-state';
import Card from '../card/Card';
import { Chip } from '../badge/Chip';

export const About: React.FC = props => {
    const contentClassToAdd = 'fade-in-below visible';
    let [firstSubHeadingAnimClasses] = useAnimClassState(
        0,
        'hidden',
        contentClassToAdd
    );
    let [secondSubHeadingAnimClasses] = useAnimClassState(
        200,
        'hidden',
        contentClassToAdd
    );
    let [thirdSubHeadingAnimClasses] = useAnimClassState(
        300,
        'hidden',
        contentClassToAdd
    );

    return (
        <React.Fragment>
            <ContentHeader dividerColour={'green'} title={'About'} />
            <div className="body">
                <h3 className={firstSubHeadingAnimClasses}>
                    Hey there!{' '}
                    <span
                        role="img"
                        aria-label="waving-emoji"
                        style={{ fontSize: '26px' }}
                    >
                        👋
                    </span>
                </h3>
                <h4 className={secondSubHeadingAnimClasses}>My name is Nic.</h4>
                <div className={thirdSubHeadingAnimClasses}>
                    <p>
                        I'm a skilled, driven and motivated software developer
                        from Sydney, NSW.
                    </p>
                    <p>
                        I'm currently working for Clipsal Solar, where we use{' '}
                        <b
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                window.open('https://www.serverless.com/');
                            }}
                        >
                            Serverless Framework
                        </b>{' '}
                        alongside SilverStripe for our back-end development,
                        alongside a
                        <b
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                window.open('https://www.reactjs.org/');
                            }}
                        >
                            {' '}
                            React{' '}
                        </b>
                        front-end system, leveraging the fantastic{' '}
                        <b
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                window.open('https://chakra-ui.com/');
                            }}
                        >
                            Chakra UI
                        </b>{' '}
                        framework.
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
                        <li>HTML/CSS</li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                    <br />
                    <Card style={{ marginBottom: '50px' }}>
                        <h3>Stuff I'm good at</h3>
                        <div className="skills-chips">
                            <Chip>React</Chip>
                            <Chip>Angular 2+</Chip>
                            <Chip>JavaScript</Chip>
                            <Chip>Responsive Design</Chip>
                            <Chip>Object-oriented Programming</Chip>
                            <Chip>HTML/CSS</Chip>
                            <Chip>Amazon Web Services</Chip>
                        </div>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
