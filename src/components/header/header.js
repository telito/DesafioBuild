import React from 'react'
import {Image, Icon} from 'react-bootstrap'

function Header() {
    return (
  <header id="header">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        
        
         <a href="index.html"><Image src="static/logo/frame 1.svg" alt="" className="img-fluid" /></a>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Sobre</a></li>
          
          
          <li><a className="nav-link scrollto" href="#contact">contato</a></li>
          <li><a className="getstarted scrollto" href="#about">Me Surpreenda</a></li>
        </ul>
        <i className="bi bi-menu-down"></i>
      </nav>

    </div>
  </header>
    )
}

export default Header;