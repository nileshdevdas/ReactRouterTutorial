<h1 style="color:blue">The React Routers and its Types with Examples</h1> 

# Introduction to Routers : 
*  BrowserRouter 
*  MemoryRouter 
*  HashRouter 

# Installing React Router 
~~~shell script
create-react-app route-demos
cd route-demo
npm install  react-router-dom 
npm i --save-dev @types/react-router-dom
~~~

# React Router Main Components
### BrowserRouter: 
BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.

### Route: 
Route is the conditionally shown component that renders some UI when its path matches the current URL.

### Link: 
Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.

### Switch: 
Switch component is used to render only the first route that matches the location rather than rendering all matching routes. Although there is no defying functionality of SWITCH tag in our application because none of the LINK paths are ever going to coincide. But let’s say we have a route (Note that there is no EXACT in here), then all the Route tags are going to be processed which start with ‘/’ (all Routes start with /). This is where we need SWITCH statement to process only one of the statements.

## importing the react router above components  
~~~typescript jsx 
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
~~~


## Creating the Route Components  
~~~typescript jsx
/* home.tsx*/
export default function Home() {
    return (
        <div>Home</div>
    )
}
/* contact.tsx*/
export default function Contact (){

    return (
        <div>Contacts</div>
    )
}
/* about.tsx*/
export default function About() {
    return (
        <div>About</div>
    )
}
~~~


## Creating the NavigationBar
* in the public/index.html i added the following in the head section to enable bootstrap for good navigation bar  
~~~html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
~~~

~~~typescript jsx
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
~~~

### Creating the Switch 
~~~typescript jsx
<Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
</Switch>
~~~


# The Complete Code 
```typescript jsx
import React from 'react';
import './App.css';
/**************************************** STEP 2 **********************************/
import {Link, MemoryRouter as Router, Route, Switch} from 'react-router-dom';
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
````

![The First Route Demo](https://i.ibb.co/thMK9c8/Router.gif)

##### So in the above example we used the memory router if you see the demonstration of the memory router you will be able to see that when you click the links the browser url is not changing which is really surprising. 
##### This  type of routing is good to use when we dont have the area of browsers and example we wish to test this in react-native or application that dont use browsers 


## Changing to the Browser Router 

![Browser Router](https://i.ibb.co/MMYRK6T/Browser-Router.gif)
##### If you see the above behaviour you would be seeing that the browser remembers the implementation of back and forward unlike the MemoryRouter here the history is saved in the Browser



# Working with the HashRouter
#### Hash Router: 
* Hash router uses client-side hash routing. 
* It uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL. 
* Hash portion of the URL won’t be handled by the server, the server will always send the index.html for every request and ignore the hash value. 
* It doesn’t need any configuration in the server to handle routes. 
* It is used to support legacy browsers which usually don’t support HTML pushState API. 
* It is very useful for the legacy browsers or you don’t have a server logic to handle the client-side. 
* Not a Very Recommended Approach

![HashRouter](https://i.ibb.co/2ncpqHt/Hash-Router.gif)

#### Usage Conclusion 
Each Router is designed to work in specific Conditions 
however its recommended to understand the use of each Router component and Define the Applicability 

---
# Can we do lazy Loading of React Components 
What is lazy loading in react 
## Bundling v/s Code Splitting


# React.Lazy() and code splitting
In React, lazy() is a function that lets you load components lazily through what is called code splitting without help from any external libraries. 

Hence, the need for code splitting, code splitting is the process of dynamically splitting the bundle (mentioned above) into multiple bundles and this will be loaded dynamically on a need basis. This will fix the possible performance issues and you would not be losing any needed code in your application.


Changing the Code From Normal To Lazy 

~~~typescript jsx
/** import Home from "./home";
 import About from "./about";
 import Contact from "./contact";
 **/

/** The React.lazy function lets you render a dynamic import as a regular component.**/
const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));
const Contact = lazy(() => import('./contact'));
~~~

#Suspense
A really Suspense component that can be used to display alternative components. 
like a fallback element that can be any react element, it renders this prop as a placeholder to deliver a smooth experience and also give user feedback while the lazy component is being loaded.



---
Thank you for you support and Reading my tutorial 
Connect me at 
[Linked In](https://www.linkedin.com/in/nileshdevdas/?originalSubdomain=in) |
[GitHub](https://github.com/nileshdevdas) |
[Skype](nilesh.devdas@outlook.com)


