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
