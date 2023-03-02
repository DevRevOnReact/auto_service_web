import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import Main from "./Components/Pages/Main";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register.jsx";
import Profile from "./Components/Pages/Profile";
import Search from "./Components/Pages/Search";
import Booking from "./Components/Pages/Booking";
import Booking_management from "./Components/Pages/Booking_management";
import Seat from "./Components/Pages/Seat";
import {Routes} from "react-router";
import React from "react";

function App() {
  return (
<BrowserRouter>
      <Header/>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/manage-booking" element={<Booking_management />} />
        <Route path="/seat-selection" element={<Seat />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
