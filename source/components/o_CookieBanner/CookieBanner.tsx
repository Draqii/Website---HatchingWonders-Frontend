import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setClass } from "../../modules/setClass";
import { setItem } from "../../modules/hooks/useCookie";
import { CookieBannerProps } from "./CookieBanner.types";
import { Button, Heading, Icon, Table, Paragraph, Image } from "da-awesome-library/build"
import texts from "./CookieBanner.json"
import SVG_Close from "../../../public/svgs/close.svg"
import img_cookies from "../../../public/images/cookie.png"
import "./CookieBanner.scss";

const CookieBanner = ({ cookieConsent, id, source, onConsentChange, language, theme, className}: CookieBannerProps) => {

    const navigate = useNavigate()
    const [isOpened, setIsOpened] = useState(true)

    const closeBanner = () => {
        if(source !== "page") setIsOpened(false)
        else navigate(-1);
    }

    const updateConsent = (choice) => {
            setItem("hw_consent", choice, 360)
            onConsentChange(choice)
            closeBanner()
        }

    const deleteCookies = () => {
        setItem("hw_lightmode", "", -360)
        setItem("hw_language", "", -360)
        setItem("hw_consent", "", -360)
        closeBanner()
    }

    const existing_cookies = [
        "hw_lightmode",
        "hw_language",
        "hw_consent"
    ]

    return (
        isOpened === true ? 
        <span>
        <div id={id} className="hw_cookiebanner__fg"/>
        <div id={id} className={setClass("hw_cookiebanner", [theme, source==="page"?"page":""], className)}>
            <Heading 
                className="hw_cookiebanner__title"
                theme={theme === "light" ? "dark" : "light"} 
                children={texts[language]["title"]} 
                size={"xxlarge"} />
            <Paragraph
                className="hw_cookiebanner__text"
                theme={theme === "light" ? "dark" : "light"}
                children={texts[language]["text"]}
                size="large"
            />
            <Icon 
                onClick={() => closeBanner()} 
                theme={theme === "light" ? "light" : "dark"} 
                className="hw_cookiebanner__close" 
                ReactSVG={SVG_Close} />

            <div className="hw_cookiebanner__options">
                <Heading 
                    theme={theme === "light" ? "dark" : "light"} 
                    className="hw_cookiebanner__title"
                    children={texts[language]["table_title"]} 
                    size={"xlarge"} />
                    <Table 
                        theme={theme === "light" ? "dark" : "light"}
                        data={({
                            headings: [texts[language]["table1_heading1"], texts[language]["table1_heading2"], , texts[language]["table1_heading3"]], 
                            rows: existing_cookies.map((cookie, cookieID) => ({columns: [
                                cookie, 
                                texts[language]["table1_row"+(cookieID+1) +"_column2"],
                                texts[language]["table1_row"+(cookieID+1) +"_column3"],
                                ]})  )  })} />
            </div>
            <div className="hw_cookiebanner__controls">
                <Button 
                    theme={theme}  
                    className="hw_cookiebanner__button" 
                    isPrimary={false} 
                    children={texts[language]["button1"]} 
                    onClick={() => updateConsent("all")} />
                <Button 
                    theme={theme}  
                    className="hw_cookiebanner__button" 
                    isPrimary={false} 
                    children={texts[language]["button2"]} 
                    onClick={() => updateConsent("required")} />
                <Button 
                    theme={theme}  
                    className="hw_cookiebanner__button" 
                    isPrimary={false} 
                    children={source==="page" ? texts[language]["button3b"] : texts[language]["button3a"]} 
                    onClick={closeBanner} />
            </div>
            {cookieConsent === "all" || cookieConsent === "required" ? <Paragraph
                className="hw_cookiebanner__text"
                theme={theme === "light" ? "dark" : "light"}
                children={cookieConsent === "all" ? texts[language]["status1"] : texts[language]["status2"]}
                size="medium"
                onClick={() => deleteCookies()}
            /> : null}
            {cookieConsent === "all" || cookieConsent === "required" ? <Paragraph
                className="hw_cookiebanner__delete"
                theme={theme === "light" ? "dark" : "light"}
                children={texts[language]["delete"]}
                size="medium"
                onClick={() => deleteCookies()}
            /> 
            : null}
            <Image 
                alt=""
                className="hw_cookiebanner__bg" 
                src={img_cookies} 
                theme="dark" />
        </div></span> : null
    )
}

export default CookieBanner
