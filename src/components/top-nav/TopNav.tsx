import React from 'react';
import { CommonNavProps as TopNavProps } from '../common/common-prop-interfaces';
import './TopNav.scss';
import { Sticky } from 'react-sticky';
import { useAnimClassState } from '../../common/helpers/use-anim-class-state';

/**
 * Rendered as the top nav bar.
 *
 * @param children
 * @constructor
 */
export const TopNav: React.FC<TopNavProps> = ({ children }) => {
    let siteTitleClass = useAnimClassState(0, 'hidden', 'fade-in-left visible');
    let topLinksClass = useAnimClassState(0, 'hidden', 'fade-in-right visible');

    return (
        <Sticky>
            {({ style }) => (
                <header style={style}>
                    <div id="top-nav">
                        <div>
                            <h3
                                className={siteTitleClass}
                                style={{
                                    color: 'black',
                                    marginTop: '13px',
                                    fontSize: '30px',
                                }}
                            >
                                Nic
                            </h3>
                        </div>
                        <div className={topLinksClass} id="top-nav-links">
                            {children}
                        </div>
                    </div>
                </header>
            )}
        </Sticky>
    );
};
