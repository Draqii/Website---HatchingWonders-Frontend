import React from "react";
import { setClass } from "../../modules/setClass";
import { FooterProps } from "./Footer.types";
import LanguageSwitch from "../m_LanguageSwitch/LanguageSwitch";
import ScrollBack from "../m_ScrollBack/ScrollBack";
import "./Footer.scss";

const Footer = ({language, onLanguageChange, theme, className}: FooterProps) => {

    return (
        <div className={setClass("hw_footer", [theme], className)}>
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
    )
}

export default Footer
