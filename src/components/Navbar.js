import React from 'react'
import logo from '../logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons" 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className ="container">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">< img className="logo" src={logo} alt="logo" ></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{ color: "#fff "}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">How I Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</div>
</nav>
    )
}

export default Navbar
