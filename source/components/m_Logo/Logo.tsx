import React from "react";
import { useNavigate } from "react-router-dom";
import { setClass } from "../../modules/setClass";
import { LogoProps } from "./Logo.types";
import { Icon, Text } from "da-awesome-library/build";
import SVG_Logo from "../../../public/svgs/logo.svg"
import texts from "./Logo.json"
import "./Logo.scss";

const Logo = ({language, theme, className}: LogoProps) => {

    const navigate = useNavigate()

    const onClick = () => {
        navigate("/")
    }

    return (
        <div onClick={onClick} className={setClass("hw_logo", [theme], className)}>
            <Icon 
                className="hw_logo__icon" 
                ReactSVG={SVG_Logo}
                theme="none"
            />
            <div className="hw_logo__text">
                <Text 
                    size="medium" 
                    theme={theme} 
                    className="hw_logo__primary">{texts[language]["text1"]}</Text>
                <Text 
                    size="medium" 
                    theme={theme} 
                    className="hw_logo__secondary">{texts[language]["text2"]}</Text>
            </div>
        </div>
    )
}

export default Logo
