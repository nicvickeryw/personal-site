import React from 'react';
import './App.scss';
import Card from "./components/card/Card";
import {Sidebar} from "./components/sidebar/Sidebar";

function App() {
    return (
        <div id="main">
            <div className="sidebar-container">
                <Sidebar/>
            </div>
            <div className="content">
                This site consists of some stuff that I like.
                <Card>
                    <p>This is content inside a card.</p>
                </Card>
            </div>
        </div>
    );
}

export default App;
