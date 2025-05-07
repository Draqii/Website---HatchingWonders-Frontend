import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { HomeProps } from "./Home.types";
import texts from "./Home.json"
import "./Home.scss";
import { Paragraph, Heading } from "da-awesome-library/build";

const Home = ({language, theme, className}: HomeProps) => {

    useEffect(() => {
        document.title = "Hatching Wonders"
    }, [])

    const serviceItems = [
        <div key={0} className="hw_home__carousellitem"> 
            <Heading
                theme={theme}
                size={"large"}
            >Advertisement</Heading>
            <Paragraph
                theme={theme}
                size={"large"}
            >Advertisement</Paragraph>
        </div>,
        <div key={0} className="hw_home__carousellitem"> 
            <Heading
                theme={theme}
                size={"large"}
            >Charity</Heading>
            <Paragraph
                theme={theme}
                size={"large"}
            >Charity</Paragraph>
        </div>,
        <div key={1} className="hw_home__carousellitem"> 
            <Heading
                theme={theme}
                size={"large"}
            >Webdevelopment</Heading>
            <Paragraph
                theme={theme}
                size={"large"}
            >Webdevelopment</Paragraph>
        </div>,
        <div key={2} className="hw_home__carousellitem"> 
            <Heading
                theme={theme}
                size={"large"}
            >Exhibitions</Heading>
            <Paragraph
                theme={theme}
                size={"large"}
            >Exhibitions</Paragraph>
        </div>,
        <div> </div>,
        <div> </div>,
    ]

    return (
        <div className={setClass("hw_home", [theme], className)}>
            <Heading
                className="hw_home__title"
                theme={theme}
                size={"teaser"}
            >{texts[language]["title"]}</Heading>
            <Heading
                theme={theme}
                size={"xlarge"}
            >{texts[language]["subtitle"]}</Heading>
            <div className="hw_home__carousell">
                {serviceItems.map((carousellItem, carousellItemID) => carousellItem)}
            </div>
        </div>
    )
}

export default Home
