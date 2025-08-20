
import React, { useEffect, useState } from 'react';
import Weblayout from '../layout/Weblayout';
import axios from '../Admin/component/axios';
import {Link,useLocation}from 'react-router'

function Home() {
  

    const [packages,setPackages]=useState([]);
   useEffect(() => {
       getPackages();
     }, []);
   
     const getPackages = async (e) => {
       let res = await axios.get(`front_api/packages.php`)
       setPackages(res.data);
     }


      const [hotels,setHotels]=useState([]);
         useEffect(() => {
            getHotels();
         }, []);
        
          const getHotels = async (e) => {
            let res = await axios.get(`front_api/hotels.php`)
            setHotels(res.data);
          }
     





  return (
    <Weblayout>

            <div className="carousel-header">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="assets/img/carousel-2.jpg" className="img-fluid" alt="Image"/>
                            <div className="carousel-caption">
                                <div className="p-3" style={{maxWidth: '900px'}}>
                                    <h4 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: '3px'}}>Explore The World</h4>
                                    <h1 className="display-2 text-capitalize text-white mb-4">Let’s create memories that last forever!</h1>
                                    <p className="mb-5 fs-5">Every journey begins with a single click — welcome to Travela
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/carousel-1.jpg" className="img-fluid" alt="Image"/>
                            <div className="carousel-caption">
                                <div className="p-3" style={{maxWidth: '900px'}}>
                                    <h4 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: '3px'}}>Explore The World</h4>
                                    <h1 className="display-2 text-capitalize text-white mb-4">Find Your Perfect Tour At Travel</h1>
                                    <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/carousel-3.jpg" className="img-fluid" alt="Image"/>
                            <div className="carousel-caption">
                                <div className="p-3" style={{maxWidth: '900px'}}>
                                    <h4 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: '3px'}}>Explore The World</h4>
                                    <h1 className="display-2 text-capitalize text-white mb-4">You Like To Go?</h1>
                                    <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon btn bg-primary" aria-hidden="false"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon btn bg-primary" aria-hidden="false"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
         
        
        <div className="container-fluid search-bar position-relative" style={{top: '-50%', transform: 'translateY(-50%)'}}>
            <div className="container">
                <div className="position-relative rounded-pill w-100 mx-auto p-5" style={{background: 'rgba(19, 53, 123, 0.8)'}}>
                    <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand"/>
                    <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2" style={{top: '50%', right: '46px', transform: 'translateY(-50%)'}}>Search</button>
                </div>
            </div>
        </div>
       
      
        <div className="container-fluid about py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5">
                        <div className="h-100" style={{border: '50px solid',borderColor: 'transparent #13357B transparent #13357B'}}>
                            <img src="assets/img/about-img.jpg" className="img-fluid w-100 h-100" alt=""/>
                        </div>
                    </div>
                 
