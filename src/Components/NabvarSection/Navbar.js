import React from 'react';
import  './Navbar.css';
import { NavLink } from 'react-router-dom';


const Nabvar = () => {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg menu-bar">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Online-Edo</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav  ms-auto">
                    <li className="nav-item">
                    <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/service">Service</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>  
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Nabvar;