import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
            <div className="container contact-section my-3">
            <div className="row">
                <div className="contact-title my-2">
                <h1 className='text-center '>Contact Us</h1>
                </div>
                </div>
                <div className="row">
                <div class="col-12 col-md-6">
                <div className='contact-info my-3'>
                    <h1>Info</h1>
                        <p>Email :<span> ranabd330269@gmail.com</span></p>
                        <p>Mobile :<span> +880 1812 330269</span></p>
                        <p>Address :<span> Chauddagram, Cumilla, Chittagong, Bangladesh.</span></p>
                    </div>
                </div>
                    <div class="col-12 col-md-6">
                    <form className='contact-form my-3 d-block mx-auto'>
                    <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
                    </div>
                    <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Subject"/>
                    </div>
                    <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                    </div>
                    <div>
                    <button type="button" className='form-btn'>Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </div>

         
    );
};

export default Contact;