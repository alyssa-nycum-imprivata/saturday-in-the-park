import React from "react";
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <header>
            <h1 className="navbar-title">Saturday in the Park</h1>
            <nav>
                <ul className="nav-link-container">
                    <li>
                        <Link className="nav-link"to="/">Home</Link>
                    </li>
                    <li><Link className="nav-link">My Itinerary</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;
