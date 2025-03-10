import React from "react";
import { setClass } from "../../modules/setClass";
import { ParagraphProps } from "./Paragraph.types";
import "./Paragraph.scss";

const Paragraph = ({onClick, size, children, theme, className}: ParagraphProps) => {

    const _onClick = () => {
        if(onClick) onClick()
    }

    return (
        <p onClick={_onClick} className={setClass("hw_paragraph", [theme, size], className)}>
            {children}
        </p>
    )
}

export default Paragraph
