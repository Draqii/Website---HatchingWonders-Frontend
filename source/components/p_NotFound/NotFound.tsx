import React from "react";
import {setClass} from "../../modules/setClass";
import {NotFoundProps} from "./NotFound.types";
import "./NotFound.scss";
import Heading from "../a_Heading/Heading";

const NotFound = ({theme, className}: NotFoundProps) => {

    return (
        <div className={setClass("hw_notfound", [theme], className)}>
            <Heading theme={theme} size={"teaser"}>Awh Bummers!</Heading>
            <Heading theme={theme} size={"teaser"}>Resource not found!</Heading>
            
        </div>
    )
}

export default NotFound
