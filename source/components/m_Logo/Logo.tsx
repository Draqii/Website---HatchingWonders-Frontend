import React from "react";
import { setClass } from "../../modules/setClass";
import { LogoProps } from "./Logo.types";
import Icon from "../a_Icon/Icon";
import SVG_Logo from "../../../public/svgs/logo.svg"
import "./Logo.scss";
import Text from "../a_Text/Text";

const Logo = ({theme, className}: LogoProps) => {

    return (
        <div className={setClass("hw_logo", [theme], className)}>
            <Icon className="hw_logo__icon" ReactSVG={SVG_Logo} />
            <div className="hw_logo__text">
                <Text theme={theme} className="hw_logo__primary">Hatching</Text>
                <Text theme={theme} className="hw_logo__secondary">Wonders</Text>
            </div>
        </div>
    )
}

export default Logo
