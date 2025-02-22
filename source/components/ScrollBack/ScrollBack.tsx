import React from "react";
import { setClass } from "../../modules/setClass";
import { ScrollBackProps } from "./ScrollBack.types";
import Text from "../a_Text/Text";
import SVG_Scrollback from "../../../public/svgs/scrollback.svg"
import Icon from "../a_Icon/Icon";
import "./ScrollBack.scss";

const ScrollBack = ({theme, className}: ScrollBackProps) => {

    const scrollToTop = () => {
        window.scrollTo({
            behavior: "smooth",
            left: 0,
            top: 0
        })
    }

    return (
        <div onClick={scrollToTop} className={setClass("hw_scrollback", [theme], className)}>
            <Icon 
                theme={theme} 
                className="hw_scrollback__icon" 
                ReactSVG={SVG_Scrollback} />
            <div className="hw_scrollback__textcontainer">
            <Text 
                className="hw_scrollback__text" 
                theme={theme === "light" ? "dark" : "light"}
                >Scroll</Text>
            <Text 
                className="hw_scrollback__text" 
                theme={theme === "light" ? "dark" : "light"}
                >Back</Text>
            </div>
        </div>
    )
}

export default ScrollBack
