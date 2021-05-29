import React from 'react'
import {NavLink} from "react-router-dom"

const Menu  = ()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
        {/* <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/home">Home</NavLink>
        <NavLink exact activeClassName="active_class" to="/about">About us</NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink>
        <NavLink exact activeClassName="active_class" to="/search">Search</NavLink>
        <NavLink exact activeClassName="active_class" to="/service">Services</NavLink>
        <NavLink exact activeClassName="active_class" to="/user/Harsh/srivastav">User</NavLink>
        </div> */}
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/contact">Contact us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/service">Services</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</div>
        </>
    )
    }
export default Menu