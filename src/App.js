import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import './index.css';
import Home from './pages/home'
import Genres from './pages/genres/genres'
import Genre from './pages/genres/genre'
import Nav from "./components/Nav";

const App = () => {

    return (
        <div>
            <div className={"flex relative items-start max-w-6xl mx-auto"}>
            <Router>
                <Nav/>
                <Route
                    exact
                    path={'/'}
                    component={Home}
                />
                <Route
                    path={'/title/:id'}
                    component={Home}
                />
                <Switch>
                    <Route
                        path={'/genres/:id'}
                        component={Genre}
                        render={(props) => <Genre content={'hi'} {...props} />}
                    />
                    <Route
                        path={'/genres'}
                        component={Genres}
                    />
                </Switch>
            </Router>
            </div>
        </div>
    );
}

export default App;
