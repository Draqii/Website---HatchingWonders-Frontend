import React from "react";
import { setClass } from "../../modules/setClass";
import { TextProps } from "./Text.types";
import "./Text.scss";

const Text = ({children, theme, className}: TextProps) => {

    return (
        <span className={setClass("hw_text", [theme], className)}>
            {children}
        </span>
    )
}

export default Text
