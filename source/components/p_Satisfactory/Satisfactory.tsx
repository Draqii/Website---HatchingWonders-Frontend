import React from "react";
import { setClass } from "../../modules/setClass";
import { SatisfactoryProps } from "./Satisfactory.types";
import texts from "./Satisfactory.json"
import "./Satisfactory.scss";
import Button from "../a_Button/Button";

const Satisfactory = ({language, theme, className}: SatisfactoryProps) => {

    const calculate = () => {
        
    }
    
    return (
        <div className={setClass("hw_satisfactory", [theme], className)}>
            <Button isPrimary={false} children={"Calculate"} onClick={calculate} />
        </div>
    )
}

export default Satisfactory
