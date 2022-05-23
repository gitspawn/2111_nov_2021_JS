import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <ul>
            <li>
                <NavLink
                    to="/"
                    className="Navigation-link"
                    activeClassName="Navigation-link-active"
                    exact
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/about"
                    className="Navigation-link"
                    activeClassName="Navigation-link-active"
                >
                    About
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/shows"
                    className="Navigation-link"
                    activeClassName="Navigation-link-active"
                >
                    Shows
                </NavLink>
            </li>
        </ul>
    );
}