<div className="col-lg-7" style={{background: 'linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(img/about-img-1.png)'}}>
                        <h5 className="section-about-title pe-3">About Us</h5>
                        <h1 className="mb-4">Welcome to <span className="text-primary">Travela</span></h1>
                        <p className="mb-4">At Travela, we believe travel isn’t just about reaching a destination — it’s about the experiences, the stories, and the memories you create along the way. Whether you're chasing sunsets on tropical beaches, exploring hidden gems in historic cities, or seeking thrilling adventures off the beaten path, we're here to help you make it happen.
                      Founded by passionate travelers, Travela was created to simplify the way you plan and book your trips. Our platform offers carefully curated travel experiences, top-rated accommodations, budget-friendly deals, and expert tips to make every journey unforgettable.</p>
                       <h4>What We Offer:</h4>
                        <div className="row gy-2 gx-4 mb-4">
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Easy-to-use travel booking tools</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Exclusive travel deals and discounts</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked tours and experiences</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Travel guides, tips, and inspiration</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Customer Service</p>
                            </div>
                        </div>
                        <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Read More</a>
                    </div>

                    
                </div>
            </div>
        </div>
        
        <div className="container-fluid bg-light service py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: '900px'}}>
                    <h5 className="section-title px-3">Searvices</h5>
                    <h1 className="mb-0">Our Services</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                                    <div className="service-content text-end">
                                        <h5 className="mb-4">International Travel Packages</h5>
                                        <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                    <div className="service-icon p-4">
                                        <i className="fa fa-globe fa-4x text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="service-content-inner d-flex align-items-center  bg-white border border-primary rounded p-4 pe-0">
                                    <div className="service-content text-end">
                                        <h5 className="mb-4">Customized Tour Packages</h5>
                                        <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                    <div className="service-icon p-4">
                                        <i className="fa fa-hotel fa-4x text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                                    <div className="service-content text-end">
                                        <h5 className="mb-4">Flight Booking</h5>
                                        <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                    <div className="service-icon p-4">
                                        <i className="fa fa-user fa-4x text-primary"></i>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                                    <div className="service-icon p-4">
                                        <i className="fa fa-globe fa-4x text-primary"></i>
                                    </div>
                                    <div className="service-content">
                                        <h5 className="mb-4">Domestic Travel Packages</h5>
                                        <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                                    <div className="service-icon p-4">
                                        <i className="fa fa-hotel fa-4x text-primary"></i>
                                    </div>
                                    <div className="service-content">
                                        <h5 className="mb-4"> Hotel Booking</h5>
                                        <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                                    <div className="service-icon p-4">
                                        <i className="fa fa-user fa-4x text-primary"></i>
                                    </div>
                                    <div className="service-content">
                                        <h5 className="mb-4">Travel Guides</h5>
                                        <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="text-center">
                            <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Service More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="container-fluid destination py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: '900px'}}>
                    <h5 className="section-title px-3">Destination</h5>
                    <h1 className="mb-0">Popular Destination</h1>
                </div>
                <div className="tab-className text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                        <li className="nav-item">
                            <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                <span className="text-dark" style={{width: '150px'}}>All</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                <span className="text-dark" style={{width: '150px'}}>USA</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                <span className="text-dark" style={{width: '150px'}}>Canada</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                <span className="text-dark" style={{width: '150px'}}>Europe</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                <span className="text-dark" style={{width: '150px'}}>China</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-6">
                                <span className="text-dark" style={{width: '150px'}}>Singapore</span>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-xl-8">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="assets/img/destination-1.jpg" alt=""/>
                                                   <div className="destination-overlay   bg-secondary p-4">
                                                    <a href="#" className="btn btn-outline-secondary text-white rounded-pill border py-2 px-3">Read more</a>
                                                    <h4 className="text-white mb-2 mt-3">Las vegas</h4>
                                                    <a href="#" className="btn-hover text-white ">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                                </div>
                                             
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="assets/img/destination-2.jpg" alt=""/>
                                                <div className="destination-overlay bg-secondary p-4">
                                                    <a href="#" className="btn btn-outline-secondary  text-white rounded-pill border py-2 px-3">Read more</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="assets/img/destination-7.jpg" alt=""/>
                                                <div className="destination-overlay bg-secondary p-4">
                                                    <a href="#" className="btn btn-outline-secondary  text-white rounded-pill border py-2 px-3">Read more</a>
                                                    <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="assets/img/destination-8.jpg" alt=""/>
                                                <div className="destination-overlay bg-secondary p-4">
                                                    <a href="#" className="btn btn-outline-secondary  text-white rounded-pill border py-2 px-3">Read more</a>
                                                    <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="destination-img h-100">
                                        <img className="img-fluid rounded w-100 h-100" src="assets/img/destination-9.jpg" style={{objectFit: "cover", minHeight: "300px"}} alt=""/>
                                        <div className="destination-overlay bg-secondary p-4">
                                            <a href="#" className="btn btn-outline-secondary  text-white rounded-pill border py-2 px-3">Read more</a>
                                            <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="destination-img">
                                        <img className="img-fluid rounded w-100" src="assets/img/destination-4.jpg" alt=""/>
                                        <div className="destination-overlay bg-secondary p-4">
                                            <a href="#" className="btn btn-outline-secondary  text-white rounded-pill border py-2 px-3">Read more</a>
                                            <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="destination-img">
                                        <img className="img-fluid rounded w-100" src="assets/img/destination-5.jpg" alt=""/>
                                        <div className="destination-overlay bg-secondary p-4">
                                            <a href="#" className="btn btn-outline-secondary  text-white rounded-pill border py-2 px-3">Read more</a>
                                            <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="destination-img">
                                        <img className="img-fluid rounded w-100" src="assets/img/destination-6.jpg" alt=""/>
                                        <div className="destination-overlay bg-secondary p-4">
                                            <a href="#" className="btn btn-outline-secondary  text-white rounded-pill border py-2 px-3">Read more</a>
                                            <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img className="img-fluid rounded w-100" src="assets/img/destination-5.jpg" alt=""/>
                                        <div className="destination-overlay bg-secondary p-4">
                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">Read more</a>
                                            <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img className="img-fluid rounded w-100" src="assets/img/destination-6.jpg" alt=""/>
                                        <div className="destination-overlay bg-secondary p-4">
                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">Read more</a>
                                            <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img className="img-fluid rounded w-100" src="assets/img/destination-5.jpg" alt=""/>
                                        <div className="destination-overlaybg-secondary  p-4">
                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">Read more</a>
                                            <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img className="img-fluid rounded w-100" src="assets/img/destination-6.jpg" alt=""/>
                                        <div className="destination-overlay bg-secondary p-4">
                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">Read more</a>
                                            <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-4" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img className="img-fluid rounded w-100" src="assets/img/destination-5.jpg" alt=""/>
                                        <div className="destination-overlay bg-secondary p-4">
                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">Read more</a>
                                            <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img className="img-fluid rounded w-100" src="assets/img/destination-6.jpg" alt=""/>
                                        <div className="destination-overlay bg-secondary p-4">
                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">Read more</a>
                                            <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-5" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img className="img-fluid rounded w-100" src="assets/img/destination-5.jpg" alt=""/>
                                        <div className="destination-overlay bg-secondary p-4">
                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">Read more</a>
                                            <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                     
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img className="img-fluid rounded w-100" src="assets/img/destination-6.jpg" alt=""/>
                                        <div className="destination-overlaybg-secondary  p-4">
                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-6" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img className="img-fluid rounded w-100" src="assets/img/destination-5.jpg" alt=""/>
                                        <div className="destination-overlay bg-secondary p-4">
                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                      
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img className="img-fluid rounded w-100" src="assets/img/destination-6.jpg" alt=""/>
                                        <div className="destination-overlay bg-secondary p-4">
                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

          <section id="packages" className="package section">
                <div className="packge ">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5 " style={{maxWidth: '900px'}}>
                            <h5 className="section-title px-3">Packages</h5>
                            <h1 className="mb-0">Awesome Packages</h1>
                        </div>
                    </div>
                </div>
                
       
        <div className="row g-4 justify-content-center px-5">
             { packages.length > 0 && packages.map((d, key) =>
                <div className="col-lg-4 col-md-6">
                
              
                        <div className="blog-item " style={{ border: '5px ', padding: '10px' }}>
                              
                                <div className="blog-img">
                 
                                    <div className="blog-img-inner">
                                        <img className="img-fluid w-100 rounded-top" src={`${process.env.REACT_APP_API_URL}${d.image}`} alt="Image"/>
                                        <div className="blog-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>

                                    <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>{d.duration}</small>
                                        <a href="#" className="btn-hover flex-fill text-center text-primary border-end py-2"><i class="fa fa-map-marker-alt text-primary me-2"></i>{d.title}</a>
                                        <a href="#" className="btn-hover flex-fill text-center  text-primary py-2"><i class="fa fa-user me-2"></i>1 Person</a>
                                    </div>
                                
                                </div>
                                <div className="blog-content border border-top-0 rounded-bottom p-4">
                                    <div className="packages-price mb-3">{d.price}  
                                    </div>
                                            <div className="mb-3">
                                                <small className="fa fa-star text-primary"></small>
                                                <small className="fa fa-star text-primary"></small>
                                                <small className="fa fa-star text-primary"></small>
                                                <small className="fa fa-star text-primary"></small>
                                                <small className="fa fa-star text-primary"></small>
                                            </div>
                                        <p className="my-3">{d.description}</p>
                                            <div className="row bg-white rounded-bottom mx-0">
                                                <div className="col-6 text-start px-0">
                                                    <a href="#" className="btn btn-success rounded-pill  text-white py-2 px-4">Read More</a>
                                                </div>
                                                <div className="col-6 text-end px-0">

                                                       <Link to={`/checkout/${d.id}`} className='btn btn-primary rounded-pill  text-white py-2 px-4' >Book Now</Link>
                                                   
                                                </div>
                                          </div>
                                  
                               </div>
                             
                               </div>
                                    
                    
                </div>
                   )}
            </div> 
           
        </section>
 
        
        <div className="container-fluid ExploreTour py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: '900px'}}>
                    <h5 className="section-title px-3">Explore Tour</h5>
                    <h1 className="mb-4">The World</h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                    </p>
                </div>
                <div className="tab-className text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                        <li className="nav-item">
                            <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#NationalTab-1">
                                <span className="text-dark" style={{width: '250px'}}>National Tour Category</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#InternationalTab-2">
                                <span className="text-dark" style={{width: '250px'}}>International tour Category</span>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="NationalTab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4">
                                    <div className="national-item">
                                        <img src="assets/img/explore-tour-1.jpg" className="img-fluid w-100 rounded" alt="Image"/>
                                        <div className="national-content">
                                            <div className="national-info">
                                                <h5 className="text-white text-uppercase mb-2">Weekend Tour</h5>
                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="national-plus-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="national-item">
                                        <img src="assets/img/explore-tour-2.jpg" className="img-fluid w-100 rounded" alt="Image"/>
                                        <div className="national-content">
                                            <div className="national-info">
                                                <h5 className="text-white text-uppercase mb-2">Holiday Tour</h5>
                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="national-plus-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="national-item">
                                        <img src="assets/img/explore-tour-3.jpg" className="img-fluid w-100 rounded" alt="Image"/>
                                        <div className="national-content">
                                            <div className="national-info">
                                                <h5 className="text-white text-uppercase mb-2">Road Trip</h5>
                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="tour-offer bg-info">15% Off</div>
                                        <div className="national-plus-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="national-item">
                                        <img src="assets/img/explore-tour-4.jpg" className="img-fluid w-100 rounded" alt="Image"/>
                                        <div className="national-content">
                                            <div className="national-info">
                                                <h5 className="text-white text-uppercase mb-2">Historical Trip</h5>
                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="national-plus-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="national-item">
                                        <img src="assets/img/explore-tour-5.jpg" className="img-fluid w-100 rounded" alt="Image"/>
                                        <div className="national-content">
                                            <div className="national-info">
                                                <h5 className="text-white text-uppercase mb-2">Family Tour</h5>
                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="tour-offer bg-warning">50% Off</div>
                                        <div className="national-plus-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="national-item">
                                        <img src="assets/img/explore-tour-6.jpg" className="img-fluid w-100 rounded" alt="Image"/>
                                        <div className="national-content">
                                            <div className="national-info">
                                                <h5 className="text-white text-uppercase mb-2">Beach Tour</h5>
                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="national-plus-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="InternationalTab-2" className="tab-pane fade show p-0">
                            <div className="InternationalTour-carousel owl-carousel">
                                <div className="international-item">
                                    <img src="assets/img/explore-tour-1.jpg" className="img-fluid w-100 rounded" alt="Image"/>
                                    <div className="international-content">
                                        <div className="international-info">
                                            <h5 className="text-white text-uppercase mb-2">Australia</h5>
                                            <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1"></i> 8 Cities</a>
                                            <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2"></i> <span>143+ Tour Places</span></a>
                                        </div>
                                    </div>
                                    <div className="tour-offer bg-success">30% Off</div>
                                    <div className="international-plus-icon">
                                        <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div className="international-item">
                                    <img src="assets/img/explore-tour-2.jpg" className="img-fluid w-100 rounded" alt="Image"/>
                                    <div className="international-content">
                                        <div className="international-info">
                                            <h5 className="text-white text-uppercase mb-2">Germany</h5>
                                            <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1"></i> 12 Cities</a>
                                            <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2"></i> <span>21+ Tour Places</span></a>
                                        </div>
                                    </div>
                                    <div className="international-plus-icon">
                                        <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div className="international-item">
                                    <img src="assets/img/explore-tour-3.jpg" className="img-fluid w-100 rounded" alt="Image"/>
                                    <div className="international-content">
                                        <div className="tour-offer bg-warning">45% Off</div>
                                        <div className="international-info">
                                            <h5 className="text-white text-uppercase mb-2">Spain</h5>
                                            <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1"></i> 9 Cities</a>
                                            <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2"></i> <span>133+ Tour Places</span></a>
                                        </div>
                                    </div>
                                    <div className="international-plus-icon">
                                        <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div className="international-item">
                                    <img src="assets/img/explore-tour-4.jpg" className="img-fluid w-100 rounded" alt="Image"/>
                                    <div className="international-content">
                                        <div className="international-info">
                                            <h5 className="text-white text-uppercase mb-2">Japan</h5>
                                            <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1"></i> 8 Cities</a>
                                            <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2"></i> <span>137+ Tour Places</span></a>
                                        </div>
                                    </div>
                                    <div className="international-plus-icon">
                                        <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div className="international-item">
                                    <img src="assets/img/explore-tour-5.jpg" className="img-fluid w-100 rounded" alt="Image"/>
                                    <div className="international-content">
                                        <div className="tour-offer bg-info">70% Off</div>
                                        <div className="international-info">
                                            <h5 className="text-white text-uppercase mb-2">London</h5>
                                            <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1"></i> 17 Cities</a>
                                            <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2"></i> <span>26+ Tour Places</span></a>
                                        </div>
                                    </div>
                                    <div className="international-plus-icon">
                                        <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

