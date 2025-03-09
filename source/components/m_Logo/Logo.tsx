import React from "react";
import { setClass } from "../../modules/setClass";
import { LogoProps } from "./Logo.types";
import Icon from "../a_Icon/Icon";
import SVG_Logo from "../../../public/svgs/logo.svg"
import Text from "../a_Text/Text";
import texts from "./Logo.json"
import "./Logo.scss";
import { useNavigate } from "react-router-dom";

const Logo = ({language, theme, className}: LogoProps) => {

    const navigate = useNavigate()

    const onClick = () => {
        navigate("/")
    }

    return (
        <div onClick={onClick} className={setClass("hw_logo", [theme], className)}>
            <Icon className="hw_logo__icon" ReactSVG={SVG_Logo} />
            <div className="hw_logo__text">
                <Text size="medium" theme={theme} className="hw_logo__primary">{texts[language]["text1"]}</Text>
                <Text size="medium" theme={theme} className="hw_logo__secondary">{texts[language]["text2"]}</Text>
            </div>
        </div>
    )
}

export default Logo
