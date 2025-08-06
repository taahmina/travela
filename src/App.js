import * as React from "react";
import{BrowserRouter,Route,Routes} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Service from './pages/Service';
import Package from './pages/Package';
import Blog from './pages/Blog';
import Contact from './pages/Contact';



/* admin route */
import Dashboard from './Admin/Dashboard';
import Users from './Admin/Users';
import Useradd from './Admin/Useradd';




function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
              <Route path="/service" element={<Service/>}/>
               <Route path="/package" element={<Package/>}/>
               <Route path="/blog" element={<Blog/>}/>
               <Route path="/contact" element={<Contact/>}/>
               {/*Admin route*/}
               <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/user" element={<Users />} />
                <Route path="/admin/add-user" element={<Useradd />} />
        </Routes>
       </>
    );
}
export default App;