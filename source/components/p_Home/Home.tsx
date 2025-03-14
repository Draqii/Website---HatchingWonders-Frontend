import React from "react";
import { setClass } from "../../modules/setClass";
import { HomeProps } from "./Home.types";
import Heading from "../../../../../libraries/component_library/source/components/a_Heading/Heading";
import texts from "./Home.json"
import "./Home.scss";

const Home = ({language, theme, className}: HomeProps) => {

    return (
        <div className={setClass("home", [theme], className)}>
            <Heading
                theme={theme}
                size={"teaser"}
            >{texts[language]["title"]}</Heading>
        </div>
    )
}

export default Home
