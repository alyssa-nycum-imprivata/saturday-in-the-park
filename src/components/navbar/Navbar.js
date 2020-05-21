import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = (props) => {
    const handleLogout = () => {
        props.clearUser();
        props.history.push("/");
    }

    return (
        <header>
            <h1 className="navbar-title">Saturday in the Park</h1>
            <nav>
                <ul className="nav-link-container">
                    {props.hasUser ?
                        <>
                            <li>
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="myitinerary">My Itinerary</Link>
                            </li>
                        </>
                    : null }
                    {props.hasUser ? 
                        <li>
                            <Link className="nav-link" to="" onClick={handleLogout}>Logout</Link>
                        </li>
                    :
                        <>
                            <li>
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(Navbar);
