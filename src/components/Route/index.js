
import React, { Component } from 'react'
// import { createBrowserHistory } from "history";
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../View/Home/Home'
import About from '../View/About/About'
import Contact from '../View/Contact/Contact'
import BrandsAndDesigners from "../View/Brand/BrandsAndDesigners";
import Brands from "../View/Brand/Brands";

// let hist = createBrowserHistory();
export default class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Switch>
                    <Route  path='/home' component={Home} />
                    <Route  path='/about' component={About} />
                    <Route  path='/contact' component={Contact} />
                    <Route  path='/brand/:brand' component={BrandsAndDesigners} />
                    <Route  path='/brands' component={Brands} />
                    </Switch>
                </div>
            </Router>
        )
    }
}