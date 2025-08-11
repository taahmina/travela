import React, { useEffect, useState } from 'react';
import Weblayout from '../layout/Weblayout';
import axios from '../Admin/component/axios';
function Packages_page() {
const [packages,setPackages]=useState([]);
   useEffect(() => {
       getPackages();
     }, []);
   
     const getPackages = async (e) => {
       let res = await axios.get(`front_api/packages.php`)
       setPackages(res.data);
     }

    

    return(
        <Weblayout>


<div className="main">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: '900px'}}>
                    <h5 className="section-title px-3">Packages</h5>
                    <h1 className="mb-0">Awesome Packages</h1>
                </div>
            </div> 
    </div> 

    <section id="packages" className="package section">
                <div className="packge">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{maxWidth: '900px'}}>
                            <h5 className="section-title px-3">Packages</h5>
                            <h1 className="mb-0">Awesome Packages</h1>
                        </div>
                    </div>
                </div>
                
        
        <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                
                 {packages.length > 0 && packages.map((d, key) =>
                        <div className="blog-item">
                                <div className="blog-img">
                 
                                    <div className="blog-img-inner">
                                        <img className="img-fluid w-100 rounded-top" src={`${process.env.REACT_APP_API_URL}${d.image}`} alt="Image"/>
                                        <div className="blog-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>

                                    <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 Days</small>
                                        <a href="#" className="btn-hover flex-fill text-center text-primary border-end py-2"><i class="fa fa-map-marker-alt text-primary me-2"></i>{d.title}</a>
                                        <a href="#" className="btn-hover flex-fill text-center  text-primary py-2"><i class="fa fa-user me-2"></i>2 Person</a>
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
                                                    <a href="#" className="btn-hover btn text-primary py-2 px-4">Read More</a>
                                                </div>
                                                <div className="col-6 text-end px-0">
                                                    <a href="#" className="btn-hover btn text-primary py-2 px-4">Book Now</a>
                                                </div>
                                          </div>
                                  
                               </div>
                               </div>
                                    
                     )}
                </div>
            </div>
           
        </section>


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
export default Packages_page;
   
    