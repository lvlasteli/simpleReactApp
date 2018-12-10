import React from "react";
import {Link} from 'react-router-dom'

export const Header = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className="nav item">
                <li className="nav-link"><Link to="/home">Home</Link></li>
                <li className="nav-link"><Link to="/user" >{props.user}</Link></li>
            </ul>
        </nav>
    );
};