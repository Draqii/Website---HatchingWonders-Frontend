import React from "react";
import { setClass } from "../../modules/setClass";
import { LinkProps } from "./Link.types";
import texts from "Link.json"
import "./Link.scss";

const Link = ({language, theme, className}: LinkProps) => {

    return (
        <div className={setClass("hw_link", [theme], className)}>
            link
        </div>
    )
}

export default Link
