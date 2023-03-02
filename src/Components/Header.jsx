import React from 'react'
import {Link, NavLink} from "react-router-dom";
import {Route, Routes} from "react-router";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import Booking from "./Pages/Booking";
import Booking_management from "./Pages/Booking_management";
import Seat from "./Pages/Seat";

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/account">Account</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                        <li>
                            <Link to="/booking">Booking</Link>
                        </li>
                        <li>
                            <Link to="/manage-booking">Manage Booking</Link>
                        </li>
                        <li>
                            <Link to="/seat-selection">Seat Selection</Link>
                        </li>
                    </ul>

                </nav>
            </header>
        </>
    )
}

export default Header