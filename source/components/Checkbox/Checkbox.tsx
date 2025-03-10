import React from "react";
import { setClass } from "../../modules/setClass";
import { CheckboxProps } from "./Checkbox.types";
import texts from "./Checkbox.json"
import "./Checkbox.scss";

const Checkbox = ({language, theme, className}: CheckboxProps) => {

    return (
        <div className={setClass("hw_checkbox", [theme], className)}>
            checkbox
        </div>
    )
}

export default Checkbox
