import * as React from 'react';
import {Link,useLocation}from 'react-router'
import { useCart } from "react-use-cart";

 
function Header() {
     const { totalUniqueItems } = useCart();
  return (
    <>
        
        <div className="container-fluid bg-primary px-5 d-none d-lg-block">
            <div className="row gx-0">
                <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center" style={{height: '45px'}}>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i className="fab fa-youtube fw-normal"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center" style={{height: '45px'}}>
                        <a href="#"><small className="me-3 text-light"><i className="fa fa-user me-2"></i>Register</small></a>
                        <a href="#"><small className="me-3 text-light"><i className="fa fa-sign-in-alt me-2"></i>Login</small></a>
                        <div className="dropdown">
                            <a href="#" className="dropdown-toggle text-light" data-bs-toggle="dropdown"><small><i className="fa fa-home me-2"></i> My Dashboard</small></a>
                            <div className="dropdown-menu rounded">
                                <a href="#" className="dropdown-item"><i className="fas fa-user-alt me-2"></i> My Profile</a>
                                <a href="#" className="dropdown-item"><i className="fas fa-comment-alt me-2"></i> Inbox</a>
                                <a href="#" className="dropdown-item"><i className="fas fa-bell me-2"></i> Notifications</a>
                                <a href="#" className="dropdown-item"><i className="fas fa-cog me-2"></i> Account Settings</a>
                                <a href="#" className="dropdown-item"><i className="fas fa-power-off me-2"></i> Log Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>Travela</h1>
                     <img src="img/logo.png" alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to={"/"} className="nav-item nav-link active">Home</Link>
                         <Link to={"/about"} className="nav-item nav-link">About</Link>
                        <Link to={"/service"} className="nav-item nav-link">Services</Link>
                        <Link to={"/package"} className="nav-item nav-link">Packages</Link>
                        <Link to={"/blog"} className="nav-item nav-link">Blog</Link>
                       
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="destination.html" className="dropdown-item">Destination</a>
                                <a href="tour.html" className="dropdown-item">Explore Tour</a>
                                <a href="booking.html" className="dropdown-item">Travel Booking</a>
                                <a href="gallery.html" className="dropdown-item">Our Gallery</a>
                                <a href="guides.html" className="dropdown-item">Travel Guides</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <Link to={"/contact"} className="nav-item nav-link">Contact</Link> 
                 
                      <Link to={'/cart'} className="nav-item nav-link"> {totalUniqueItems} <i className="bi bi-cart"></i></Link>
                     </div>
                    <Link to={"/package"} className='btn btn-primary rounded-pill  text-white py-2 px-4' >Book Now</Link>
                    
                </div>
                
            </nav>
        </div>
 </>
      
  );
}

export default Header;


