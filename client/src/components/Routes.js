import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Signin from "./Signin";
import Signup from "./Signup";
import Checkout from "./Checkout";

function Routes() {
    return(
        <BrowserRouter>
            <React.Fragment>
                <Navbar />
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/checkout' component={Checkout} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>)
}

export default Routes;