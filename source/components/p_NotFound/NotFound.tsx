import React from "react";
import { setClass } from "../../modules/setClass";
import { NotFoundProps } from "./NotFound.types";
import { useNavigate } from "react-router-dom";
import texts from "./NotFound.json"
import Heading from "../a_Heading/Heading";
import Paragraph from "../a_Paragraph/Paragraph";
import Button from "../a_Button/Button";
import Image from "../a_Image/Image";
import img_bummers from "../../../public/images/bummers.png"
import "./NotFound.scss";

const NotFound = ({ language, theme, className }: NotFoundProps) => {

    const navigate = useNavigate()

    const navigateToWelcomePage = () => {
        navigate("/")
    }

    const navigateToLandingPage = () => {
        navigate(-1)
    }

    return (
        <div className={setClass("hw_notfound", [theme], className)}>
            <Heading
                theme={theme}
                size={"teaser"}
            >{texts[language]["title"]}</Heading>


            <Image 
                className="hw_notfound__image"
                src={img_bummers} 
                language={language} />

            <section id="hw_notfound__section1" className="hw_notfound__section">
                <Heading
                    theme={theme}
                    size={"xxlarge"}
                >{texts[language]["section1_heading"]}</Heading>
                <Paragraph
                    theme={theme}
                    size={"large"}
                >{texts[language]["section1_text"]}</Paragraph>
            </section>  


            <section className="hw_notfound__sections">
                <section id="hw_notfound__section2" className="hw_notfound__section">
                    <Heading
                        theme={theme}
                        size={"xlarge"}
                    >{texts[language]["section2_heading"]}</Heading>
                    <Paragraph
                        theme={theme}
                        size={"medium"}
                    >{texts[language]["section2_text"]}</Paragraph>
                    <Button
                        theme={theme}
                        isPrimary={true}
                        children={texts[language]["section2_button"]}
                        onClick={navigateToWelcomePage} />
                </section>


                <section id="hw_notfound__section3" className="hw_notfound__section">
                    <Heading
                        theme={theme}
                        size={"xlarge"}
                    >{texts[language]["section3_heading"]}</Heading>
                    <Paragraph
                        theme={theme}
                        size={"medium"}
                    >{texts[language]["section3_text"]}</Paragraph>
                    <Button
                        theme={theme}
                        isPrimary={false}
                        children={texts[language]["section3_button"]}
                        onClick={navigateToLandingPage} />
                </section>
            </section>


        </div>
    )
}

export default NotFound
