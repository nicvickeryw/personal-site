import React from 'react';
import './App.scss';
import Card from './components/card/Card';
import { LinkData, Sidebar } from './components/sidebar/Sidebar';
import { About } from './components/about/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const LINKS: LinkData[] = [
    { title: 'About me', route: 'about', toRender: <About /> },
    { title: "Things I've done", route: 'projects', toRender: <div></div> },
    { title: 'Stuff I enjoy', route: 'fun', toRender: <div></div> },
];

function App() {
    // @TODO: detect mobile viewport, convert to top-bar with expandable menu!
    return (
        <div id="main">
            <Router>
                <div className="sidebar-container">
                    <Sidebar links={LINKS} />
                </div>
                <div className="content">
                    <Switch>
                        {LINKS.map(link => (
                            <Route path={`/${link.route}`}>
                                {link.toRender}
                            </Route>
                        ))}
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
