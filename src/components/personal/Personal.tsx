import React from 'react';
import Card from '../card/Card';

export const Personal: React.FC = props => {
    return (
        <React.Fragment>
            <header>
                <h1>Stuff I love</h1>
            </header>
            <Card>
                <p>This is the Interests component.</p>
            </Card>
        </React.Fragment>
    );
};
