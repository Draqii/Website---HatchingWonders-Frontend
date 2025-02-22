import React, { useState } from "react";
import useCookie from "../../modules/hooks/useCookie";
import { setClass } from "../../modules/setClass";
import { Route, Routes } from "react-router-dom";
import NightSwitch from "../m_NightSwitch/NightSwitch";
import Footer from "../o_Footer/Footer";
import Header from "../o_Header/Header";
import Home from "../p_Home/Home";
import "./Page.scss";
import Router from "../_Router/Router";

const App = ({}: any) => {

    const [theme, setTheme]: any = useState(useCookie("hw_lightmode", "light")[0])
    const [language, setLanguage]: any = useState(useCookie("hw_language", "english")[0])

    return (
        <div className={setClass("hw_page", [theme])}>
            <Header 
                onNightSwitchChange={(theme) => setTheme(theme)}
                language={language} 
                theme={theme} />
            <Router 
                language={language} 
                theme={theme} />
            <Footer 
                onLanguageChange={(new_language) => setLanguage(new_language)} 
                language={language} 
                theme={theme} />
        </div>
    )
}

export default App