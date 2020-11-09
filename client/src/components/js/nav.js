import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../css/nav.css'

const Nav = () => {
    
        function Logout() {
            localStorage.setItem("loggedIn", false)
            window.location.reload();
            return(<Redirect to='/login' />);
        }

        const NavNotLogged = () => {
            return(
            <nav>
                <h2>GEOYAMA</h2>
                <ul>
                    <li>
                        <Link to="/cadastro">Cadastro</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>);
        }

        const NavLogged = () => {
            return(
            <nav>
                <h2>GEOYAMA</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li> 
                    <li>
                        <Link to="/ip">IP</Link>
                    </li>
                    <li>
                        <Link to="/map">Mapa</Link>
                    </li>
                </ul>
                <button className="indx" onClick={Logout}>Logout</button>
            </nav>)
        }

        const logged = JSON.parse(localStorage.getItem("loggedIn"))
        return (
            <div>
                {logged
                    ? <NavLogged />
                    : <NavNotLogged />
                }
        </div>
        );
    }


export default Nav;
