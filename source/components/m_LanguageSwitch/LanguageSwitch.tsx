import React from "react";
import { setClass } from "../../modules/setClass";
import { LanguageSwitchProps } from "./LanguageSwitch.types";
import { setItem } from "../../modules/hooks/useCookie";
import { Image } from "da-awesome-library/build";
import img_flag_us from "../../../public/images/flag_us.png"
import img_flag_ger from "../../../public/images/flag_ger.webp"
import "./LanguageSwitch.scss";

const LanguageSwitch = ({onChange, language, theme, className}: LanguageSwitchProps) => {

    const updateLanguage = (language) => {
        setItem("hw_language", language, 360)
        onChange(language)
    }

    const languages = [
        { language: "german", flag: img_flag_ger},
        { language: "english", flag: img_flag_us}
    ]

    return (
        <div className={setClass("hw_languageswitch", [theme], className)}>
            {languages.map((mappedLanguage, language_id) => <Image alt="" theme={"dark"} key={language_id} className={setClass("hw_languageswitch__language", [language === mappedLanguage.language ? "active" : ""])} onClick={() => updateLanguage(mappedLanguage.language)} src={mappedLanguage.flag} /> )}
        </div>
    )
}

export default LanguageSwitch
