import React, { useState } from "react";
import useCookie from "../../modules/hooks/useCookie";
import { setClass } from "../../modules/setClass";
import { Route, Routes } from "react-router-dom";
import NightSwitch from "../m_NightSwitch/NightSwitch";
import Footer from "../o_Footer/Footer";
import Header from "../o_Header/Header";
import Home from "../p_Home/Home";
import "./Page.scss";

const App = ({}: any) => {

    const [theme, setTheme]: any = useState(useCookie("hw_lightmode", "light")[0])
    const [language, setLanguage]: any = useState(useCookie("hw_language", "english")[0])

    const routes = [
        { path: "/", component: <Home className="hw_page__route" theme={theme} />}
    ]

    return (
        <div className={setClass("hw_page", [theme])}>
            <Header 
                onNightSwitchChange={(theme) => setTheme(theme)}
                theme={theme} />
            <Routes>
                {routes.map((route, key) => 
                <Route 
                    key={"route-"+key}
                    path={route.path}
                    Component={() => route.component} />)}
            </Routes>
            <Footer 
                language={language} 
                onLanguageChange={(new_language) => setLanguage(new_language)} 
                theme={theme} />
        </div>
    )
}

export default App