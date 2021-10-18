import React from 'react'
import {Image} from 'react-bootstrap'
const Footer = () => <footer className="page-footer font-small blue pt-4 footer">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-12">
               <Image src="static/logo/Frame 4.svg"  className="img-fluid" style={{maxWidth: "250px"}} />
            </div>

            
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2021 Copyright:
        <a href="https://www.linkedin.com/in/adrieltelito/"> Adrie Telito</a>
    </div>

</footer>

export default Footer;