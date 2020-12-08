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
        <>
            <ContentHeader dividerColour={'green'} title={'Projects'} />
            <section className={classes}>
                <h2>Clipsal Pulse</h2>
                <Card>
                    <p>
                        A progressive web app used by home owners to view, manage
                        and control their in-home solar PV system.
                    </p>
                </Card>
                <h2>GENOA (Padua Financial Group)</h2>
                <Card>
                    <p>
                        A large scale system for processing, categorizing and
                        assigning advice requests for financial advisers.
                    </p>
                </Card>
                <h2>SORRENTO (Padua Financial Group)</h2>
                <Card>
                    <p>
                        A complex multi-tenant forms-based system for advisers
                        to add or update existing client financial information.
                        Built to integrate with various existing CRM systems to
                        enhance adviser workflow.
                    </p>
                </Card>
            </section>
        </>
    );
};

export default Projects;
