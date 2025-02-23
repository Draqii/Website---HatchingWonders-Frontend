import React from "react";
import { setClass } from "../../modules/setClass";
import { NotFoundProps } from "./NotFound.types";
import { useNavigate } from "react-router-dom";
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
            >Awh Bummers!</Heading>


            <Image 
                className="hw_notfound__image"
                src={img_bummers} 
                language={language} />

            <section id="hw_notfound__section1" className="hw_notfound__section">
                <Heading
                    theme={theme}
                    size={"xxlarge"}
                >Resource not found!</Heading>
                <Paragraph
                    theme={theme}
                    size={"large"}
                >We are sorry! We tried searching for the page or resource you requested but we can’t find it anywhere!</Paragraph>
            </section>  


            <section className="hw_notfound__sections">
                <section id="hw_notfound__section2" className="hw_notfound__section">
                    <Heading
                        theme={theme}
                        size={"xlarge"}
                    >Go To Our Home Page</Heading>
                    <Paragraph
                        theme={theme}
                        size={"medium"}
                    >To get back to our home page, click the following button. We’ll make sure to not get lost again.</Paragraph>
                    <Button
                        theme={theme}
                        isPrimary={true}
                        children={"To Welcome Page"}
                        onClick={navigateToWelcomePage} />
                </section>


                <section id="hw_notfound__section3" className="hw_notfound__section">
                    <Heading
                        theme={theme}
                        size={"xlarge"}
                    >Go Back To Last Page</Heading>
                    <Paragraph
                        theme={theme}
                        size={"medium"}
                    >To get back to the last page you visited, click the following button. You might get redirected.</Paragraph>
                    <Button
                        theme={theme}
                        isPrimary={false}
                        children={"To Last Page Visited"}
                        onClick={navigateToLandingPage} />
                </section>
            </section>


        </div>
    )
}

export default NotFound
