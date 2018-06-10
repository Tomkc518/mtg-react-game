import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <nav className="navbar navbar-expand-lg sticky-top">
        <ul className="navbar-nav mx-auto"> 
            <li className="navbar-brand">
                <a href="/">MTG Memory Game </a>
            </li>
        </ul>
        <span className="navbar-text mx-auto">{props.instructions}</span>
        <span className="navbar-text mx-auto">Score: {props.score}  |  Top Score: {props.topscore}</span>
    </nav>
);

export default NavBar;