import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import './index.css';
import Home from './pages/Home'

const App = () => {

    return (
        <div>
            <Router
                basename={'/'}
            >
                <Route
                    exact
                    path={'/'}
                    component={Home}
                />
            </Router>
        </div>
    );
}

export default App;
