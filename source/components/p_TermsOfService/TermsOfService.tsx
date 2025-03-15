import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { TermsOfServiceProps } from "./TermsOfService.types";
import { List, Heading, Paragraph } from "da-awesome-library/build"
import texts from "./TermsOfService.json"
import "./TermsOfService.scss";

const TermsOfService = ({language, theme, className}: TermsOfServiceProps) => {

    useEffect(() => {
        document.title = "Terms Of Use - Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_termsofservice", [theme], className)}>
            <Heading theme={theme} size={"teaser"}>{texts[language]["title"]}</Heading>
            <section className="hw_section">
                <Heading className="hw_termsofservice__heading" theme={theme} size={"xxlarge"}>{texts[language]["heading_xxlarge"]}</Heading>
                <Paragraph className="hw_termsofservice__text" theme={theme} size={"medium"}>{texts[language]["text1"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_termsofservice__heading" theme={theme} size={"xlarge"}>{texts[language]["heading_xlarge"]}</Heading>
                <List 
                    theme={theme} 
                    isOrdered={true}
                    items={[
                    texts[language]["list1_item1"],
                    texts[language]["list1_item2"],
                    texts[language]["list1_item3"],
                    texts[language]["list1_item4"],
                    texts[language]["list1_item5"],
                    texts[language]["list1_item6"],
                    texts[language]["list1_item7"],
                    texts[language]["list1_item8"]
                ]} />
            </section>
            <section className="hw_section">
                <Heading className="hw_termsofservice__heading" theme={theme} size={"xlarge"}>{texts[language]["section1_heading"]}</Heading>
                <Paragraph className="hw_termsofservice__text" theme={theme} size={"medium"}>{texts[language]["section1_text1"]}</Paragraph>
                <Paragraph className="hw_termsofservice__text" theme={theme} size={"medium"}>{texts[language]["section1_text2"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_termsofservice__heading" theme={theme} size={"xlarge"}>{texts[language]["section2_heading"]}</Heading>
                <Paragraph className="hw_termsofservice__text" theme={theme} size={"medium"}>{texts[language]["section2_text"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_termsofservice__heading" theme={theme} size={"xlarge"}>{texts[language]["section3_heading"]}</Heading>
                <Paragraph className="hw_termsofservice__text" theme={theme} size={"medium"}>{texts[language]["section3_text"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_termsofservice__heading" theme={theme} size={"xlarge"}>{texts[language]["section4_heading"]}</Heading>
                <Paragraph className="hw_termsofservice__text" theme={theme} size={"medium"}>{texts[language]["section4_text"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_termsofservice__heading" theme={theme} size={"xlarge"}>{texts[language]["section5_heading"]}</Heading>
                <Paragraph className="hw_termsofservice__text" theme={theme} size={"medium"}>{texts[language]["section5_text"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_termsofservice__heading" theme={theme} size={"xlarge"}>{texts[language]["section6_heading"]}6. </Heading>
                <Paragraph className="hw_termsofservice__text" theme={theme} size={"medium"}>{texts[language]["section6_text"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_termsofservice__heading" theme={theme} size={"xlarge"}>{texts[language]["section7_heading"]}</Heading>
                <Paragraph className="hw_termsofservice__text" theme={theme} size={"medium"}>{texts[language]["section7_text"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_termsofservice__heading" theme={theme} size={"xlarge"}>{texts[language]["section8_heading"]}</Heading>
                <Paragraph className="hw_termsofservice__text" theme={theme} size={"medium"}>{texts[language]["section8_text"]}</Paragraph>
            </section>
        </div>
    )
}

export default TermsOfService
