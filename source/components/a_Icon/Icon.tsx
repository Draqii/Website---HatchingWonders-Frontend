import React from "react";
import { setClass } from "../../modules/setClass";
import { IconProps } from "./Icon.types";
import "./Icon.scss";

const Icon = ({onClick, theme, className, ReactSVG}: IconProps) => {

    return (
        <ReactSVG 
            onClick={() => onClick ? onClick() : null}
            className={setClass("hw_icon", [theme], className)}
            preserveAspectRatio="xMidYMid meet"
        />
    )
}

export default Icon
