import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { changeForm, submitForm } from "../../modules/form";
import { NewsletterProps } from "./Newsletter.types";
import texts from "./Newsletter.json"
import Heading from "../a_Heading/Heading";
import Textbox from "../a_Textbox/Textbox";
import Button from "../a_Button/Button";
import Paragraph from "../a_Paragraph/Paragraph";
import Checkbox from "../a_Checkbox/Checkbox";
import "./Newsletter.scss";

const Newsletter = ({language, theme, className}: NewsletterProps) => {

    const [form, setForm] = useState({
        email: "",
        name: "",
        check: false,
        errors: [],
    })

    return (
        <div className={setClass("hw_newsletter", [theme], className)}>
            <Heading 
                className="hw_newsletter__title"
                theme={theme === "light" ? "dark" : "light"} 
                children={texts[language]["title"]} 
                size={"xlarge"} />
            <Paragraph 
                className="hw_newsletter__text"
                size={"medium"} 
                children={texts[language]["text"]} 
                theme={theme === "light" ? "dark" : "light"} />
            <Textbox 
                className="hw_newsletter__textbox"
                value={form.email} 
                theme={theme} 
                onChange={(value) => changeForm(form, "email", value, setForm)} 
                placeholder={texts[language]["textbox1_placeholder"]} />
            <Textbox 
                className="hw_newsletter__textbox"
                value={form.name} 
                theme={theme} 
                onChange={(value) => changeForm(form, "name", value, setForm)} 
                placeholder={texts[language]["textbox2_placeholder"]} />
            <Checkbox 
                className="hw_newsletter__checkbox"
                checked={form.check} 
                theme={theme} 
                onChange={(value) => changeForm(form, "check", value, setForm)} 
                text={texts[language]["checkbox"]} />
            {form.errors.length > 0 ? form.errors.map((error, error_id) => <Paragraph 
                key={error_id}
                className="hw_newsletter__text"
                size={"medium"} 
                children={error} 
                theme={theme === "light" ? "dark" : "light"} />) : null}
            <Button 
                className="hw_newsletter__button"
                isPrimary={false} 
                theme={theme} 
                children={texts[language]["button"]} 
                onClick={() => submitForm(form, setForm, {
                    "consent": texts[language]["error_consent"],
                    "empty_email": texts[language]["error_empty_email"]
                })} />
        </div>
    )
}

export default Newsletter
