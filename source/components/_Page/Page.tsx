import React, { useEffect, useState } from "react";
import useCookie from "../../modules/hooks/useCookie";
import { setClass } from "../../modules/setClass";
import Footer from "../o_Footer/Footer";
import Header from "../o_Header/Header";
import CookieBanner from "../o_CookieBanner/CookieBanner";
import Router from "../_Router/Router";
import "./Page.scss";

const App = ({}: any) => {

    const [theme, setTheme]: any = useState(useCookie("hw_lightmode", "light")[0])
    const [language, setLanguage]: any = useState(useCookie("hw_language", "english")[0])
    const [cookieConsent, setCookieConsent]: any = useState(useCookie("hw_consent", "none")[0])

    return (
        <div className={setClass("hw_page", [theme])}>
            {cookieConsent === "none" ? 
            <CookieBanner 
                id="hw_cookiebanner--outer"
                source="app"
                onConsentChange={(consent) => setCookieConsent(consent)}
                language={language} 
                theme={theme} /> : null}
            <Header 
                cookieConsent={cookieConsent}
                onNightSwitchChange={(theme) => setTheme(theme)}
                language={language} 
                theme={theme} />
            <Router 
                onConsentChange={(consent) => setCookieConsent(consent)}
                cookieConsent={cookieConsent}
                language={language} 
                theme={theme} />
            <Footer 
                cookieConsent={cookieConsent}
                onLanguageChange={(new_language) => setLanguage(new_language)} 
                language={language} 
                theme={theme} />
        </div>
    )
}

export default App