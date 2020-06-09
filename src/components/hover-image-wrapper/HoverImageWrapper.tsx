import React, { useState } from 'react';

export function HoverImageWrapper({ src, rank, title, subtitle }: any) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                transitionDuration: '0.2s',
                transform: `${hovered ? 'scale(1.5,1.5)' : 'scale(1,1)'}`,
                borderRadius: hovered ? '20px' : 0,
                zIndex: hovered ? 50 : 1,
                margin: '20px',
                display: 'grid',
                gridTemplateRows: '0.7fr 0.3fr',
                width: '300px',
                height: '300px',
                cursor: 'pointer',
                backgroundImage: `url(${src})`,
                color: 'white',
            }}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <span />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontWeight: 700,
                    mixBlendMode: 'difference',
                }}
            >
                <div style={{ margin: 'auto' }}>#{rank}</div>
                <div style={{ margin: 'auto' }}>{title}</div>
                <div style={{ fontSize: '16px', margin: 'auto' }}>
                    {subtitle}
                </div>
            </div>
        </div>
    );
}

export default HoverImageWrapper;
