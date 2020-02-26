import React from 'react';
import { CommonNavProps as TopNavProps } from '../common/common-prop-interfaces';
import './TopNav.scss';
import { Sticky } from 'react-sticky';

/**
 * Rendered as the top nav bar.
 *
 * @param children
 * @constructor
 */
export const TopNav: React.FC<TopNavProps> = ({ children }) => {
    return (
        <Sticky>
            {({ style }) => (
                <header style={style}>
                    <div id="top-nav">
                        <div>
                            <h3
                                style={{
                                    color: 'black',
                                    marginTop: '13px',
                                    fontSize: '30px',
                                }}
                            >
                                Nic
                            </h3>
                        </div>
                        <div id="top-nav-links">{children}</div>
                    </div>
                </header>
            )}
        </Sticky>
    );
};
