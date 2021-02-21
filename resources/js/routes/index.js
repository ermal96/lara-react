import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { paths } from "./paths";
import { Home, About, Blog, Contact, Register } from "../pages";
import { Layout } from "../components";

export const Routes = () => {
    return (
        <Router basename="/">
            <Switch>
                <Route exact path={paths.home}>
                    <Layout>
                        <Home />
                    </Layout>
                </Route>
                <Route exact path={paths.about}>
                    <Layout>
                        <About />
                    </Layout>
                </Route>
                <Route exact path={paths.blog}>
                    <Layout>
                        <Blog />
                    </Layout>
                </Route>
                <Route exact path={paths.contact}>
                    <Layout>
                        <Contact />
                    </Layout>
                </Route>
                <Route exact path={paths.register}>
                    <Layout>
                        <Register />
                    </Layout>
                </Route>
            </Switch>
        </Router>
    );
};
