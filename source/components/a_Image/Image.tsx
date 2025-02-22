import React from "react";
import { setClass } from "../../modules/setClass";
import { ImageProps } from "./Image.types";
import texts from "./Image.json"
import "./Image.scss";

const Image = ({language, onClick, src, alt, theme, className}: ImageProps) => {

    return (
        <img 
            onClick={onClick}
            src={src} 
            alt={alt ?? texts[language]["text1"]} 
            className={setClass("hw_image", [theme], className)} />
    )
}

export default Image
