import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='container-fluid footer-aria'>
        <div className='container'>
        <div className='row'>
           <div className="col-12 col-md-6">
            <NavLink to="/">
              <img src={logo} className='d-block mx-auto' alt="logo"/>
          </NavLink>
           </div>
           <div className="col-12 col-md-6 my-5">
            <p> &copy; 2022 Online-Edo. All Right Reserved | By <span>M M Rana</span></p>
           </div>
        </div>
        </div>
    </div>
    );
};

export default Footer;