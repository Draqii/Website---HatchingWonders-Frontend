import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { PitchesProps } from "./Pitches.types";
import { Heading } from "da-awesome-library/build";
import "./Pitches.scss";

const Pitches = ({theme, className}: PitchesProps) => {

    useEffect(() => {
        document.title = "Get Pitched - Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_pitches hw_route", [theme], className)}>
            <Heading theme={theme} content={"Our Services!"} size={"teaser"} />
            <Heading theme={theme} content={"We Design And Build Websites!"} size={"large"} />
        </div>
    )
}

export default Pitches
