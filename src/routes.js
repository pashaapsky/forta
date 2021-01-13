import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Payments from "./pages/Payments";
import Purses from "./pages/Purses";
import InvoiceDetail from "./pages/InvoiceDetail";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/invoices/:id">
                    <InvoiceDetail />
                </Route>

                <Route exact path="/payments">
                    <Payments />
                </Route>

                <Route exact path="/purses">
                    <Purses />
                </Route>

                <Route exact path="/orders">
                    <Orders />
                </Route>

                <Redirect to="/"/>
            </Switch>
        </Router>
    );
};
