import {useAuth} from "../pages/AuthProvider";
import {Link, Outlet} from "react-router-dom";
import React, { useEffect, useState } from "react";


export default function AdminLayout()
{
    const auth=useAuth()
    const handleClick=()=>{
        auth.logout()
    }

    return(
        <>
             <div class="container-fluid">
              <div class="row flex-nowrap">
                <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 admin-dash">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
               
                    <h4 class="mt-2" >Welcome AJ🤝</h4>
                
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-white" id="menu">
                    <li class="nav-item">
                        <Link to="/" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </Link>   
                    </li>
                    <li>
                        <Link to="/viewusers" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">View Users</span> </Link>
                    </li>
                    <li>
                        <Link to="/supportcontact" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi bi-table"></i> <span class="ms-1 d-none d-sm-inline">View Support User</span></Link>
                    </li>
                   
                    
                    <li>
                        <Link to="/volunteerform" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">View Volunteer List</span> </Link>
                    </li>

                    <li>
                        <Link to="/feedback" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">View Contact User</span> </Link>
                    </li>
                    <li>
                        <Link to="/job" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Job Seva Request</span> </Link>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">BLOG</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <Link to="/addblog" class="nav-link px-0"> <span class="d-none d-sm-inline">Add Blog</span> </Link>
                            </li>
                            <li>
                                <Link to="/viewblog" class="nav-link px-0"> <span class="d-none d-sm-inline">View Blog</span></Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/donation" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Donation List</span> </Link>
                    </li>
                </ul>

                
                <hr />
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../images/logo.png"  width="30" height="30" className="rounded-circle" />
                        <span class="d-none d-sm-inline mx-1">Admin</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        {/* <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li> */}
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" onClick={handleClick}>Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3">
            <Outlet />
        </div>

        





    </div>
</div>

        </>
    )
}