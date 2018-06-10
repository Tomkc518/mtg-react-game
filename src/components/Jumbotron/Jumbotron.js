import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container text-center jumboText rounded">
            <h1 className="display-3">MTG Memory Game!</h1>
            <p className="h2">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
    </div>
);

export default Jumbotron;