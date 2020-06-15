import React from 'react';
import { useAnimClassState } from '../../common/helpers/use-anim-class-state';

export interface ProgressIndicatorProps {
    backgroundColor: string;
    level: number;
    style?: any;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
    backgroundColor,
    level,
    style,
}) => {
    let [barClass] = useAnimClassState(500, 'hidden', 'fill-from-left visible');

    return (
        <div
            style={{
                background: 'white',
                height: '24px',
                width: '100%',
                borderRadius: '4px',
                border: `1px solid ${backgroundColor || 'blue'}`,
                ...style,
            }}
        >
            <div
                style={{
                    width: `${level}%`,
                    height: '100%',
                    borderTopLeftRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    borderBottomRightRadius: level < 100 ? '0px' : '4px',
                    borderTopRightRadius: level < 100 ? '0px' : '4px',
                }}
            >
                <div
                    className={barClass}
                    style={{
                        background: backgroundColor || 'blue',
                        height: '100%',
                        borderTopLeftRadius: '4px',
                        borderBottomLeftRadius: '4px',
                        borderBottomRightRadius: level < 100 ? '0px' : '4px',
                        borderTopRightRadius: level < 100 ? '0px' : '4px',
                    }}
                />
            </div>
        </div>
    );
};
