import React from "react";
import { setClass } from "../../modules/setClass";
import { FooterProps } from "./Footer.types";
import LanguageSwitch from "../m_LanguageSwitch/LanguageSwitch";
import ScrollBack from "../m_ScrollBack/ScrollBack";
import Copyright from "../m_Copyright/Copyright";
import Link from "../a_Link/Link";
import "./Footer.scss";

const Footer = ({language, onLanguageChange, theme, className}: FooterProps) => {

    return (
        <div className={setClass("hw_footer", [theme], className)}>
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
                    <Link theme={theme === "light" ? "dark" : "light"} isInternal={true} to={"terms-of-use"}>Terms Of Use</Link>
                    <Link theme={theme === "light" ? "dark" : "light"} isInternal={true} to={"privacy-policy"}>Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
