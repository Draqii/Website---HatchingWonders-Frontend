import React, { useState } from "react";
import useCookie, { setItem } from "../../modules/hooks/useCookie";
import { NiteSwitch } from "niteswitch";
import { setClass } from "../../modules/setClass";
import { NightSwitchProps } from "./NightSwitch.types";
import "./NightSwitch.scss";

const NightSwitch = ({className, onChange}: NightSwitchProps) => {


    const [theme, setTheme]: any = useState(useCookie("hw_lightmode", "light")[0] === "light")

    const updateTheme = (theme) => {
        setItem("hw_lightmode", theme, 360)
        onChange(theme)
    }

    return (
        <div className={setClass("hw_niteswitch", [theme], className)}>
            <NiteSwitch 
                enabled={theme ? true : false} 
                _setEnabled={setTheme}
                onEnable={() => updateTheme("light")} 
                onDisable={() => updateTheme("dark")}
            />
        </div>
    )
}

export default NightSwitch
//<NiteSwitch 
//    enabled={theme ? true : false} 
//    _setEnabled={setTheme}
//    onEnable={() => updateTheme(true)} 
//    onDisable={() => updateTheme(false)}
///>