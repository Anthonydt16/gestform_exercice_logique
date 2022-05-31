import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (

        <div className="header">
            <div className="imgBackground">
                <img src="GESTFORM_HD.png"/>
            </div>
            <div className="headerMenu">
                 <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""}><p className="Button">Home</p></NavLink>
                <NavLink to="/Jeux" className={(nav) => nav.isActive ? "nav-active" : ""}><p className="Button">Start</p></NavLink>
            </div>

        </div>
    );
};

export default Header;