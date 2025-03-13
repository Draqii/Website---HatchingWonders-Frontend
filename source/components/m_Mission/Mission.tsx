import React from "react";
import { setClass } from "../../modules/setClass";
import { MissionProps } from "./Mission.types";
import texts from "./Mission.json"
import Heading from "../a_Heading/Heading";
import Paragraph from "../a_Paragraph/Paragraph";
import "./Mission.scss";

const Mission = ({language, theme, className}: MissionProps) => {

    return (
        <div className={setClass("hw_mission", [theme], className)}>
            <Heading 
                className="hw_mission__title"
                theme={theme === "light" ? "dark" : "light"} 
                children={texts[language]["title"]} 
                size={"xlarge"} />
            <Paragraph 
                className="hw_mission__text"
                size={"medium"} 
                children={texts[language]["text"]} 
                theme={theme === "light" ? "dark" : "light"} />
        </div>
    )
}

export default Mission
