import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { TermsAndConditionsProps } from "./TermsAndConditions.types";
import { Button, Heading, List, Paragraph, Section } from "da-awesome-library/build";
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";
import "./TermsAndConditions.scss";

const TermsAndConditions = ({theme, className}: TermsAndConditionsProps) => {

    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Terms And Conditions - Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_termsandconditions hw_route", [theme], className)}>
            <Heading theme={theme} className="hw_hutch__teaserheading" size="teaser" content={"Terms And Conditions"} />

            <Section gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} size="large" content={"Table Of Contents"} />
                <List theme={theme} items={[ /* Disclaimer, Intellectual Property,   */
                    <HashLink className={setClass("hw_hashlink", [theme])} theme={theme} to={{pathname: "/terms-and-conditions" ,hash: "#section-1"}} children="1. Common Terms" />,
                    <HashLink className={setClass("hw_hashlink", [theme])} theme={theme} to={{pathname: "/terms-and-conditions" ,hash: "#section-2"}} children="2. Legal Disclaimer" />,
                    <HashLink className={setClass("hw_hashlink", [theme])} theme={theme} to={{pathname: "/terms-and-conditions" ,hash: "#section-3"}} children="3. Intellectual Property" />,
                    <HashLink className={setClass("hw_hashlink", [theme])} theme={theme} to={{pathname: "/terms-and-conditions" ,hash: "#section-4"}} children="4. Licenses And Attribution" />,
                    <HashLink className={setClass("hw_hashlink", [theme])} theme={theme} to={{pathname: "/terms-and-conditions" ,hash: "#section-5"}} children="5. Legal Expenses" />,
                    <HashLink className={setClass("hw_hashlink", [theme])} theme={theme} to={{pathname: "/terms-and-conditions" ,hash: "#section-6"}} children="6. Privacy Policy" />,
                    <HashLink className={setClass("hw_hashlink", [theme])} theme={theme} to={{pathname: "/terms-and-conditions" ,hash: "#section-7"}} children="7. How You're Notified On Changes" />,
                    <HashLink className={setClass("hw_hashlink", [theme])} theme={theme} to={{pathname: "/terms-and-conditions" ,hash: "#section-8"}} children="8. How You Can Reach Out" />,
                ]} />
            </Section>
            <Section id="section-1" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_termsandconditions__sectionheading" size="large" content={"1. Common Terms"} />
                <Paragraph theme={theme} content={"The following Terms and Conditions describes all legal related to this website, and related to the user using this website. These terms and conditions do grasp and persist throughout the entirety of each and every of your stays on our website, namely 'Hatching Wonders'."} />
            </Section>

            <Section id="section-2" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_termsandconditions__sectionheading" size="large" content={"2. Legal Disclaimer"} />
                <Paragraph theme={theme} content={"Information spread by us, is being distributed in the hope of being useful. Offers made by us are not bound to anything, but they do aim to attract further business, only actual service contracts are binding. We hold no guarantee for both, informations distributed by us, aswell as offers made by us"} />
            </Section>

            <Section id="section-3" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_termsandconditions__sectionheading" size="large" content={"3. Intellectual Property"} />
                <Paragraph theme={theme} content={"Our Pages and our articles are our own intellectual property. You are free to share info you gain from it, however our original page must remain linked if used extensively. We do not tolerate having our content being ripped off and redistributed. We do not tolerate to be datamined for uses of any AI for any reason."} />
            </Section>

            <Section id="section-4" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_termsandconditions__sectionheading" size="large" content={"4. Licenses And Attribution"} />
                <Paragraph theme={theme} content={"Our stock media is properly licensed and referenced to. Hence we are not claiming total ownership of images that we attributed to other sources. Those are their intellectual property, underlying their own licensing rules. Generally however, everything unless attributed otherwise, is our own intellectual property, hence see the section above."} />
            </Section>

            <Section id="section-5" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_termsandconditions__sectionheading" size="large" content={"5. Legal Expenses"} />
                <Paragraph theme={theme} content={"Shall a legal issue with us result into an actual court case, we will either only allow the legislation closest to us, or alternatively expect the pay for our travel to the legislation to be made up, if the claims made by the offending user end up to be insufficent."} />
            </Section>

            <Section id="section-6" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_termsandconditions__sectionheading" size="large" content={"6. Privacy policy"} />
                <Paragraph theme={theme} content={"By visiting this website and using it (which can only happen after accepting the privacy policy), your data will be handled as described in the privacy policy. It is effective as part of the terms and conditions of using this website."} />
            </Section>

            <Section id="section-7" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_termsandconditions__sectionheading" size="large" content={"7. How You're Notified On Changes"} />
                <Paragraph theme={theme} content={"Whenever these terms and conditions change, you will be prompted to read it and agree to it, the next time you visit the website after the policy has been changed."} />
            </Section>     

            <Section id="section-8" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_termsandconditions__sectionheading" size="large" content={"8. How You Can Reach Out"} />
                <Paragraph theme={theme} content={"If you have questions about these terms and conditions and like to reach out, please see our contact page. We'll gladly get back to any questions surrounding our terms and conditions."} />
            </Section>
            
            <Button onClick={() => navigate(-1)} content={"Back To Previous Page"} />
        </div>
    )
}

export default TermsAndConditions
