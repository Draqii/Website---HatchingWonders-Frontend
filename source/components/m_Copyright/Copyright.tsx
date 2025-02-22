import React from "react";
import { setClass } from "../../modules/setClass";
import { CopyrightProps } from "./Copyright.types";
import texts from "./Copyright.json"
import "./Copyright.scss";

const Copyright = ({language, theme, className}: CopyrightProps) => {

    return (
        <div className={setClass("copyright", [theme], className)}>
            copyright
        </div>
    )
}

export default Copyright
