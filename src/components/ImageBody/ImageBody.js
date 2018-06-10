import React from "react";
import "./ImageBody.css";

const ImageBody = props => (
    <div className="container wrapper">
        {props.children}
    </div>
);

export default ImageBody;