import React from "react";
import { setClass } from "../../modules/setClass";
import { LinkProps } from "./Link.types";
import { Link as ReactLink } from "react-router-dom";
import "./Link.scss";

const Link = ({children, isInternal, to, theme, className}: LinkProps) => {

    return (
        isInternal ? <ReactLink className={setClass("hw_link", [theme], className)} to={to}>{children}</ReactLink> :
        <a href={to}>{children}</a>
    )
}

export default Link
