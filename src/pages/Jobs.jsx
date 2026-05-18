import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

export default function Jobs() {

  const [formdata, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    job:""
  });

  //  error store
const [error, setError] = useState({});


// handleChange 
const handleChange = async (e)=>
  {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  // validation
const validate = ()=>
  {
    let err= {};
  
    if(!formdata.name.trim())
    {
      err.name="Name is required"
    }
  
  
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!formdata.email)
    {
      err.email="Email is required"
    }
    else if(!emailpattern.test(formdata.email))
    {
      err.email="Enter valid Email"
    }

    
    if(!formdata.phone)
      {
        err.phone="Phone Number is required"
      }
      
    if(!formdata.job.trim())
      {
        err.job="Apply is required"
      }  


      return err;
    }



   // submit
const handleSubmit = async (e)=>
  {
    e.preventDefault();
  
    const validationerror = validate();
    setError(validationerror);
  
    if(Object.keys(validationerror).length===0)
    {
      try
      {
        const response=await fetch("http://localhost:5000/api/insertjob",{
          headers:{'content-Type' : 'application/json'},
          method:"POST",
          body: JSON.stringify(formdata)
      })
  
      if(response.ok)
        {
            alert('Job Apply')
            window.location.reload();
        }
        else
        {
            alert('Error in Sending')
        }
      }
        catch(error)
        {
            console.log(error)
            alert("Server error")
        }
    }
  
    
  };   

    return (
          <>
            {/* Heading */}

          <div className="container-fluid earn text-center p-5">
               <h1>Earn & Support Opportunities</h1><br/>
               <h6>Small Earning Opportunities for Women</h6>
               <p> Helping women earn from home or nearby work. </p>
          </div>
  
        {/* Cards Section */}
        <div className="container mt-3">
        <div className="row g-3 text-center Job ">
  
          {/* Card 1 */}
          <div className="col-md-4 col-sm-12 ">
            <div className="border p-3 job-1">
            <h4 className="mt-1">Home-Based Work</h4>
              <img src="../images/sewing.png" height="170px" width="100%" />
              
              <ul className="text-start mt-4">
                <li>Packing Work</li>
                <li>Stitching</li>
                <li>Handmade Items</li>
              </ul>
            </div>
          </div>
  

          {/* Card 2 */}
          <div className="col-md-4 col-sm-12">
            <div className="border p-3 h-100 job-1">
              <h4 className="mt-1">Local Work</h4>
              <img src="../images/cleaning.png" height="170px" width="100%" />
              <ul className="text-start mt-4">
                <li>House Help</li>
                <li>Cooking Support</li>
                <li>Cleaning Work</li>
              </ul>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="col-md-4 col-sm-12">
            <div className="border p-3 h-100 job-1">
              <h4 className="mt-1">Support Jobs</h4>
              <img src="../images/teaching.png" height="170px" width="100%" />
              <ul className="text-start mt-4">
                <li>Anganwadi Help</li>
                <li>NGO Support</li>
                <li>Teaching Small Kids</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
        {/* Info Text */}
        <p className="text-center border mt-4 p-2  skill small">
          We provide opportunities and guidance for women, but we don’t guarantee jobs.
        </p>
  
        {/* Form Section */}
          <div className="container m-4 d-flex justify-content-center  ms-auto">
            <form className="job-form " onSubmit={handleSubmit}>

              <h4 className="text-center mt-3">Join Free Seva</h4>

            {/* Name*/}
              <input
                type="text"
                placeholder="Full Name"
                className="form-control mb-3" name="name" onChange={handleChange} required />
                {error.name && <small className="text-danger"> {error.name} </small>}

              {/* Email*/}
              <input
                type="email" className="form-control" placeholder="Your Email" name="email" onChange={handleChange} required />
              {error.email && <small className="text-danger"> {error.email} </small>}
            

             {/* Phone */}
            <PhoneInput country={"in"} className="mt-3" placeholder="Enter Phone Number" value={formdata.phone} name="phone" onChange={(phone)=>
                setFormData({
                  ...formdata,phone
                })
               } />
               {error.phone && <small className="text-danger"> {error.phone} </small>}


              {/* Select */}
              <div className="mb-4 text-start mt-3">
              <label className="form-label">Post Apply</label>
              <select name="job" className="form-control" onChange={handleChange}>
               
                <option value="">Apply for Job</option>       
                    <option>Packing Work</option>
                    <option>Stitching / Tailoring</option>
                    <option>Handmade Products</option>
                    <option>Data Entry</option>
                    <option>Online Selling</option>

                    <option>House Help</option>
                    <option>Cooking Support</option>
                    <option>Cleaning Work</option>
                    <option>Babysitting</option>
                    <option>Caregiver (Elderly Support)</option>

                    
                    <option>Anganwadi Helper</option>
                    <option>NGO Volunteer</option>
                    <option>Teaching / Tuition</option>
                    <option>Women Counseling</option>
                    <option>Community Outreach</option>

                    
                    <option>Content Writing</option>
                    <option>Social Media Management</option>
                    <option>Graphic Designing</option>
                    <option>Technical Support</option>

                    
                    <option>Event Management</option>
                    <option>Field Work</option>
                    <option>Awareness Campaign Support</option>
                    <option>Fundraising</option>
                </select>
                {error.job && <small className="text-danger"> {error.job} </small>}
              </div>

              {/* Button */}
              <button className="btn btn-dark  w-100">Join Now</button>

            </form>
          </div>

       
  
 
      </>
    );
  }