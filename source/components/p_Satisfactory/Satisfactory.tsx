import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { SatisfactoryProps } from "./Satisfactory.types";
import { Button } from "da-awesome-library/build"
import texts from "./Satisfactory.json"
import "./Satisfactory.scss";

const Satisfactory = ({ language, theme, className }: SatisfactoryProps) => {

    useEffect(() => {
        document.title = "Satisfactory - Hatching Wonders"
    }, [])

    const calculate = () => {

    }

    return (
        <div className={setClass("hw_satisfactory", [theme], className)}>
            <Button
                theme={theme}
                isPrimary={false}
                children={"Calculate"}
                onClick={calculate} />
        </div>
    )
}

export default Satisfactory
