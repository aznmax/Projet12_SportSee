import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

/**
 * @component
 * @description Component who appears for the developement, we can choose between two users to simulate the app
 * */
function Home() {
    return (
        <div className="home">
            <h2>
                Bienvenue sur <em>SportSee</em>
            </h2>
            <div className="descript">
                <p>
                    Projet 12 de la formation de développeur front-end d'OpenClassRoom, cette démo met en avant le
                    tableau de bord d'un utilisateur de l'application SportSee, une startup dédiée au coaching sportif.
                    L’entreprise va aujourd’hui lancer une nouvelle version de la page profil de l’utilisateur. Cette
                    page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le
                    nombre de calories brûlées.
                </p>
                <p>Choisissez l'utilisateur ci-dessous pour accéder au tableau de bord</p>
            </div>
            <div className="home-buttons">
                <Link className="btn-user12" to="/user/12">
                    <button>
                        Utilisateur: <em>Thomas</em>
                    </button>
                </Link>
            </div>
        </div>
    );
}

Home.propTypes = {};

export default Home;
