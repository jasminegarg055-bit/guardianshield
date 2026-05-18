import {useState} from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"

function SupportCards(Props)
{
  return(
    <>
          <div className="col-md-4 col-lg-4 col-12 supp">
            <div className="  support-card text-center p-4 mx-auto ">
              <div className="card">
              <h3>{Props.heading}</h3>
              <h5>{Props.des}</h5>
              <p style={{maxWidth:"300px"}}>{Props.desc}</p>
              <h6>{Props.line}</h6>
              <button className={`btn btn-${Props.color}`} onClick={() => window.open(Props.link, "_blank")} >{Props.btnText}</button>
            </div>
            </div>
          </div>
    </>
  )
}


export default function Support(){

    const [ShowOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();
   

    const options = [
      { name: "Emergency", path:"/emergency"},
      { name: "Personal Talk", path:"/contact"},
      { name: "Cancel", path:"/support"},
    ];
  
  // form 
  // state for data store
  const [formdata, setFormData] = useState({
    name:"",
    email:"",
    issuetype:"",
    description:"",
    phone:""
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

  if(!formdata.issuetype)
    {
      err.issuetype=" Please select issuetype"
    }

    if(!formdata.description.trim())
      {
        err.description="description is required"
      }
      else if(formdata.description.length<10)
      {
        err.description="Minimum 10 character is required"
      }

      if(!formdata.phone)
      {
        err.phone="Phone Number is required"
      }
      
      return err;
};

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
      const response=await fetch("http://localhost:5000/api/insertsupport",{
        headers:{'content-Type' : 'application/json'},
        method:"POST",
        body: JSON.stringify(formdata)
    })

    if(response.ok)
      {
          alert('Support Request Sent')

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


    return(
    <>
         
      <div className="support-page">

      {/* Header Section */}
      <div className="support-header text-center mx-auto py-5 ">
        <h1>🤝 Support Center</h1>
        <p className="ms-5">We are here to help and guide you 24/7</p>

        {/* search-bar */}
        <div className="support-search m-1 position-relative ">
          <input type="text" placeholder="Search your Problem..." className="rounded-pill mb-1 p-2 w-50 ms-4" onFocus={() =>
            setShowOptions(true)} />  
        
    
     

      {/* dropdown options */}
      {ShowOptions && (
        <div className="support-dropdown">
          {options.map((item,index)=>(
            <div key={index} className="option-item p-2" onClick={()=>
              { navigate(item.path);
                setShowOptions(false);}} >
              {item.name}</div>
          ))}
        </div>
      )}

       </div>
       <p>Find answers instantly or contact our team</p>

       </div>



      {/* Support cards */}
      <div className="container my-5">
        <div className="row">

          {/* Emotional Support */}
          <SupportCards heading="💬Emotional Support" desc="Talk to trained counselors for emotional  support." des="🟢Available Now" line="⭐Trusted by 1K+ users" btnText="Chat Now" link="https://api.whatsapp.com/" color="success"/>

          <SupportCards heading="⚖️ Legal Support" desc="Get free legal advice related to women safety and rights." des="🟢Available Now" line="⭐Trusted by 5K+ users" btnText="Get Legal Help" link="https://vakildial.com/" color="primary"/>
         
          <SupportCards heading="👩‍👩‍👧 Community Support" desc="Join support groups and connect with volunteers." des="🟢Join Group" line="⭐Trusted by 2K+ users" btnText="Join Community" link="https://chat.whatsapp.com/" color="success"/>

         
        </div>
      </div>

      {/* Contact Support Form */}
      <div className="container my-5">
        <div className="card shadow p-4">
          <h3 className="text-center mb-4 fw-bold">📩 Contact Support Team</h3>

          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Your Name" name="name" onChange={handleChange} required />
                {error.name && <small className="text-danger"> {error.name} </small>}
              </div>

              <div className="col-md-6 mb-3">
              <input type="email" className="form-control" placeholder="Your Email" name="email" onChange={handleChange} required />
              {error.email && <small className="text-danger"> {error.email} </small>}
              </div>
            </div>
            
            <div className="row">
            <div className="col-md-6 mb-3">
              <select name="issuetype" className="form-control" onChange={handleChange}>
                <option value="">Select Your Issue</option>
                <option>Harassment</option>
                <option>Domestic Violence</option>
                <option>Stalking</option>
                <option>Emergency Help</option>
                <option>Other</option>
              </select>
              {error.issuetype && <small className="text-danger"> {error.issuetype} </small>}
            </div>

            <div className="col-md-6 mb-3">
               <PhoneInput country={"in"} placeholder="Enter Phone Number" value={formdata.phone} name="phone" onChange={(phone)=>
                setFormData({
                  ...formdata,phone
                })
               } />
               {error.phone && <small className="text-danger"> {error.phone} </small>}
            </div>
            </div>

            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Describe your issue" name="description" onChange={handleChange}></textarea>
              {error.description && <small className="text-danger"> {error.description} </small>}
            </div>

            <div className="text-center">
              <button className="btn btn-danger px-4">Submit Request</button>
            </div>
          </form>

        </div>
      </div>
      </div>
        
    
    </>
    )
}