import React, { useEffect, useState } from 'react';
import './App.scss';
import About from './components/about/About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Projects from './components/projects/Projects';
import Interests from './components/interests/Interests';
import Navigation from './components/navigation/Navigation';
import { StickyContainer } from 'react-sticky';

// There's no need to differentiate further between viewports - these two should suffice.
export type ViewportType = 'desktop' | 'mobile';

export interface LinkData {
    title: string;
    route: string;
    toRender: JSX.Element;
}

const LINKS: LinkData[] = [
    { title: 'About', route: 'about', toRender: <About /> },
    { title: 'Projects', route: 'projects', toRender: <Projects /> },
    { title: 'Interests', route: 'interests', toRender: <Interests /> },
];

// Beyond this pixel breakpoint, any viewport is considered a desktop viewport.
const DESKTOP_WIDTH_BREAKPOINT = 1240;

/**
 * Reacts to changes in window sizes.
 * Adds listener on mount and removes it on unmount.
 *
 * @param onChange Function to call when the resize event is raised.
 */
function useWindowSizeChange(onChange: () => void) {
    // Add resize event listener on mount, remove on unmount.
    useEffect(() => {
        window.addEventListener('resize', onChange);
        return () => window.removeEventListener('resize', onChange);
    });
}

/**
 * Retrieves the viewport type, according to provided width.
 *
 * @param width Numeric viewport width.
 */
function getViewportType(width: number): ViewportType {
    return width > DESKTOP_WIDTH_BREAKPOINT ? 'desktop' : 'mobile';
}

function App() {
    // Specified to handle width changes in the viewport, triggering a re-render.
    const [viewportWidth, setViewportWidth] = useState<number>(
            window.innerWidth
        ),
        viewportType = getViewportType(viewportWidth);

    // Update UI when viewport moves above/below the breakpoint.
    useWindowSizeChange(() => setViewportWidth(window.innerWidth));

    return (
        <StickyContainer>
            <div id="main" className={viewportType}>
                <Router>
                    <Navigation viewportType={viewportType} links={LINKS} />
                    <div className="content-container">
                        <div className="content">
                            <Switch>
                                <Redirect to="/about" from="/" exact />
                                {LINKS.map((link, i) => (
                                    <Route key={i} path={`/${link.route}`}>
                                        {link.toRender}
                                    </Route>
                                ))}
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        </StickyContainer>
    );
}

export default App;
