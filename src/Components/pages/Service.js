import React from 'react';
import './Service.css';
import { NavLink } from 'react-router-dom';
import CardData from '../CardData';


const Service = () => {
    return (
        <div className='container service-section'>
            <div className="row">
                <div className='service-title my-3'>
                <h1>Our Services</h1>
                </div>
            </div>
            <div className="row my-3">
             
                {
                    CardData.map(val =>
                        <div className="col-12 col-md-4 my-3">
                        <div key={val.id} className="card serve-card">
                        <NavLink to="/">
                            <img src={val.img} className="card-img-top" alt="web"/>
                        </NavLink>
                        <div className="card-body">
                        <h5 className="card-title text-center">{val.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink href={val.link} className="d-block mx-auto">Go somewhere</NavLink>
                        
                        </div>
                    </div>
                    </div>
                    )}

                
            </div>
        </div>
    );
};

export default Service;