import React from "react";
import { setClass } from "../../modules/setClass";
import { FooterProps } from "./Footer.types";
import LanguageSwitch from "../m_LanguageSwitch/LanguageSwitch";
import ScrollBack from "../ScrollBack/ScrollBack";
import "./Footer.scss";

const Footer = ({language, onLanguageChange, theme, className}: FooterProps) => {

    return (
        <div className={setClass("hw_footer", [theme], className)}>
            <ScrollBack 
                className="hw_footer_scrollback" 
                theme={theme} />
            <LanguageSwitch 
                className="hw_footer__language" 
                theme={theme} 
                language={language} 
                onChange={onLanguageChange} />
        </div>
    )
}

export default Footer
