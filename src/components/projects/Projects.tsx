import React from 'react';
import ContentHeader from '../content-header/ContentHeader';
import Card from '../card/Card';
import { useAnimClassState } from '../../common/helpers/use-anim-class-state';

export const Projects: React.FC = props => {
    let classes = useAnimClassState(0, 'body hidden', 'fade-in-above visible');
    return (
        <React.Fragment>
            <ContentHeader dividerColour={'green'} title={'Projects'} />
            <section className={classes}>
                <h2>Project 1</h2>
                <Card>
                    <p>
                        Lead an internal team to deliver a new large-scale
                        application to financial advisers. Released as flagship
                        product, driving significant revenue increases from
                        clients.
                    </p>
                    <p>More to come.</p>
                </Card>
            </section>
        </React.Fragment>
    );
};

export default Projects;
