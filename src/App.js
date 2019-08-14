import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import './index.css';
import Home from './pages/Home'
import Title from "./pages/Title";

const App = () => {

    return (
        <div>
            <Router>
                <Route
                    exact
                    path={'/'}
                    component={Home}
                />
                <Route
                    path={'/title/:id'}
                    component={Title}
                />
            </Router>
        </div>
    );
}

export default App;
