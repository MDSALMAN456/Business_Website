import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Navbar=()=>{
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">       
        <nav className="navbar navbar-expand-lg navbar-light ">
  <NavLink className="navbar-Tag" to="/">iBlonde Solution</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" exact to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" exact to="/service">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" exact to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" exact to="/contact">Contact Book</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" exact to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" exact to="/signup">SignUp</NavLink>
      </li>
    </ul>
    
  </div>
</nav>
</div>
            </div>
        </div>

        </>
    )
}
export default Navbar;