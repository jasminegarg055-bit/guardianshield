import { useState } from "react";
import {useAuth} from "./AuthProvider";


export default function Login(){
  
  const [formdata, setformdata]=useState({
    username:"",
    password:""
  })

  const handleChange=(e)=>{
    const {name, value}=e.target
    setformdata({
      ...formdata,
      [name]:value
    })
  }

  const auth = useAuth();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(formdata)
    auth.loginAction(formdata);
    return;
  }



    return(
        <>
        <section className="login-page">
  <div className="container login-wrapper">

    <div className="row align-items-center">

      {/* LEFT */}
      <div className="col-lg-6 col-md-6 col-12">
        <div className="welcome-card text-center">
          <h2>Welcome Back!</h2>
          <h4>The Guardian Shield</h4>
          <p>Protecting Women • Building Safer Communities</p>
        </div>
      </div>

      {/* RIGHT */}
      
      <div className="col-lg-6 col-md-6 col-12">
      <form onSubmit={handleSubmit}>
        <div className="login-card">

          <h3 className="text-center">Login</h3>
          <p className="text-center">Sign in to your account</p>

          <input type="text" placeholder="Username" value={formdata.username} onChange={handleChange} name="username"
            className="form-control rounded-pill mb-3" required/>

          <input type="password" placeholder="Password" value={formdata.password} onChange={handleChange} name="password"
            className="form-control rounded-pill mb-3" required/>

          <div className="d-flex justify-content-between mb-3 ">
           
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn login-btn w-100 rounded-pill">
            Login
          </button>

        </div>
        </form>
      </div>

    </div>
  </div>
</section>
    
        </>
    )
}