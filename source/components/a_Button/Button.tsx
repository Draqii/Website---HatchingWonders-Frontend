import React from "react";
import { setClass } from "../../modules/setClass";
import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button = ({children, onClick, theme, className}: ButtonProps) => {

    return (
        <div onClick={onClick} className={setClass("hw_button", [theme], className)}>
            {children}
        </div>
    )
}

export default Button
