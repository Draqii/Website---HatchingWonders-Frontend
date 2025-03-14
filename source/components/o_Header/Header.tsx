import React from "react";
import { setClass } from "../../modules/setClass";
import { HeaderProps } from "./Header.types";
import Logo from "../m_Logo/Logo";
import NightSwitch from "../m_NightSwitch/NightSwitch";
import "./Header.scss";

const Header = ({language, onNightSwitchChange, theme, className}: HeaderProps) => {

    return (
        <header className={setClass("hw_header", [theme], className)}>
            <Logo language={language} className="hw_header__logo" theme={theme} />
            <NightSwitch className="hw_header__niteswitch" onChange={onNightSwitchChange} />
        </header>
    )
}

export default Header
