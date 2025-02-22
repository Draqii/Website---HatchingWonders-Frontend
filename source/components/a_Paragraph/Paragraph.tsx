import React from "react";
import { setClass } from "../../modules/setClass";
import { ParagraphProps } from "./Paragraph.types";
import "./Paragraph.scss";

const Paragraph = ({children, theme, className}: ParagraphProps) => {

    return (
        <p className={setClass("hw_paragraph", [theme], className)}>
            {children}
        </p>
    )
}

export default Paragraph
