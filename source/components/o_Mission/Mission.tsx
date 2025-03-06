import React from "react";
import { setClass } from "../../modules/setClass";
import { MissionProps } from "./Mission.types";
import texts from "./Mission.json"
import "./Mission.scss";

const Mission = ({language, theme, className}: MissionProps) => {

    return (
        <div className={setClass("hw_mission", [theme], className)}>
            mission
        </div>
    )
}

export default Mission
