import React from "react";
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import "./styles/fontfaces.scss";
import "./styles/reset.scss";
import "./index.scss";
import "./styles/scrollbar.scss";
import App from "./components/_Page/Page";

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