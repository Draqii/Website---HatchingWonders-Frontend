import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { PrivacyPolicyProps } from "./PrivacyPolicy.types";
import { Button, Heading, List, Paragraph, Section } from "da-awesome-library/build";
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = ({theme, className}: PrivacyPolicyProps) => {

    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Privacy Policy - Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_privacypolicy hw_route", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"Privacy Policy"} />

            <Section gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} size="large" content={"Table Of Contents"} />
                <List className="hw_list" theme={theme} items={[
                    <HashLink className={setClass("hw_hashlink", [theme])} to={{pathname: "/privacy-policy" ,hash: "#section-1"}} children="1. Which Data We Collect" />,
                    <HashLink className={setClass("hw_hashlink", [theme])} to={{pathname: "/privacy-policy" ,hash: "#section-2"}} children="2. Why We Collect Your Data" />,
                    <HashLink className={setClass("hw_hashlink", [theme])} to={{pathname: "/privacy-policy" ,hash: "#section-3"}} children="3. How We Collect Your Data" />,
                    <HashLink className={setClass("hw_hashlink", [theme])} to={{pathname: "/privacy-policy" ,hash: "#section-4"}} children="4. How Long We Store Your Data" />,
                    <HashLink className={setClass("hw_hashlink", [theme])} to={{pathname: "/privacy-policy" ,hash: "#section-5"}} children="5. How We Protect Your Data" />,
                    <HashLink className={setClass("hw_hashlink", [theme])} to={{pathname: "/privacy-policy" ,hash: "#section-6"}} children="6. How You're Notified On Changes" />,
                    <HashLink className={setClass("hw_hashlink", [theme])} to={{pathname: "/privacy-policy" ,hash: "#section-7"}} children="7. How You Can Reach Out" />,
                ]} />
            </Section>

            <Section id="section-1" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_privacypolicy__sectionheading" size="large" content={"1. Which Data We Collect"} />
                <Paragraph theme={theme} content={"We collect two types of data, one type is data required for the page to function, we store those in the cookies. Then we also store data created by interactions you do on the page (where everytime this occurs you'll have to tick a checkbox agreeing to data being safed)."} />
            </Section>

            <Section id="section-2" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_privacypolicy__sectionheading" size="large" content={"2. Why We Collect Your Data"} />
                <Paragraph theme={theme} content={"While data thats used for the page to function explains itself, data that you leave by interacting with forms will be stored to confidentally process and respond to the open interaction. We do not collect any data for the sole purpose of collecting it, nor do we ever share your data."} />
            </Section>

            <Section id="section-3" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_privacypolicy__sectionheading" size="large" content={"3. How We Collect Your Data"} />
                <Paragraph theme={theme} content={"Your data is only being collected via either form interactions (such as a contact form) and through cookies (data thats required for the page to function)"} />
            </Section>

            <Section id="section-4" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_privacypolicy__sectionheading" size="large" content={"4. How Long We Store Your Data"} />
                <Paragraph theme={theme} content={"Your cookies will be reset after 90 days. Data collected in forms through our backend will be stored until your inquiry has been satisfied, otherwise after a year has passed."} />
            </Section>

            <Section id="section-5" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_privacypolicy__sectionheading" size="large" content={"5. How We Protect Your Data"} />
                <Paragraph theme={theme} content={"Your data is being stored in a secured database where every entry is encrypted. Whenever data is being sent between two endpoints, the communication between those endpoints remains encrypted aswell via HTTPS/TLS."} />
            </Section>

            <Section id="section-6" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} className="hw_privacypolicy__sectionheading" size="large" content={"6. How You're Notified On Changes"} />
                <Paragraph theme={theme} content={"Whenever this privacy policy changes, you will be prompted to read it and agree to it, the next time you visit the website after the policy has been changed."} />
            </Section>

            <Section id="section-7" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} size="large" content={"7. How You Can Reach Out"} />
                <Paragraph theme={theme} className="hw_privacypolicy__sectionheading" content={"If you have questions about this privacy policy and like to reach out, please see our contact page. We'll gladly get back to any questions surrounding our privacy policy."} />
            </Section>
            
            <Button onClick={() => navigate(-1)} content={"Back To Previous Page"} />
        </div>
    )
}

export default PrivacyPolicy
