import React from "react";
import { setClass } from "../../modules/setClass";
import { CookieBannerProps } from "./CookieBanner.types";
import texts from "./CookieBanner.json"
import "./CookieBanner.scss";

const CookieBanner = ({language, theme, className}: CookieBannerProps) => {

    return (
        <div className={setClass("hw_cookiebanner", [theme], className)}>
            cookiebanner
        </div>
    )
}

export default CookieBanner
