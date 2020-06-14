import React from 'react';
import ContentHeader from '../content-header/ContentHeader';
import Card from '../card/Card';
import { useAnimClassState } from '../../common/helpers/use-anim-class-state';

export const Projects: React.FC = () => {
    let [classes] = useAnimClassState(
        0,
        'body hidden',
        'fade-in-below visible'
    );
    return (
        <React.Fragment>
            <ContentHeader dividerColour={'green'} title={'Projects'} />
            <section className={classes}>
                <h2>GENOA</h2>
                <Card>
                    <p>
                        A large scale system for processing, categorizing and
                        assigning advice requests for financial advisers.
                    </p>
                </Card>
                <h2>SORRENTO</h2>
                <Card>
                    <p>
                        A complex multi-tenant forms-based system for advisers
                        to add or update existing client financial information.
                        Built to integrate with various existing CRM systems to
                        enhance adviser workflow.
                    </p>
                    <p>
                        Leveraged a complex dynamic form system build from
                        scratch in PHP, to allow different tenants' sites to
                        display completely separate forms using supported
                        respective front-end components.
                    </p>
                </Card>
            </section>
        </React.Fragment>
    );
};

export default Projects;
