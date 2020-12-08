import React, { useState } from 'react';

export interface HoverImageWrapperProps {
    src: string;
    rank: number;
    title: string;
    subtitle: string;
}

export const HoverImageWrapper: React.FC<HoverImageWrapperProps> = ({
    src,
    rank,
    title,
    subtitle,
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                background: '#f2f2f2',
                margin: '20px',
                boxShadow: hovered
                    ? '0px 5px 3px -1px rgba(0,0,0,0.2), 0px 5px 5px 0px rgba(0,0,0,0.14), 0px 3px 5px 0px rgba(0,0,0,0.12)'
                    : '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
                transitionDuration: '0.2s',
                transform: `${hovered ? 'scale(1.2,1.2)' : 'scale(1,1)'}`,
                zIndex: hovered ? 2 : 1,
                borderBottomRightRadius: '10px',
                borderBottomLeftRadius: '10px',
            }}
        >
            <img
                style={{
                    width: '300px',
                    height: '300px',
                    cursor: 'pointer',
                }}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                src={src}
                alt="awfawg lol"
            />
            <div
                style={{
                    borderBottomRightRadius: '10px',
                    borderBottomLeftRadius: '10px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontWeight: 550,
                        padding: '5px 0',
                        width: '300px',
                        textAlign: 'center',
                    }}
                >
                    <div style={{ margin: 'auto', fontWeight: 900 }}>
                        #{rank + 1}
                    </div>
                    <div style={{ margin: 'auto' }}>{title}</div>
                    <div style={{ fontSize: '16px', margin: 'auto' }}>
                        {subtitle}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoverImageWrapper;
