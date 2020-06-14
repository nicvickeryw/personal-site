import React from 'react';

export const ProgressIndicator: React.FC<any> = props => {
    return (
        <div
            style={{
                background: 'white',
                height: '24px',
                width: '100%',
                borderRadius: '4px',
            }}
        >
            <div
                style={{
                    background: props.backgroundColor || 'blue',
                    width: `${props.level}%`,
                    height: '100%',
                    borderTopLeftRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    borderBottomRightRadius: props.level < 100 ? '0px' : '4px',
                    borderTopRightRadius: props.level < 100 ? '0px' : '4px',
                }}
            />
        </div>
    );
};
