import React from 'react';
import './Home.css'
import { NavLink } from 'react-router-dom';
import hero from '../../images/hero.png';


const Home = () => {
    return (
    <div className='container hero mt-5'>
        <div className="row">
        <div className="col-12 col-md-6 ">
            <h1 className='mt-2 mt-lg-5'> Grow your business with <br/> <strong className='brand-name'>Online-Edo</strong></h1>
            <p className='my-2'>We are the team of talented developer making websites, we have lot of experience in this field.</p>
            <button type="button" class="btn btn-outline-success my-3"><NavLink to='/service'>Get Started</NavLink></button>
        </div>
        <div className="col-12 col-md-6">
            <img src={hero} className='hero-img d-block img-fluid mx-auto' alt='Hero-imag' />
        </div>
        </div> 
    </div>
    );
};

export default Home;