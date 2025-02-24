import React from "react";
import { setClass } from "../../modules/setClass";
import { PrivacyPolicyProps } from "./PrivacyPolicy.types";
import texts from "./PrivacyPolicy.json"
import "./PrivacyPolicy.scss";

const PrivacyPolicy = ({language, theme, className}: PrivacyPolicyProps) => {

    return (
        <div className={setClass("hw_privacypolicy", [theme], className)}>
            privacypolicy
        </div>
    )
}

export default PrivacyPolicy
