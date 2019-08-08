import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import './index.css';
import Home from './pages/Home'
import Genres from './pages/genres/Genres'
import Genre from './pages/genres/Genre'
import Nav from "./components/Nav";
import Title from "./pages/Title";

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
                    component={Title}
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
