import React from 'react';
import ContentHeader from '../content-header/ContentHeader';
import Card from '../card/Card';

export const Projects: React.FC = props => {
    return (
        <React.Fragment>
            <ContentHeader dividerColour={'green'} title={'Projects'} />
            <section className="body">
                <h2>Project 1</h2>
                <Card>
                    <p>
                        Lead an internal team to deliver a new large-scale
                        application to financial advisers.
                    </p>
                    <p>Used An</p>
                </Card>
            </section>
        </React.Fragment>
    );
};

export default Projects;
