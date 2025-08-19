import React, { useEffect, useState } from 'react';
import Weblayout from '../layout/Weblayout';
import axios from '../Admin/component/axios';
import {useParams} from "react-router-dom";

function Checkout () {
    const {id} = useParams();
    const [packages,setPackages]=useState([]);
    const [packagesPrice,setPackagesPrice]=useState(0);
    

    useEffect(() => {
        getPackages();
    }, []);
    
    const getPackages = async (e) => {
        let res = await axios.get(`front_api/packages.php?id=${id}`)
        console.log(res.data[0].title)
        setPackages(res.data[0] ?? []);
        setPackagesPrice(res.data[0].price ?? 0)
    }

    const p_price = async (e) => {
        if(e.target.value){
            let price=parseInt(e.target.value) * parseInt(packages.price);
            setPackagesPrice(price)
        }
    }
    
    const saveCheckout=async (e) => {
      e.preventDefault();

      let datas={
        customer_name:e.target.customer_name.value,
        customer_contact:e.target.customer_contact.value,
        customer_email:e.target.customer_email.value,
        customer_address:e.target.customer_address.value,
        person:e.target.person.value,
        datetime:e.target.datetime.value,
        messege:e.target.messege.value,
      
        sub_total:packagesPrice,
        item_details:JSON.stringify(packages)
      }
      console.log(datas);
      const formData = new FormData();
      for (const property in datas) {
        formData.append(property, datas[property])
      }

      try{
          let url=`front_api/checkout.php`
          
          let res= await axios.post(url,formData);
           //console.log(res);
          // return false;
          if(res.data.error == 1){
            alert(res.data.message)
          }else{
            window.location.href='/';
          }
        } 
        catch(e){
          console.log(e);
        }
    }


    return(
        <Weblayout>
        
        <div className="container-fluid booking py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">

                    <div className="col-lg-6">
                        <h1 className="text-white mb-3">Book A Tour Deals</h1>
                        <p className="text-white mb-4">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
                        <form 
                         className="row contact_form"
                                onSubmit={saveCheckout}
                            >
             
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-white border-0" id="customer_name" name="customer_name" placeholder="Your Name"/>
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-white border-0" id="customer_email" name="customer_email" placeholder="Your Email"/>
                                        <label htmlFor="customer_email">Your Email</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-white border-0" id="customer_contact" name="customer_contact" placeholder="Your Contact Number"/>
                                        <label htmlFor="customer_contact">Your Phone Number</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-white border-0" id="customer_address" name="customer_address" placeholder="Your Adsdress"/>
                                        <label htmlFor="customer_address">Your Address</label>
                                    </div>
                                </div>



                                <div className="col-md-6">
                                    <div className="form-floating date" id="date3" data-target-input="nearest">
                                        <input type="date" className="form-control bg-white border-0" id="datetime"  name="datetime"  placeholder="Date" />
                                        <label htmlFor="datetime">Date</label>
                                    </div>
                                </div>
                                
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" onKeyUp={p_price} className="form-control bg-white border-0" id="person" name="person" placeholder="Number of Guest" />
                                        <label htmlFor="person">Persons</label>
                                    </div>
                                </div>
                                
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control bg-white border-0" placeholder="Special Request" id="messege" name="messege" style={{height: "100px"}}></textarea>
                                        <label htmlFor="messege">Special Request</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary text-white w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-6">
                        <h1 className="section-booking-title pe-3">Booking</h1>
                        <h3 className="text-white mb-4">Details</h3>

                           <div className="order_box">
                              
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Package</th>
                                            <th>price</th>
                                        </tr>
                                    </thead>
                                    <thead>
                                        {packages && (
                                            <tr>
                                                <td>{packages.title}</td>
                                                <td>{packagesPrice}</td>
                                            </tr>
                                        )}  
                                    </thead>
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Weblayout>
    )}
export default Checkout;