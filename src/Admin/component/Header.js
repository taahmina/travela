import * as React from 'react';
import { Link,useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom';

function Header(){
  const navigate=useNavigate();
  const logout = ()=>{
    localStorage.removeItem("access_token");
    localStorage.removeItem("userdata");
    navigate('/login')
  }
    return(
          <>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/dashboard"}>Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/user"}>User</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/continents"}>Continents</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/countries"}>Countries</Link>
                  </li>
                   <li className="nav-item">
                    <Link className="nav-link" to={"/admin/cities"}>Cities</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/packages"}>Packages</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/coupon"}>Coupon</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/orders"}>Orders</Link>
                  </li>
                  
                  
                </ul>
                                <button className="btn btn-link" onClick={logout}>Logout</button>
              </div>
            </nav>
          </>
    )
}


export default Header;