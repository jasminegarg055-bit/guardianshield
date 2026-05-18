import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { Link } from 'react-router-dom';  


export default function Layout(){
    return(
        <>
         <div className='container-fluid my-div'>
        <Navbar/>
        <div className="main-content">
        <Outlet/>
        </div>
         
              <footer className="footer">
                <div className="footer-container">

                  {/* LEFT */}
                  <div className="footer-col">
                    <h2>Women Safety Circle?</h2>
                    <p className="px-0 mx-auto">
                      Empowering Women, Ensuring Safety. We provide awareness,
                      support and protection for women.
                    </p>
                  </div>

                  {/* ABOUT */}
                  <div className="footer-col">
                    <h5>About Us</h5>
                    <ul>
                      <li>Overview</li>
                      <li>Mission & Vision</li>
                      <li>Why we started</li>
                      <li>Meet the created</li>
                    </ul>
                  </div>

                  {/* WHAT WE DO */}
                  <div className="footer-col">
                    <h5>What We Do</h5>
                    <ul>
                      <li>Awareness</li>
                      <li>Self Defense</li>
                      <li>Emergency Help</li>
                      <li>Legal Support</li>
                      <li>Cyber Safety</li>
                    </ul>
                  </div>

                  {/* TAKE ACTION */}
                  <div className="footer-col">
                    <h5>Take Action</h5>
                    <ul>
                      <li>Donate</li>
                      <li>Volunteer</li>
                      <li>Get Help</li>
                      <li>Join Campaign</li>
                    </ul>
                  </div>

                  {/* RESOURCES */}
                  <div className="footer-col">
                    <h5>Resources</h5>
                    <ul>
                      <li>Blogs</li>
                      <li>Safety Tips</li>
                      <li>FAQs</li>
                      <li>Helpline</li>
                    </ul>
                  </div>

                </div>

                {/* BOTTOM */}
                <div className="footer-bottom">
                  <p className="mt-2">@2026 The Guardian Shield | All Rights Reserved</p>

                  <div className="dev">
                    <span>Developed by</span>
                    <span className="footer-logo">AJ</span>
                  </div>

                  <div className="links">
                    <a href="privacy">Privacy Policy</a>
                    <a href="terms">Terms & Conditions</a>
                  </div>
                </div>
              </footer>
        
        </div>
        </>
    )
}