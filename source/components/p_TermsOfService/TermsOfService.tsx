import React from "react";
import { setClass } from "../../modules/setClass";
import { TermsOfServiceProps } from "./TermsOfService.types";
import texts from "./TermsOfService.json"
import "./TermsOfService.scss";
import Heading from "../a_Heading/Heading";
import Paragraph from "../a_Paragraph/Paragraph";

const TermsOfService = ({language, theme, className}: TermsOfServiceProps) => {

    return (
        <div className={setClass("hw_termsofservice", [theme], className)}>
            <Heading size={"teaser"}>Terms Of Service</Heading>

            <section className="hw_section">
                <Heading size={"xxlarge"}>Foreword</Heading>
                <Paragraph size={"medium"}>Lorem Ipsum</Paragraph>
            </section>
        </div>
    )
}

export default TermsOfService
