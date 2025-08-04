import * as React from "react";
import{BrowserRouter,Route,Routes} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Service from './pages/Service';
import Package from './pages/Package';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

import'./assets/importfile.css';
import'./assets/lib/owlcarousel/assets/owl.carousel.min.css';
import'bootstrap/dist/css/bootstrap.min.css';
import'./assets/lib/lightbox/css/lightbox.min.css';
import'./assets/css/style.css';





function App(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
              <Route path="/service" element={<Service/>}/>
               <Route path="/package" element={<Package/>}/>
               <Route path="/blog" element={<Blog/>}/>
               <Route path="/contact" element={<Contact/>}/>
        </Routes>
       
    );
}
export default App;