import "./App.css";
import Header from "../src/components/Header/Header.jsx";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import AsideLeftBar from "./components/AsideLeftBar/AsideLeftBar";


function App() {
    return (
        <Router>
            <Header />
            <AsideLeftBar/>
            <Dashboard/>
        </Router>
    );
}

export default App;
