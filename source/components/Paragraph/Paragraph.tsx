import React from "react";
import { setClass } from "../../modules/setClass";
import { ParagraphProps } from "./Paragraph.types";
import texts from "Paragraph.json"
import "./Paragraph.scss";

const Paragraph = ({language, theme, className}: ParagraphProps) => {

    return (
        <div className={setClass("hw_paragraph", [theme], className)}>
            paragraph
        </div>
    )
}

export default Paragraph
