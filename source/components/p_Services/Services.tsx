import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { ServicesProps } from "./Services.types";
import { Heading } from "da-awesome-library/build";
import "./Services.scss";

const Services = ({theme, className}: ServicesProps) => {

    useEffect(() => {
        document.title = "Our Services - Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_services hw_route", [theme], className)}>
            <Heading theme={theme} content={"Our Services!"} size={"teaser"} />
            <Heading theme={theme} content={"We Design And Build Websites!"} size={"large"} />
        </div>
    )
}

export default Services
