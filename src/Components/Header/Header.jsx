import React from 'react';
// Importamos los componentes del Core
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {

    return (
        <div className="header">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
}

export default Header;