import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import MenuResponsive from './MenuResponsive';
import Footer from './Footer/Footer';
import Home from './Home';
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import Checkout from "./Checkout/Checkout";
import Shoe from "./Shoe";
// import { UseAppContext } from '../components/Context/context';

function Routes() {

    // const {toggle, isOpen} = useContext(UseAppContext);
    // console.log(isOpen);

    return(
        <BrowserRouter>
            <React.Fragment>
                <Navbar />
                <MenuResponsive />
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/checkout' component={Checkout} />
                <Route exact path='/:shoeId' component={Shoe} />
                </Switch>
                <Footer />
            </React.Fragment>
        </BrowserRouter>)
}

export default Routes;