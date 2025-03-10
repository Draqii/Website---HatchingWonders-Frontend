import React from "react";
import { setClass } from "../../modules/setClass";
import { NewsletterProps } from "./Newsletter.types";
import texts from "./Newsletter.json"
import Heading from "../a_Heading/Heading";
import "./Newsletter.scss";

const Newsletter = ({language, theme, className}: NewsletterProps) => {

    return (
        <div className={setClass("hw_newsletter", [theme], className)}>
            <Heading 
                className="hw_cookiebanner__title"
                theme={theme === "light" ? "dark" : "light"} 
                children={texts[language]["title"]} 
                size={"xlarge"} />
        </div>
    )
}

export default Newsletter
