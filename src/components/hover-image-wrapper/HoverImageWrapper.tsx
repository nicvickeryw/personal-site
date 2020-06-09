import React, { useState } from 'react';

interface HoverImageWrapperProps {
    src: string;
    rank: number;
    title: string;
    subtitle: string;
}

export function HoverImageWrapper<HoverImageWrapperProps>({
    src,
    rank,
    title,
    subtitle,
}: any) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                transitionDuration: '0.2s',
                transform: `${hovered ? 'scale(1.5,1.5)' : 'scale(1,1)'}`,
                borderRadius: hovered ? '20px' : 0,
                zIndex: hovered ? 2 : 1,
                margin: '20px',
                display: 'grid',
                gridTemplateRows: '0.7fr 0.3fr',
                width: '300px',
                height: '300px',
                cursor: 'pointer',
                backgroundImage: `url(${src})`,
                color: 'white',
                boxShadow: 'inset 0px 0px 90px 27px rgba(0,0,0,0.75)',
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
                }}
            >
                <div style={{ margin: 'auto', fontWeight: 1000 }}>#{rank}</div>
                <div style={{ margin: 'auto' }}>{title}</div>
                <div style={{ fontSize: '16px', margin: 'auto' }}>
                    {subtitle}
                </div>
            </div>
        </div>
    );
}

export default HoverImageWrapper;
