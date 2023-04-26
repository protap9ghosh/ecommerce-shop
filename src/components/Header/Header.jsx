import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

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
                    <Link to="/login">Login</Link>
                    <Link to="/singup">Sing Up</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
