import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faUserLarge } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <nav className="header">
                <a href="/">
                    <img src={logo} alt="" />
                </a>

                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/login"><FontAwesomeIcon icon={faUserLarge} className="font-icon" /></Link>
                    <Link to="/singup"><FontAwesomeIcon icon={faRightToBracket} className="font-icon" /></Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
