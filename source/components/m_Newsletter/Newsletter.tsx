import React, { useState } from "react";
import { setClass } from "../../modules/setClass";
import { NewsletterProps } from "./Newsletter.types";
import texts from "./Newsletter.json"
import Heading from "../a_Heading/Heading";
import "./Newsletter.scss";
import Textbox from "../Textbox/Textbox";
import Button from "../a_Button/Button";

const Newsletter = ({language, theme, className}: NewsletterProps) => {

    const [form, setForm] = useState({
        email: "",
        name: ""
    })

    const changeForm = (key, value) => {
        const copy = JSON.parse(JSON.stringify(form))
        copy[key] = value
        setForm(copy)
    }

    const submitForm = () => {

    }

    return (
        <div className={setClass("hw_newsletter", [theme], className)}>
            <Heading 
                className="hw_cookiebanner__title"
                theme={theme === "light" ? "dark" : "light"} 
                children={texts[language]["title"]} 
                size={"xlarge"} />
            <Textbox 
                value={form.email} 
                theme={theme === "light" ? "dark" : "light"} 
                onChange={(value) => changeForm("email", value)} 
                placeholder={texts[language]["textbox1_placeholder"]} />
            <Textbox 
                value={form.name} 
                theme={theme === "light" ? "dark" : "light"} 
                onChange={(value) => changeForm("name", value)} 
                placeholder={texts[language]["textbox2_placeholder"]} />
            <Button 
                isPrimary={false} 
                theme={theme === "light" ? "dark" : "light"} 
                children={texts[language]["button"]} 
                onClick={submitForm} />
        </div>
    )
}

export default Newsletter
