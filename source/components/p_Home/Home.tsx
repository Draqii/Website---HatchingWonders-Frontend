import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { HomeProps } from "./Home.types";
import { NavLink as ReactLink } from "react-router-dom";
import { Heading, NavLink, Paragraph, Section } from "da-awesome-library/build";
import "./Home.scss";

const Home = ({theme, className}: HomeProps) => {

    useEffect(() => {
        document.title = "Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_home hw_route", [theme], className)}>
            
            <Section direction={"column"} wrap={"wrap"} gap={"small"}>
                <Heading theme={theme} size="teaser" content={"We Are The Draconic Ad Agency;"} />
                <Paragraph theme={theme} content={"Lorem Ipsum Solom Dir"} />
            </Section>

            <Section direction={"column"} wrap={"wrap"} gap={"small"}>
                <Heading theme={theme} size="large" content={"We Make: Websites"} />
                <Paragraph theme={theme} content={"Lorem Ipsum Solom Dir"} />
            </Section>
            
            <Section direction={"column"} wrap={"wrap"} gap={"small"}>
                <Heading theme={theme} size="large" content={"Get Pitched By The Best"} />
                <Paragraph theme={theme} content={"If you'd like to receive a pitch"} />
                <NavLink theme={theme} className="hw_button" ReactLink={ReactLink} to={"/get-pitched"} content={"Get Pitched Now!"} />
            </Section>
        </div>
    )
}

export default Home
