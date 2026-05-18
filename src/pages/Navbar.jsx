import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import {SOS} from "../utils/Sos";

export default function Navbar() {

    return(
      <>
              <button className="sos-btn" onClick={SOS}>🚨 SOS</button>

              {/* Ist navbar started */}
              <div className="fixed-navbar">
               <div className='row nav1'>
                <nav className="navbar ">
                   <h3 className="logo m-3" >🛡️The Guardian Shield</h3>
  
                   <form className="">
                     <Link to="/donate"><button className="btn btn-danger px-3 donate-btn">Donate </button></Link>
                   </form>
                 </nav>
                 </div>
              {/* Ist navbar ended */} 
            
          {/* for horizontal line */}
          
          <div className="container-fluid">
       
          {/* second navbar started */} 
          <div className='row nav2'>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ps-4 mb-0  w-100 d-flex align-items-center">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/charity">Charity</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/emergency">Emergency</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About Us
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><HashLink className="dropdown-item" to="/about#mission">Our Mission</HashLink></li>
              <li><HashLink className="dropdown-item" to="/about#vision">Our Vision</HashLink></li>
              <li><HashLink className="dropdown-item" to="/about#why">Why We Started</HashLink></li>
              <li><HashLink className="dropdown-item" to="/about#meet">Meet The Creator</HashLink></li>
              <li> <Link className="dropdown-item " to="/faq">FAQ</Link></li>
              <li> <Link className="dropdown-item " to="/orphanage">Orphanage</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/support">Support</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jobs">Jobs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/contact">Contact Us</Link>
          </li>
          
          
          <li className="nav-item ms-auto">
            <Link className="nav-link navbar-profile   " to="/myprofile"><img src="../images/profile-logo.png" height="40px" width="60px" /></Link>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
  </div> 
            {/* 2nd navbar ended */}
          </div>
          </div>
          
          </>
    )
}