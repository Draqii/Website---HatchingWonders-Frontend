import React, { useState } from "react";
import { setClass } from "../../modules/setClass";
import { Footer, Header, Icon, Main } from "da-awesome-library/build"
import { NavLink, Route, Routes } from "react-router-dom";
import { NiteSwitch } from "niteswitch"
import useCookie, { setItem } from "../../modules/hooks/useCookie";
import pageicon from "../../../public/favicon/page_icon.png"
import HomeIcon from "../../../public/svgs/home.svg"
import Home from "../p_Home/Home";
import Contact from "../p_Contact/Contact";
import Services from "../p_Services/Services";
import PrivacyPolicy from "../p_PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../p_TermsAndConditions/TermsAndConditions";
import Pitches from "../p_Pitches/Pitches";
import "./App.scss";

const App = ({}: any) => {

    const [theme, setTheme]: any = useState(useCookie("hw_lightmode", "light")[0] === "light")
    const [language, setLanguage]: any = useState(useCookie("hw_language", "english")[0])
    
    const updateTheme = (isLight) => {
        setItem("hw_lightmode", isLight ? "light" : "dark", 360)
        setTheme(isLight)
    }
    
    const updateLanguage = (language) => {
        setItem("hw_language", language, 360)
        setLanguage(language)
    }

    const getTheme = () => theme ? "light" : "dark"

    return (
        <div className={setClass("hw_page", [getTheme()])}>
            <NiteSwitch 
                enabled={theme ? true : false} 
                _setEnabled={setTheme}
                onEnable={() => updateTheme(true)} 
                onDisable={() => updateTheme(false)}
            />
            <Header 
                theme={getTheme()}
                ReactLink={NavLink}
                navigation_links={[
                {to: "/", content: <Icon ReactSVG={HomeIcon} />},
                {to: "/services", content: "Our Services!"},
                {to: "/get-pitched", content: "Get Pitched!"},
            ]} logo_text={
                <span><span>Hatching</span><br/>
                <span className="hw_logo__secondary">Wonders</span></span>
            } logo_image={pageicon} />
            <Main>
                <Routes>
                    <Route path="/" Component={() => <Home theme={getTheme()} />} />
                    <Route path="/services" Component={() => <Services theme={getTheme()} />} />
                    <Route path="/get-pitched" Component={() => <Pitches theme={getTheme()} />} />
                    <Route path="/contact" Component={() => <Contact theme={getTheme()} />} />
                    <Route path="/terms-and-conditions" Component={() => <TermsAndConditions theme={getTheme()} />} />
                    <Route path="/privacy-policy" Component={() => <PrivacyPolicy theme={getTheme()} />} />
                    <Route path="/contact-us" Component={() => <Contact theme={getTheme()} />} />
                </Routes>
            </Main>
            <Footer 
                copyrightHolder={"Hatching Wonders"} 
                copyrightYear={"2022-2024"} 
                ReactLink={NavLink} 
                navigation_links={[ 
                    {to: "/terms-and-conditions", content: "Terms & Conditions"},
                    {to: "/privacy-policy", content: "Privacy Policy"},
                    {to: "/contact-us", content: "Contact Us"}, ]} />
        </div>
    )
}

export default App