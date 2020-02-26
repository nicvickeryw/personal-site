import React from 'react';
import { CommonNavProps } from '../common/common-prop-interfaces';
import { Sidebar } from '../sidebar/Sidebar';
import { TopNav } from '../top-nav/TopNav';
import { ViewportType } from '../../App';
import { AnimatedLink } from '../animated-link/AnimatedLink';
import { useLocation } from 'react-router';
import { Sticky } from 'react-sticky';

interface NavigationProps extends CommonNavProps {
    viewportType: ViewportType;
}

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
    const { pathname } = useLocation();

    // Track selected item in the sidebar, pass state to children.
    const animatedLinks = links.map(({ route, title }, i) => (
        <AnimatedLink
            fontSize={'17px'}
            // Where the routes match, this is the selected link.
            isSelected={pathname === `/${route}`}
            key={i}
            route={route}
            title={title}
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

export default Navigation;
