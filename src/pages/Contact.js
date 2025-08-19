import * as React from 'react';
import Weblayout from '../layout/Weblayout';


function Contact(){
    return(
        <Weblayout>
        
        <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{maxWidth: '900px'}}>
                <h3 className="text-white display-3 mb-4">Contact Us</h3> 
            </div>
        </div>



        <div className="container-fluid contact bg-light py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: '900px'}}>
                    <h5 className="section-title px-3">Contact Us</h5>
                    <h1 className="mb-0">Contact For Any Query</h1>
                </div>
                <div className="row g-5 align-items-center ">
                    <div className="col-lg-4 ">
                        <div className="bg-white rounded p-4">
                            <div className="text-center mb-4">
                                <i className="fa fa-map-marker-alt fa-3x text-primary"></i>
                                <h4 className="text-primary">Address</h4>
                                <p className="mb-0">123 ranking Street, <br/> New York, USA</p>
                            </div>
                            <div className="text-center mb-4">
                                <i className="fa fa-phone-alt fa-3x text-primary mb-3"></i>
                                <h4 className="text-primary">Mobile</h4>
                                <p className="mb-0">+012 345 67890</p>
                                <p className="mb-0">+012 345 67890</p>
                            </div>
                           
                            <div className="text-center">
                                <i className="fa fa-envelope-open fa-3x text-primary mb-3"></i>
                                <h4 className="text-primary">Email</h4>
                                <p className="mb-0">info@example.com</p>
                                <p className="mb-0">info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <h3 className="mb-2">Send us a message</h3>
                        <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                        <form>
                            <div className="row g-3 bg-secondary bg-gradient ">
                                <div className="col-md-6  ">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0 " id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6  ">
                                    <div className="form-floating">
                                        <input type="email" className="form-control border-0" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="form-floating   ">
                                        <input type="text" className="form-control border-0" id="subject" placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: '160px'}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12">
                        <div className="rounded">
                            <iframe className="rounded w-100" 
                            style={{height: '450px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" 
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    
        </Weblayout>
        
    );
}
export default Contact;