import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../src/SASS/Header.scss";
import "../src/SASS/Dashboard.scss";
import "../src/SASS/AsideLeftBar.scss"
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
