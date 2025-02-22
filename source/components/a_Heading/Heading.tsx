import React from "react";
import { setClass } from "../../modules/setClass";
import { HeadingProps } from "./Heading.types";
import "./Heading.scss";

const Heading = ({size, children, theme, className}: HeadingProps) => {

    return (
        size === "teaser" ? <h1 className={setClass("hw_heading", [theme, "teaser"], className)}>{children}</h1> :
        size === "xxlarge" ? <h2 className={setClass("hw_heading", [theme, "xxlarge"], className)}>{children}</h2> :
        size === "xlarge" ? <h3 className={setClass("hw_heading", [theme, "xlarge"], className)}>{children}</h3> :
        size === "large" ? <h4 className={setClass("hw_heading", [theme, "large"], className)}>{children}</h4> :
        size === "medium" ? <h5 className={setClass("hw_heading", [theme, "medium"], className)}>{children}</h5> :
        size === "small" ? <h6 className={setClass("hw_heading", [theme, "small"], className)}>{children}</h6> : null
    )
}

export default Heading
