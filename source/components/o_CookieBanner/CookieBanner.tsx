import React, { useState } from "react";
import { setClass } from "../../modules/setClass";
import { CookieBannerProps } from "./CookieBanner.types";
import texts from "./CookieBanner.json"
import Heading from "../a_Heading/Heading";
import Icon from "../a_Icon/Icon";
import SVG_Close from "../../../public/svgs/close.svg"
import "./CookieBanner.scss";

const CookieBanner = ({language, theme, className}: CookieBannerProps) => {

    const [isOpened, setIsOpened] = useState(false)

    const closeBanner = () => {
        setIsOpened(true)
    }

    return (
        isOpened ? <div className={setClass("hw_cookiebanner", [theme], className)}>
            <Heading 
                theme={theme === "light" ? "dark" : "light"} 
                children={texts[language]["title"]} 
                size={"xxlarge"} />
            <Icon 
                onClick={() => closeBanner()} 
                theme={theme === "light" ? "dark" : "light"} 
                className="hw_cookiebanner__close" 
                ReactSVG={SVG_Close} />
        </div> : null
    )
}

export default CookieBanner
