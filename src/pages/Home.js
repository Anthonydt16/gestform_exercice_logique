import React from 'react';
import {NavLink} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (

        <div className=" HomeStyle ">
            <Header/>
            <h2>Bienvenue au test de Gestform</h2>
            <p>Voici ma production pour le test réaliser en React Js, HTML et CSS.<br/>
                Code réalisé de nuit de 1h à 2h40 du matin en attente de partir en vacances.<br/>
                Merci de l'attention portait à mon cas. </p>

            </div>
    );
};

export default Home;