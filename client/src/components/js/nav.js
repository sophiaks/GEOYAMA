import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css'

const nav = () => {
    return (
        <nav>
            <h2>GEOYAMA</h2>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/cadastro">Cadastro</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/ip">IP</Link>
                </li>
                <li>
                    <Link to="/map">MAPA</Link>
                </li>
            </ul>
        </nav>
    )
}

export default nav;
