import React from 'react';
import './About.css'
import { NavLink } from 'react-router-dom';
import about from '../../images/about.png';


const About = () => {
    return (
            <div className='container about mt-5'>
            <div className="row">
            <div className="col-12 col-md-6 ">
                <h1 className='mt-2 mt-lg-5'>About us:</h1>
                <p className='my-2'>We are the team of talented developer making websites, we have lot of experience in this field. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button type="button" class="btn btn-outline-success my-3"><NavLink to='/contact'>Contact Now</NavLink></button>
            </div>
            <div className="col-12 col-md-6">
                <img src={about} className='about-img d-block img-fluid mx-auto' alt='About-imag' />
            </div>
            </div> 
        </div>
    );
};

export default About;