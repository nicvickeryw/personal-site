import './Chip.scss';
import React from 'react';

export const Chip = (props: any) => {
    return (
        <div
            style={{
                width: 'inherit',
                borderRadius: '20px',
                padding: '8px',
                display: 'inline-block',
            }}
            className="chip"
        >
            {props.children}
        </div>
    );
};
