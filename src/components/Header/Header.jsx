import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/logo.png";

/**
 * @component
 * @description Component Header for all pages. Contains the logo and the links for pages Home, Profil, Settings and Community
 */
function Header() {
    return (
        <header>
            <div className="header">
                <div className="header_logo">
                    <img src={HeaderLogo} alt="" />
                </div>
                <Link to="/">
                    <p>Accueil</p>
                </Link>
                <Link to="/">
                    <p>Profil</p>
                </Link>
                <Link to="/">
                    <p>Réglage</p>
                </Link>
                <Link to="/">
                    <p>Communauté</p>
                </Link>
            </div>
        </header>
    );
}

Header.propTypes = {};

export default Header;
