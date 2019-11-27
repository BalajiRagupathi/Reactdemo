import React from 'react';
import Color from '../hoc/Colors';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    /*setTimeout(() => {
        props.history.push("/about")
    }, 2000)*/
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><NavLink to="/About" >About</NavLink></li>
                    <li><NavLink to="/Contact" >Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Color(Navbar))