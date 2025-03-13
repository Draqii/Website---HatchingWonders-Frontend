import React from "react";
import { setClass } from "../../modules/setClass";
import { TextboxProps } from "./Textbox.types";
import texts from "./Textbox.json"
import SVG_Edit from "../../../public/svgs/edit.svg"
import Icon from "../a_Icon/Icon";
import "./Textbox.scss";

const Textbox = ({value, onChange, placeholder, language, theme, className}: TextboxProps) => {

    const _onChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className={setClass("hw_textbox", [theme], className)}>
            <Icon
                className="hw_textbox__icon"
                theme={theme === "light" ? "dark" : "light"} 
                ReactSVG={SVG_Edit} />
            <input 
                className="hw_textbox__input" 
                onChange={_onChange}
                value={value}
                placeholder={placeholder}
                type="text" />
        </div>
    )
}

export default Textbox
