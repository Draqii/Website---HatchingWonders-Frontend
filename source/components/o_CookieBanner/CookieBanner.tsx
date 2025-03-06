import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setClass } from "../../modules/setClass";
import { setItem } from "../../modules/hooks/useCookie";
import { CookieBannerProps } from "./CookieBanner.types";
import texts from "./CookieBanner.json"
import Heading from "../a_Heading/Heading";
import Icon from "../a_Icon/Icon";
import SVG_Close from "../../../public/svgs/close.svg"
import Table from "../a_Table/Table";
import Button from "../a_Button/Button";
import "./CookieBanner.scss";

const CookieBanner = ({ source, onConsentChange, language, theme, className}: CookieBannerProps) => {

    const navigate = useNavigate()
    const [isOpened, setIsOpened] = useState(true)

    const closeBanner = () => {
        if(source !== "page") setIsOpened(false)
        else navigate(-1)
    }

    const updateConsent = (choice) => {
            setItem("hw_consent", choice, 360)
            onConsentChange(choice)
            closeBanner()
        }

    const existing_cookies = [
        "hw_lightmode",
        "hw_language",
        "hw_consent"
    ]

    return (
        isOpened === true ? <div className={setClass("hw_cookiebanner", [theme, source==="page"?"page":""], className)}>
            <Heading 
                theme={theme === "light" ? "dark" : "light"} 
                children={texts[language]["title"]} 
                size={"xxlarge"} />
            <Icon 
                onClick={() => closeBanner()} 
                theme={theme === "light" ? "dark" : "light"} 
                className="hw_cookiebanner__close" 
                ReactSVG={SVG_Close} />

            <div className="hw_cookiebanner__options">
                <Heading 
                    theme={theme === "light" ? "dark" : "light"} 
                    children={texts[language]["table_title"]} 
                    size={"xxlarge"} />
                    <Table 
                        theme={theme === "light" ? "dark" : "light"}
                        data={({
                            headings: [texts[language]["table1_heading1"], texts[language]["table1_heading2"]], 
                            rows: existing_cookies.map((cookie, cookieID) => ({columns: [cookie, texts[language]["table1_row"+(cookieID+1) +"_column2"]]})  )  })} />
            </div>
            <div className="hw_cookiebanner__controls">
                <Button  className="hw_cookiebanner__button" isPrimary={false} children={texts[language]["button1"]} onClick={() => updateConsent("all")} />
                <Button  className="hw_cookiebanner__button" isPrimary={false} children={texts[language]["button2"]} onClick={() => updateConsent("required")} />
                <Button  className="hw_cookiebanner__button" isPrimary={false} children={source==="page" ? texts[language]["button3b"] : texts[language]["button3a"]} onClick={closeBanner} />
            </div>
        </div> : null
    )
}

export default CookieBanner
