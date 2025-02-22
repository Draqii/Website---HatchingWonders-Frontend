import React from "react";
import {setClass} from "../../modules/setClass";
import {HomeProps} from "./Home.types";
import "./Home.scss";

const Home = ({theme, className}: HomeProps) => {

    return (
        <div className={setClass("home", [theme], className)}>
            home
        </div>
    )
}

export default Home
