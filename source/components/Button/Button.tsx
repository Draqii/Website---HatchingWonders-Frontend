import React from "react";
import { setClass } from "../../modules/setClass";
import { ButtonProps } from "./Button.types";
import texts from "Button.json"
import "./Button.scss";

const Button = ({language, theme, className}: ButtonProps) => {

    return (
        <div className={setClass("hw_button", [theme], className)}>
            button
        </div>
    )
}

export default Button
