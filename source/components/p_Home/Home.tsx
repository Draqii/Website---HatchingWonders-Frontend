import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { HomeProps } from "./Home.types";
import texts from "./Home.json"
import "./Home.scss";
import { Paragraph, Heading, Textbox } from "da-awesome-library/build";
import { changeForm } from "../../modules/form";

const Home = ({language, theme, className}: HomeProps) => {

    useEffect(() => {
        document.title = "Hatching Wonders"
    }, [])

    const [serviceForm, setServiceForm] = useState({
        show: false,
        name: ""
    })

    const serviceItems = [
        <div key={1} className="hw_home__carousellitem"> 
            <Heading
                theme={theme}
                size={"large"}
            >Webdevelopment</Heading>
            <Paragraph
                theme={theme}
                size={"large"}
            >We pitch, design and create websites and onepager of all kinds for our clients.</Paragraph>
        </div>,
        <div key={0} className="hw_home__carousellitem"> 
            <Heading
                theme={theme}
                size={"large"}
            >Advertisement</Heading>
            <Paragraph
                theme={theme}
                size={"large"}
            >We market and represent our clients in campaigns on social networks aswell as in advertisements.</Paragraph>
        </div>,
        <div key={0} className="hw_home__carousellitem"> 
            <Heading
                theme={theme}
                size={"large"}
            >Charity</Heading>
            <Paragraph
                theme={theme}
                size={"large"}
            >If you want our help for charitable causes, we might be able to help if we have the time and means to do so.</Paragraph>
        </div>,
        <div key={2} className="hw_home__carousellitem"> 
            <Heading
                theme={theme}
                size={"large"}
            >Exhibitions</Heading>
            <Paragraph
                theme={theme}
                size={"large"}
            >We have some experience with the insides of how exhibitions are run and offer help on designing and setting up exhibition stands.</Paragraph>
        </div>,
        <div> </div>,
        <div> </div>,
    ]

    const updateForm = (value, key) => {
        const copy = JSON.parse(JSON.stringify(serviceForm))
        copy[key] = value
        setServiceForm(copy)
    }

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
            <div className="hw_home__pitch">
            
            </div>
            <div className="hw_home__pitch">
                <Heading
                    theme={theme}
                    size={"xxlarge"}
                >{"Let Us Pitch You"}</Heading>
                <Paragraph
                    theme={theme}
                    size={"large"}
                >If you want our help for charitable causes, we might be able to help if we have the time and means to do so.</Paragraph>
                <Textbox 
                    value={serviceForm.name} 
                    onChange={(value) => updateForm(value, "name")} 
                    placeholder={"Your Name or Company"} 
                    theme={"light"} />
                <Textbox 
                    value={serviceForm.name} 
                    onChange={(value) => updateForm(value, "name")} 
                    placeholder={"Your Projects Name"} 
                    theme={"light"} />
                <Textbox 
                    value={serviceForm.name} 
                    onChange={(value) => updateForm(value, "name")} 
                    placeholder={"Your Email Adress"} 
                    theme={"light"} />
                <Textbox 
                    value={serviceForm.name} 
                    onChange={(value) => updateForm(value, "name")} 
                    placeholder={"Your Phone Number"} 
                    theme={"light"} />
                <Textbox 
                    value={serviceForm.name} 
                    onChange={(value) => updateForm(value, "name")} 
                    placeholder={"Describe The project further"} 
                    theme={"light"} />
                
            </div>
            <div className="hw_home__pitch">
        
            </div>
        </div>
    )
}

export default Home
