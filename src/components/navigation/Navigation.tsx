import React, { useState } from 'react';
import { CommonNavProps } from '../common/common-prop-interfaces';
import { Sidebar } from '../sidebar/Sidebar';
import { TopNav } from '../top-nav/TopNav';
import { LinkData, ViewportType } from '../../App';
import { AnimatedLink } from '../animated-link/AnimatedLink';

interface NavigationProps extends CommonNavProps {
    viewportType: ViewportType;
}

export type UpdateIndexFn = (index: number) => void;
export type LinkIndexStateTuple = [number, UpdateIndexFn];

/**
 * Main entry-point for site navigation.
 * If the viewport is defined as a desktop viewport (width > 1240), we render a sidebar.
 * Where (width < 1240), display a top-nav instead.
 *
 * @param isDesktopViewport Whether our viewport is desktop.
 * @param links Array of links to show.
 * @constructor
 */
export const Navigation: React.FC<NavigationProps> = ({
    viewportType,
    links,
}) => {
    // Track selected item in the sidebar, pass state to children.
    const [selectedIndex, setSelectedIndex]: LinkIndexStateTuple = useState<
            number
        >(-1),
        animatedLinks = links.map((link: LinkData, i: number) => (
            <AnimatedLink
                fontSize={'17px'}
                isSelected={selectedIndex === i}
                selectIndex={(index: number) => {
                    setSelectedIndex(index);
                }}
                key={i}
                index={i}
                route={link.route}
                title={link.title}
            />
        ));

    if (viewportType === 'desktop') {
        return (
            <div className="sidebar-container">
                <Sidebar links={links}>{animatedLinks}</Sidebar>
            </div>
        );
    } else {
        // No sidebar to render, but we'll render a sticky nav-bar in its place for a better UI on smaller viewports.
        return <TopNav links={links}>{animatedLinks}</TopNav>;
    }
};
