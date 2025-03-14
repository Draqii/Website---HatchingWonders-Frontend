import React from "react";
import { setClass } from "../../modules/setClass";
import { FooterProps } from "./Footer.types";
import { Link } from "da-awesome-library/build";
import LanguageSwitch from "../m_LanguageSwitch/LanguageSwitch";
import ScrollBack from "../m_ScrollBack/ScrollBack";
import Copyright from "../m_Copyright/Copyright";
import Mission from "../m_Mission/Mission";
import Newsletter from "../m_Newsletter/Newsletter";
import texts from "./Footer.json"
import Socials from "../m_Socials/Socials";
import "./Footer.scss";

const Footer = ({language, onLanguageChange, theme, className}: FooterProps) => {

    return (
        <div className={setClass("hw_footer", [theme], className)}>
            <div className="hw_footer__container">
            <Mission 
                className="hw_footer_mission hw_footer__item" 
                language={language} 
                theme={theme} 
            />
            <Newsletter 
                className="hw_footer_newsletter hw_footer__item" 
                language={language} 
                theme={theme}
            />
            <Socials 
                className="hw_footer_socials hw_footer__item" 
                language={language} 
                theme={theme}
            />
            </div>        
            <div className="hw_footer__row">
                <ScrollBack 
                    className="hw_footer_scrollback" 
                    language={language}
                    theme={theme} />
                <LanguageSwitch 
                    className="hw_footer__language" 
                    onChange={onLanguageChange} 
                    language={language} 
                    theme={theme} />
            </div>
            <div className="hw_footer__row">
                <Copyright 
                    className="hw_footer__copyright"
                    language={language} 
                    theme={theme} />
                <div className="hw_footer__links">
                    <Link theme={theme === "light" ? "dark" : "light"} isInternal={true} to={"cookies"}>{texts[language]["link1"]}</Link>
                    <Link theme={theme === "light" ? "dark" : "light"} isInternal={true} to={"terms-of-use"}>{texts[language]["link2"]}</Link>
                    <Link theme={theme === "light" ? "dark" : "light"} isInternal={true} to={"privacy-policy"}>{texts[language]["link3"]}</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
