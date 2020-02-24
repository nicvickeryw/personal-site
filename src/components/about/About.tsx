import React from 'react';
import Card from '../card/Card';

export const About: React.FC = (props: any) => {
    return (
        <React.Fragment>
            <header>
                <h1>About me</h1>
            </header>
            <Card>
                <p>This is the About component.</p>
            </Card>
        </React.Fragment>
    );
};
