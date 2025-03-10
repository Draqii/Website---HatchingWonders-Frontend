import React from "react";
import { setClass } from "../../modules/setClass";
import { SocialsProps } from "./Socials.types";
import texts from "./Socials.json"
import Heading from "../a_Heading/Heading";
import Image from "../a_Image/Image";
import Paragraph from "../a_Paragraph/Paragraph";
import social_facebook from "../../../public/images/social_facebook.png"
import social_instagram from "../../../public/images/social_instagram.png"
import social_discord from "../../../public/images/social_discord.png"
import "./Socials.scss";

const Socials = ({language, theme, className}: SocialsProps) => {

    return (
        <div className={setClass("hw_socials", [theme], className)}>
            <Heading 
                className="hw_socials__title"
                theme={theme === "light" ? "dark" : "light"} 
                children={texts[language]["title"]} 
                size={"xlarge"} />
            <Paragraph 
                className="hw_socials__text"
                    size={"medium"} 
                    children={texts[language]["text1"]} 
                    theme={theme === "light" ? "dark" : "light"} />
            <div className="hw_socials__discord hw_socials__container">
                <Image 
                    src={social_discord} 
                    language={language} />
                <Paragraph 
                    className="hw_socials__text"
                    size={"medium"} 
                    children={texts[language]["text2"]} 
                    theme={theme === "light" ? "dark" : "light"} />
            </div>
            <div className="hw_socials__instagram hw_socials__container">
                <Image 
                    src={social_instagram} 
                    language={language} />
                <Paragraph 
                    className="hw_socials__text"
                    size={"medium"} 
                    children={texts[language]["text3"]} 
                    theme={theme === "light" ? "dark" : "light"} />
            </div>
            <div className="hw_socials__facebook hw_socials__container">
                <Image 
                    src={social_facebook} 
                    language={language} />
                <Paragraph 
                    className="hw_socials__text"
                    size={"medium"} 
                    children={texts[language]["text4"]} 
                    theme={theme === "light" ? "dark" : "light"} />
            </div>
        </div>
    )
}

export default Socials
