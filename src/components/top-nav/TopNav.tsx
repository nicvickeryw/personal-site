import React from 'react';
import { CommonNavProps as TopNavProps } from '../common/common-prop-interfaces';
import './TopNav.scss';

/**
 * Rendered as the top nav bar.
 *
 * @param children
 * @constructor
 */
export const TopNav: React.FC<TopNavProps> = ({ children }) => {
    return (
        <nav id="top-nav">
            <div>
                <h3 style={{ color: 'black' }}>Nicholas Vickery-Wilson</h3>
                <h4 className="sidebar-subtitle">
                    <b>Software Engineer</b>
                </h4>
            </div>
            {children}
        </nav>
    );
};
