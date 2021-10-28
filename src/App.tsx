import React, {lazy, Suspense} from 'react';
import './App.css';
/**************************************** STEP 2 **********************************/
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom';
// import Home from "./home";
// import About from "./about";
// import Contact from "./contact";

// BrowserRouter is good when its browser base application
// MemoryRouter does not take care of routing using browser state or browser dependency
// Good in React Native where browser does not exist
// HashRouter   /#/xxx will go to the server and what ever is after the has is client side --->
// Data from History it will data frm browser
//
// /** The React.lazy function lets you render a dynamic import as a regular component.**/
const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));
const Contact = lazy(() => import('./contact'));

/**************************************** STEP 2 **********************************/


/**********************************************STEP 1***************************************
 * create-react-app . --template typescript
 npm install react-router-dom
 npm i --save-dev @types/react-router-dom
 ***********************************************STEP 1***************************************/
function App() {
    return (
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
                <Suspense fallback={<div><img
                    src="https://i.pinimg.com/originals/e5/c4/09/e5c409bd3a3ccda1a71a6ded294cf9ca.gif"></img>
                </div>}>
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
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
