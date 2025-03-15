import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { CookiesProps } from "./Cookies.types";
import texts from "./Cookies.json"
import CookieBanner from "../o_CookieBanner/CookieBanner";
import "./Cookies.scss";

const Cookies = ({ cookieConsent, onConsentChange, language, theme, className }: CookiesProps) => {

    useEffect(() => {
        document.title = "Cookie Choice - Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_cookies", [theme], className)}>
            <CookieBanner
                cookieConsent={cookieConsent}
                source="page"
                onConsentChange={(consent) => onConsentChange(consent)}
                language={language}
                theme={theme} />
        </div>
    )
}

export default Cookies
