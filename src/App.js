
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';
import Service from './pages/Service';

import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Packages_page from './pages/Packages_page';



/* admin route */
import Login from './Admin/Login';
import Register from './Admin/Register';
import Dashboard from './Admin/Dashboard';
import Users from './Admin/Users';
import Categories from './Admin/Categories';
import Packages from './Admin/Packages';

import Protected from './Admin/protected';





function App(){
const [ isSignedIn, setIsSignedIn ] = useState(()=> {
    /* if you want, user will be logged in until they logout*/
    //return localStorage.getItem("access_token") || false;
    /* if you want, user will be logged when they close the browser*/
    return sessionStorage.getItem("access_token") || false;
  });
  



    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
              <Route path="/service" element={<Service/>}/>
               <Route path="/package" element={<Packages_page/>}/>
               <Route path="/blog" element={<Blog/>}/>
               <Route path="/contact" element={<Contact/>}/>
                <Route path="/register" element={<Register />} />
               <Route path="/login" element={<Login />} />

               
               {/*Admin route*/}
               <Route path= {"/admin/dashboard"} element={
                  <Protected  isSignedIn= {isSignedIn} >
                    <Dashboard /> 
                </Protected>
                } />
                 <Route path= {"/admin/user"} element={
                  <Protected  isSignedIn= {isSignedIn} >
                    <Users /> 
                </Protected>
                } />
      
      
           <Route path= {"/admin/categories"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Categories /> 
              </Protected>
              } />
          <Route path= {"/admin/packages"} element={
              <Protected  isSignedIn= {isSignedIn} >
                <Packages /> 
            </Protected>
            } />
        </Routes>
       </>
    );
}
export default App;