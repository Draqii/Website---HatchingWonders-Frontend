import React from "react";
import { setClass } from "../../modules/setClass";
import { ImageProps } from "./Image.types";
import "./Image.scss";

const Image = ({onClick, src, alt, theme, className}: ImageProps) => {

    return (
        <img 
            onClick={onClick}
            src={src} 
            alt={alt ?? "no image"} 
            className={setClass("hw_image", [theme], className)} />
    )
}

export default Image