<section id="hotels" className="package section py-5">
                <div className="packge">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{maxWidth: '900px'}}>
                            <h5 className="section-title px-3">Hotels</h5>
                            <h1 className="mb-0">Places to Stay </h1>
                        </div>
                    </div>
                </div>
                
       
        <div className="row g-4 justify-content-center  px-5 ">
               {hotels.length > 0 && hotels.map((d, key) =>
                <div className="col-lg-4 col-md-6 mb-5">
                  
                    <div className="blog-item" style={{ border: '5px ', padding: '10px' }}>
                               
                        <div className="blog-img">
            
                            <div className="blog-img-inner">
                                <img className="img-fluid w-100 rounded-top" src={`${process.env.REACT_APP_API_URL}${d.image}`} alt="Image"/>
                                <div className="blog-icon">
                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                </div>
                            </div>

                            <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>{d.duration}  </small>
                                <a href="#" className="btn-hover flex-fill text-center text-primary border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>{d.title}</a>
                                <a href="#" className="btn-hover flex-fill text-center  text-primary py-2"><i className="fa-solid fa-earth-americas text-primary "></i>1 person</a>
                            </div>
                        
                        </div>
                        <div className="blog-content border border-top-0 rounded-bottom p-4">
                            <div className="hotels-price mb-3">{d.price}  </div>
                                <div className="mb-3">
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                </div>
                                <p className="my-3">{d.description}</p>
                                <div className="row bg-white rounded-bottom mx-0">
                                    <div className="col-6 text-start px-0">
                                        <a href="#" className="btn btn-success rounded-pill  text-white py-2 px-4">Read More</a>
                                    </div>
                                    <div className="col-6 text-end px-0">
                                        <Link to={`/checkout_hotel/${d.id}`} className='btn btn-primary rounded-pill  text-white py-2 px-4' >Book Now</Link>
                                    </div>
                                </div>
                                   
                            </div>
                                              
                  
                        </div>
                 
                </div>
                    )}
            </div>
          
        </section>
 


   
        <div className="container-fluid gallery py-5 my-5">
            <div className="mx-auto text-center mb-5" style={{maxWidth: '900px'}}>
                <h5 className="section-title px-3">Our Gallery</h5>
                <h1 className="mb-4">Tourism & Traveling Gallery.</h1>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                </p>
            </div>
            <div className="tab-className text-center">
                <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                    <li className="nav-item">
                        <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#GalleryTab-1">
                            <span className="text-dark" style={{width: '150px'}}>All</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-2">
                            <span className="text-dark" style={{width: '150px'}}>World tour</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-3">
                            <span className="text-dark" style={{width: '150px'}}>Ocean Tour</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-4">
                            <span className="text-dark" style={{width: '150px'}}>Summer Tour</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-5">
                            <span className="text-dark" style={{width: '150px'}}>Sport Tour</span>
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-2">
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-1.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-1.jpg" data-lightbox="gallery-1" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-4.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-4.jpg" data-lightbox="gallery-4" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-5.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-5.jpg" data-lightbox="gallery-5" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-6.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-6.jpg" data-lightbox="gallery-6" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-7.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-7.jpg" data-lightbox="gallery-7" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-8.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-8.jpg" data-lightbox="gallery-8" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-9.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-9.jpg" data-lightbox="gallery-9" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-10.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-10.jpg" data-lightbox="gallery-10" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="GalleryTab-2" className="tab-pane fade show p-0">
                        <div className="row g-2">
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="GalleryTab-3" className="tab-pane fade show p-0">
                        <div className="row g-2">
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="GalleryTab-4" className="tab-pane fade show p-0">
                        <div className="row g-2">
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="GalleryTab-5" className="tab-pane fade show p-0">
                        <div className="row g-2">
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="assets/img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image"/>
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div className="gallery-plus-icon">
                                        <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-fluid booking py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h5 className="section-booking-title pe-3">Booking</h5>
                        <h1 className="text-white mb-4">Online Booking</h1>
                        <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                        </p>
                        <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                        </p>
                        <a href="#" className="btn btn-light text-primary rounded-pill py-3 px-5 mt-2">Read More</a>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="text-white mb-3">Book A Tour Deals</h1>
                        <p className="text-white mb-4">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-white border-0" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control bg-white border-0" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating date" id="date3" data-target-input="nearest">
                                        <input type="text" className="form-control bg-white border-0" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                        <label for="datetime">Date & Time</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select bg-white border-0" id="select1">
                                            <option value="1">Destination 1</option>
                                            <option value="2">Destination 2</option>
                                            <option value="3">Destination 3</option>
                                        </select>
                                        <label for="select1">Destination</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select bg-white border-0" id="SelectPerson">
                                            <option value="1">Persons 1</option>
                                            <option value="2">Persons 2</option>
                                            <option value="3">Persons 3</option>
                                        </select>
                                        <label for="SelectPerson">Persons</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select bg-white border-0" id="CategoriesSelect">
                                            <option value="1">Kids</option>
                                            <option value="2">1</option>
                                            <option value="3">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <label for="CategoriesSelect">Categories</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control bg-white border-0" placeholder="Special Request" id="message" style={{height: "100px"}}></textarea>
                                        <label for="message">Special Request</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary text-white w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="container-fluid guide py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: '900px'}}>
                    <h5 className="section-title px-3">Travel Guide</h5>
                    <h1 className="mb-0">Meet Our Guide</h1>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="guide-item">
                            <div className="guide-img">
                                <div className="guide-img-efects">
                                    <img src="assets/img/guide-1.jpg" className="img-fluid w-100 rounded-top" alt="Image"/>
                                </div>
                                <div className="guide-icon rounded-pill p-2">
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="guide-title text-center rounded-bottom p-4">
                                <div className="guide-title-inner">
                                    <h4 className="mt-3">Full Name</h4>
                                    <p className="mb-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="guide-item">
                            <div className="guide-img">
                                <div className="guide-img-efects">
                                    <img src="assets/img/guide-2.jpg" className="img-fluid w-100 rounded-top" alt="Image"/>
                                </div>
                                <div className="guide-icon rounded-pill p-2">
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="guide-title text-center rounded-bottom p-4">
                                <div className="guide-title-inner">
                                    <h4 className="mt-3">Full Name</h4>
                                    <p className="mb-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="guide-item">
                            <div className="guide-img">
                                <div className="guide-img-efects">
                                    <img src="assets/img/guide-3.jpg" className="img-fluid w-100 rounded-top" alt="Image"/>
                                </div>
                                <div className="guide-icon rounded-pill p-2">
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="guide-title text-center rounded-bottom p-4">
                                <div className="guide-title-inner">
                                    <h4 className="mt-3">Full Name</h4>
                                    <p className="mb-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="guide-item">
                            <div className="guide-img">
                                <div className="guide-img-efects">
                                    <img src="assets/img/guide-4.jpg" className="img-fluid w-100 rounded-top" alt="Image"/>
                                </div>
                                <div className="guide-icon rounded-pill p-2">
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="guide-title text-center rounded-bottom p-4">
                                <div className="guide-title-inner">
                                    <h4 className="mt-3">Full Name</h4>
                                    <p className="mb-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="container-fluid blog py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: '900px'}}>
                    <h5 className="section-title px-3">Our Blog</h5>
                    <h1 className="mb-4">Popular Travel Blogs</h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque. Magni non explicabo beatae sit, vel reiciendis consectetur numquam id similique sunt error obcaecati ducimus officia maiores.
                    </p>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <div className="blog-img-inner">
                                    <img className="img-fluid w-100 rounded-top" src="assets/img/blog-1.jpg" alt="Image"/>
                                    <div className="blog-icon">
                                        <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                                    <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2"></i>1.7K</a>
                                    <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2"></i>1K</a>
                                </div>
                            </div>
                            <div className="blog-content border border-top-0 rounded-bottom p-4">
                                <p className="mb-3">Posted By: Royal Hamblin </p>
                                <a href="#" className="h4">Adventures Trip</a>
                                <p className="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <div className="blog-img-inner">
                                    <img className="img-fluid w-100 rounded-top" src="assets/img/blog-2.jpg" alt="Image"/>
                                    <div className="blog-icon">
                                        <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                                    <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2"></i>1.7K</a>
                                    <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2"></i>1K</a>
                                </div>
                            </div>
                            <div className="blog-content border border-top-0 rounded-bottom p-4">
                                <p className="mb-3">Posted By: Royal Hamblin </p>
                                <a href="#" className="h4">Adventures Trip</a>
                                <p className="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <div className="blog-img-inner">
                                    <img className="img-fluid w-100 rounded-top" src="assets/img/blog-3.jpg" alt="Image"/>
                                    <div className="blog-icon">
                                        <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                                    <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2"></i>1.7K</a>
                                    <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2"></i>1K</a>
                                </div>
                            </div>
                            <div className="blog-content border border-top-0 rounded-bottom p-4">
                                <p className="mb-3">Posted By: Royal Hamblin </p>
                                <a href="#" className="h4">Adventures Trip</a>
                                <p className="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        
        <div className="container-fluid subscribe py-5">
            <div className="container text-center py-5">
                <div className="mx-auto text-center" style={{maxWidth: '900px'}}>
                    <h5 className="subscribe-title px-3">Subscribe</h5>
                    <h1 className="text-white mb-4">Our Newsletter</h1>
                    <p className="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                    </p>
                    <div className="position-relative mx-auto">
                        <input className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        
        
    </Weblayout>
   
  );
}

export default Home;
