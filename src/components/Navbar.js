import React from 'react';
import Color from '../hoc/Colors';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    /*setTimeout(() => {
        props.history.push("/about")
    }, 2000)*/
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <ul className="right">
                    <li><Link to="/" ><h5>Home</h5></Link></li>
                    <li><NavLink to="/login/About" ><h5>About</h5></NavLink></li>
                    <li><NavLink to="/login/Contact" ><h5>Contact</h5></NavLink></li>
                     <li><NavLink to="/login" ><h5>Login</h5></NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Color(Navbar))