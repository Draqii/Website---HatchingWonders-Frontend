import React from "react";
import { setClass } from "../../modules/setClass";
import { SocialsProps } from "./Socials.types";
import texts from "./Socials.json"
import Heading from "../a_Heading/Heading";
import "./Socials.scss";

const Socials = ({language, theme, className}: SocialsProps) => {

    return (
        <div className={setClass("hw_socials", [theme], className)}>
            <Heading 
                className="hw_cookiebanner__title"
                theme={theme === "light" ? "dark" : "light"} 
                children={texts[language]["title"]} 
                size={"xxlarge"} />
        </div>
    )
}

export default Socials
