import React from "react";
import { setClass } from "../../modules/setClass";
import { CopyrightProps } from "./Copyright.types";
import { Text } from "da-awesome-library/build"
import texts from "./Copyright.json"
import "./Copyright.scss";

const Copyright = ({language, theme, className}: CopyrightProps) => {

    return (
        <div className={setClass("hw_copyright", [theme], className)}>
            <Text theme={theme==="light"?"dark":"light"} size={"small"}>© 2023-2025 Hatching Wonders</Text>
        </div>
    )
}

export default Copyright
