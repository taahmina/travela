
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';
import Service from './pages/Service';
import Package from './pages/Package';
import Blog from './pages/Blog';
import Contact from './pages/Contact';



/* admin route */
import Login from './Admin/Login';
import Register from './Admin/Register';
import Dashboard from './Admin/Dashboard';
import Users from './Admin/Users';
import Useradd from './Admin/Useradd';
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
               <Route path="/package" element={<Package/>}/>
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
          <Route path= {"/admin/user"} element={<Users /> } />
          <Route path="/admin/add-user" element={<Useradd />} />
        </Routes>
       </>
    );
}
export default App;