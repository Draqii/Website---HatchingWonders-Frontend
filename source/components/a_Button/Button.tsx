import React from "react";
import { setClass } from "../../modules/setClass";
import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button = ({isPrimary, children, onClick, theme, className}: ButtonProps) => {

    const onButtonClick = (e) => {
        e.preventDefault()
        onClick()
    }

    return (
        <button onClick={onButtonClick} className={setClass("hw_button", [theme, isPrimary?"primary":""], className)}>
            {children}
        </button>
    )
}

export default Button
