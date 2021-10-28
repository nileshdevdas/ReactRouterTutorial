import React from 'react';
import './App.css';
/**************************************** STEP 2 **********************************/
import {Link, HashRouter  as Router, Route, Switch} from 'react-router-dom';
import Home from "./home";
import About from "./about";
import Contact from "./contact";

/**************************************** STEP 2 **********************************/


/**********************************************STEP 1***************************************
 npm install react-router-dom
 npm i --save-dev @types/react-router-dom
 ***********************************************STEP 1***************************************/
function App() {
    return (
        /**************************************** STEP 3 **********************************/
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-sm bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/'
                           component={Home}>
                    </Route>
                    <Route exact path='/about'
                           component={About}>
                    </Route>
                    <Route exact path='/contact'
                           component={Contact}>
                    </Route>
                </Switch>
            </div>
        </Router>
        /**************************************** STEP 3 **********************************/
    );
}

export default App;
