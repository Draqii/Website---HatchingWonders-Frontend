import React from "react";
import { setClass } from "../../modules/setClass";
import { RouterProps } from "./Router.types";
import { Routes, Route } from "react-router-dom";
import Home from "../p_Home/Home";
import NotFound from "../p_NotFound/NotFound";
import TermsOfService from "../p_TermsOfService/TermsOfService";
import PrivacyPolicy from "../p_PrivacyPolicy/PrivacyPolicy";
import Satisfactory from "../p_Satisfactory/Satisfactory";
import Cookies from "../p_Cookies/Cookies";
import "./Router.scss";

const Router = ({ cookieConsent, onConsentChange, language, theme, className }: RouterProps) => {

    const routes = [
        {
            path: "/", 
            component: <Home
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
        {
            path: "/cookies", 
            component: <Cookies
                onConsentChange={onConsentChange}
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
        {
            path: "/terms-of-use", 
            component: <TermsOfService
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
        {
            path: "/privacy-policy", 
            component: <PrivacyPolicy
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
        {
            path: "/satisfactory", 
            component: <Satisfactory
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
        {
            path: "/*", 
            component: <NotFound
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
    ]

    return (
        <Routes>
            {routes.map((route, key) =>
            <Route
                key={"route-" + key}
                path={route.path}
                Component={() => route.component} />)}
        </Routes>
    )
}

export default Router
