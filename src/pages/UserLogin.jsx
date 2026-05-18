import React, { useState } from "react";
import "./UserLogin.css";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [active, setActive] = useState(false);


  // Signup 
  const [signUp, setSignUp] = useState({
    username:"",
    email:"",
    password:""
  })

  const SignUpHandle = (e)=>
  {
     setSignUp({
      ...signUp,
      [e.target.name]: e.target.value
     });
  };

   // Signin/login 
   const [signIn, setSignIn] = useState({
    email:"",
    password:""
  })

  const SignInHandle = (e)=>
  {
     setSignIn({
      ...signIn,
      [e.target.name]: e.target.value
     })
  };


  const auth = useAuth();
  const navigate = useNavigate();

  // handleSubmit (Signup)
  const handleSubmitUp = async (e)=>{
    e.preventDefault();
    console.log(signUp)
    auth.signupAction(signUp);
    navigate("/");
  }

  const handleSubmitIn = async (e) => {
    e.preventDefault();
  
    console.log(signIn);
  
    const user = await auth.signinAction(signIn); // ✅ wait for response
  
    if (user) {
      navigate("/"); // ✅ only after success
    }
  };


  return (
    <div className="fa-wrapper d-flex justify-content-center align-items-center">

      <div className={`fa-container ${active ? "active" : ""}`}>

        {/* SIGN IN */}
        <div className="fa-form fa-signin">
          <form onSubmit={handleSubmitIn}>
            <h2>Sign In</h2>

            <div className="fa-icons">
              <span>G</span>
              <span>f</span>
              <span>in</span>
            </div>

            <p className="text-muted">or use your account</p>

            <input className="form-control" type="email" placeholder="Email" value={signIn.email} name="email" onChange={SignInHandle}/>
            <input className="form-control" type="password" placeholder="Password" value={signIn.password} name="password" onChange={SignInHandle}/>

            {/* <button
                  type="button"
                  className="btn btn-link mt-2"
                  onClick={handleForgotPassword}
                >
              Forgot Password?
            </button> */}

            <button className="btn btn-primary w-100 mt-2">Sign In</button>
          </form>
        </div>

        {/* SIGN UP */}
        <div className="fa-form fa-signup">
          <form onSubmit={handleSubmitUp}>
            <h2>Create Account</h2>

            <div className="fa-icons">
              <span>G</span>
              <span>f</span>
              <span>in</span>
            </div>

            <p className="text-muted">or use your email</p>

            <input className="form-control" type="text" placeholder="Name" value={signUp.username} name="username" onChange={SignUpHandle}/>
            <input className="form-control" type="email" placeholder="Email" value={signUp.email} name="email" onChange={SignUpHandle}/>
            <input className="form-control" type="password" placeholder="Password" value={signUp.password} name="password" onChange={SignUpHandle}/>

            <button className="btn btn-primary w-100 mt-2">Sign Up</button>
          </form>
        </div>

        {/* BLUE PANEL */}
        <div className="fa-overlay-container">
          <div className="fa-overlay">

            <div className="fa-panel fa-left">
              <h2>Welcome Back!</h2>
              <p>To keep connected with us please login</p>
              <button className="btn btn-light" onClick={() => setActive(false)}>
                Sign In
              </button>
            </div>

            <div className="fa-panel fa-right">
              <h2>Hello, Friend!</h2>
              <p>Enter your details and start journey</p>
              <button className="btn btn-light" onClick={() => setActive(true)}>
                Sign Up
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}