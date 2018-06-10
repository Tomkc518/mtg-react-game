import React from "react";
import "./Images.css";

const Images = props => (
    <div className="img-thumbnail d-inline-block hvr-grow-shadow imgBox">
        <img alt={props.name} src={props.image} onClick={() => props.scoreGenerator(props.id)} />
    </div>
);

export default Images;