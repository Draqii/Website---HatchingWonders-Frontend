import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { PrivacyPolicyProps } from "./PrivacyPolicy.types";
import { List, Heading, Paragraph } from "da-awesome-library/build"
import texts from "./PrivacyPolicy.json"
import "./PrivacyPolicy.scss";

const PrivacyPolicy = ({ language, theme, className }: PrivacyPolicyProps) => {

    useEffect(() => {
        document.title = "Privacy Policy - Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_privacypolicy", [theme], className)}>
            <Heading theme={theme} size={"teaser"}>{texts[language]["title"]}</Heading>
            <section className="hw_section">
                <Heading className="hw_privacypolicy__heading" theme={theme} size={"xxlarge"}>{texts[language]["heading_xxlarge"]}</Heading>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["text1"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_privacypolicy__heading" theme={theme} size={"xlarge"}>{texts[language]["heading_xlarge"]}</Heading>
                <List theme={theme} isOrdered items={ [
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
                <Heading className="hw_privacypolicy__heading" theme={theme} size={"xlarge"}>{texts[language]["section1_heading"]}</Heading>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section1_text1"]} </Paragraph>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section1_text2"]} </Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_privacypolicy__heading" theme={theme} size={"xlarge"}>{texts[language]["section2_heading"]}</Heading>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section2_text"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_privacypolicy__heading" theme={theme} size={"xlarge"}>{texts[language]["section3_heading"]}</Heading>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section3_text1"]}</Paragraph>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section3_text2"]}</Paragraph>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section3_text3"]}</Paragraph>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section3_text4"]}</Paragraph>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section3_text5"]}</Paragraph>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section3_text6"]}</Paragraph>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section3_text7"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_privacypolicy__heading" theme={theme} size={"xlarge"}>{texts[language]["section4_heading"]}</Heading>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section4_text"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_privacypolicy__heading" theme={theme} size={"xlarge"}>{texts[language]["section5_heading"]}</Heading>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section5_text"]}</Paragraph>
                <List 
                    isOrdered={false}
                    theme={theme} 
                    items={[
                    texts[language]["list2_item1"],
                    texts[language]["list2_item2"],
                    texts[language]["list2_item3"],
                    texts[language]["list2_item4"],
                    texts[language]["list2_item5"],
                    texts[language]["list2_item6"],
                    texts[language]["list2_item7"],
                    texts[language]["list2_item8"],
                ]} />
            </section>
            <section className="hw_section">
                <Heading className="hw_privacypolicy__heading" theme={theme} size={"xlarge"}>{texts[language]["section6_heading"]}</Heading>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section6_text"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_privacypolicy__heading" theme={theme} size={"xlarge"}>{texts[language]["section7_heading"]}</Heading>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section7_text"]}</Paragraph>
            </section>
            <section className="hw_section">
                <Heading className="hw_privacypolicy__heading" theme={theme} size={"xlarge"}>{texts[language]["section8_heading"]}</Heading>
                <Paragraph className="hw_privacypolicy__text" theme={theme} size={"medium"}>{texts[language]["section8_text"]}</Paragraph>
            </section>
        </div>
    )
}

export default PrivacyPolicy
