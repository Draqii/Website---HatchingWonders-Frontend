import React from "react";
import { setClass } from "../../modules/setClass";
import { CheckboxProps } from "./Checkbox.types";
import texts from "./Checkbox.json"
import Text from "../a_Text/Text";
import SVG_Check from "../../../public/svgs/check.svg"
import Icon from "../a_Icon/Icon";
import "./Checkbox.scss";

const Checkbox = ({onChange, checked, text, language, theme, className}: CheckboxProps) => {

    const _onChange = (e) => {
        onChange(!checked)
    }

    return (
        <div className={setClass("hw_checkbox", [theme], className)}>
            <div
                onClick={_onChange}
                className="hw_checkbox__input">
                {checked ? 
                <Icon 
                    onClick={_onChange} 
                    className="hw_checkbox__icon" 
                    ReactSVG={SVG_Check} /> : null}
            </div>
            <Text 
                className="hw_checkbox__text"
                theme={theme === "light" ? "dark" : "light"}
                size={"small"}
                children={text} />
        </div>
    )
}

export default Checkbox
