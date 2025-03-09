import React from "react";
import { setClass } from "../../modules/setClass";
import { MissionProps } from "./Mission.types";
import texts from "./Mission.json"
import Heading from "../a_Heading/Heading";
import "./Mission.scss";

const Mission = ({language, theme, className}: MissionProps) => {

    return (
        <div className={setClass("hw_mission", [theme], className)}>
            <Heading 
                className="hw_cookiebanner__title"
                theme={theme === "light" ? "dark" : "light"} 
                children={texts[language]["title"]} 
                size={"xxlarge"} />
        </div>
    )
}

export default Mission
