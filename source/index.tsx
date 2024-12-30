import React from "react";
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import "./styles/reset.scss";
import "./styles/fontfaces.scss";
import App from "./components/App/App";
import "./index.scss";
import "./styles/font_overrides.scss"

const element = (
    <React.StrictMode> 
        <HashRouter> 
            <App />
        </HashRouter>
    </React.StrictMode>
)

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container);
root.render(element);