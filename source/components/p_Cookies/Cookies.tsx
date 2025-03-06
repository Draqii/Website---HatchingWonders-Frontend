import React from "react";
import { setClass } from "../../modules/setClass";
import { CookiesProps } from "./Cookies.types";
import texts from "./Cookies.json"
import CookieBanner from "../o_CookieBanner/CookieBanner";
import "./Cookies.scss";

const Cookies = ({ onConsentChange, language, theme, className }: CookiesProps) => {

    return (
        <div className={setClass("hw_cookies", [theme], className)}>
            <CookieBanner
                source="page"
                onConsentChange={(consent) => onConsentChange(consent)}
                language={language}
                theme={theme} />
        </div>
    )
}

export default Cookies
