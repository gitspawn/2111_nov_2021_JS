import React, { Component } from "react";
import { Route, Switch, Redirect, Link, NavLink } from "react-router-dom";

import Navigation from "./Navigation";

import Home from "../views/Home";
import About from "../views/About";
import Shows from "../views/Shows";
import ShowDetails from "../views/ShowDetails";
import NotFound from "../views/NotFound";

import routes from "../routes";

export default class App extends Component {
    render() {
        return (
            <div>
                <Navigation />

                {/* <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul> */}

                <Switch>
                    <Route path={routes.home} exact component={Home} />
                    <Route path={routes.about} component={About} />
                    <Route path={routes.shows} exact component={Shows} />
                    <Route path={routes.showsDetails} component={ShowDetails} />
                    <Route component={NotFound} />
                </Switch>

                {/* <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/shows" exact component={Shows} />
                    <Route path="/shows/:showID" component={ShowDetails} />
                    <Route component={NotFound} /> */}
                {/* <Redirect to="/" /> */}
                {/* </Switch> */}
            </div>
        );
    }
}

{
    /* <Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/> */
}

// / exact
// /shop

// /users exact
// /users/54
