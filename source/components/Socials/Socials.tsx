import React from "react";
import { setClass } from "../../modules/setClass";
import { SocialsProps } from "./Socials.types";
import texts from "./Socials.json"
import "./Socials.scss";

const Socials = ({language, theme, className}: SocialsProps) => {

    return (
        <div className={setClass("hw_socials", [theme], className)}>
            socials
        </div>
    )
}

export default Socials
