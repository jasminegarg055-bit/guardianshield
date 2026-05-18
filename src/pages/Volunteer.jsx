import { useState } from "react";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"

function VolunteerSection(Props)
{
  return(
    <>
         <div className="col-md-4 col-lg-4 ">   
           <div className=" text-center p-3 volunteer-sec">
            <h3>{Props.heading}</h3>
            <p>{Props.desc}</p>
          </div>
        </div>
    </>
  )
}

function VolunteerOppo(Props)
{
  return(
    <>
        <div className=" col-lg-3 col-md-3 text-center">
          <div className="card mt-3 mx-auto vol-oppo">
            <img src={`/images/${Props.img}`}  />
            <h4 className="py-0">{Props.heading}</h4>
            <p>{Props.desc}</p>
            <button className=" btn  mb-3">{Props.btn}</button>
          </div>
        </div>
    </>
  )
}

function VolunteerBenefits(Props)
{
  return(
    <>
        <div className=" col-lg-4 col-md-3 text-center">
          <div className="card mt-3 mx-auto vol-oppo">
            <h4>{Props.heading}</h4>
          </div>
        </div>
    </>
  )
}



export default function Volunteer(){
  
  const [formdata, setFormData] = useState({
    firstname:"",
    secname:"",
    gender:"",
    dob:"",
    address:"",
    country:"",
    state:"",
    city:"",
    zip:"",
    email:"",
    phone:"",
    availiability:"",
    skills:"",
    experience:""
  })

  const [countryCode, setCountryCode] = useState("")
  const [stateCode, setStateCode] = useState("")
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([])
  const [error, setError] = useState({});

  const countries= Country.getAllCountries();

  // Country changes
  const handleCountryChange = (e)=>
  {
    const code= e.target.value;
    setCountryCode(code);
  
    setFormData({
      ...formdata,
      country: code  
    });

  const stateList = State.getStatesOfCountry(code);
    setStates(stateList);
    setCities([]);
  };

  // State change
  const handleStateChange = (e) => {
    const code = e.target.value;
    setStateCode(code);

    setFormData({
      ...formdata,
      state: code   
    });

    const cityList = City.getCitiesOfState(countryCode, code);
    setCities(cityList);
  };

  // handlechange
  const handleChange = (e)=>
  {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };


  //validation
  const validate = ()=>
  {
    let err={};

    if(!formdata.firstname.trim())
    {
      err.firstname="Firstname is required"
    }

    if(!formdata.gender)
    {
      err.gender="Gender is required"
    }

    if(!formdata.dob)
      {
        err.dob="DOB is required"
      }

    if(!formdata.address.trim())
      {
          err.address="Address is required"
      }
    else if(formdata.address.length<10)
      {
        err.address="Minimum 10 character is required"
      }
    
    if(!formdata.country)
      {
        err.country="Country field is required"
      }
    
    if(!formdata.state)
      {
        err.state="State field is required"
      }

    if(!formdata.city)
      {
        err.city="City field is required"
      }

    if(!formdata.zip)
      {
        err.zip="please enter ZIP code"
      }
    else if(!/^[A-Za-z0-9\s-]{4,10}$/.test(formdata.zip))  
     {
        err.zip="Invalid ZIP code format";
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
      

  if(!formdata.availiability.trim())
    {
      err.availiability="Fill this field is required"
    }
     
  if(!formdata.skills.trim())
    {
      err.skills="Fill this field is required"
    }
    
  if(!formdata.experience.trim())
    {
      err.experience="Fill this field is required"
    }
    
  
    return err;

  };

  // handlesubmit
  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    
    const validationerror= validate();
    setError(validationerror);
    
    if(Object.keys(validationerror).length === 0)
    {
      try
      {
          const response=await fetch("http://localhost:5000/api/insertvolunteer",{
          headers:{'content-Type' : 'application/json'},
          method:"POST",
          body: JSON.stringify(formdata)
         })
       
         
        if(response.ok)
          {
            alert('Volunteer Request Sent')
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
      
      {/* hero-section */}
      <section className="volunteer-hero">
       <div className=" text-center volunteer">
        {/* <h2 className="fw-bold my-1">Become a Volunteer</h2>
        <p>Join The Guardian Shield and help create a safer world for women</p> */}
      </div>
     </section>


      {/* Volunteer-Card Section */}
      <div className="container mx-auto">
       <section className="volunteer-section">
        <div className="row mb-3 mt-3">
          <VolunteerSection 
             heading="🤝Support Survivors" desc="Provide emotional support and guide women to trusted resources" />
          <VolunteerSection 
             heading="📢 Spread Awareness" desc="Conduct safety awareness programs in schools and communities" />
          <VolunteerSection
             heading="🚨 Emergency Assist" desc="Assist in responding to emergency help requests and helpline support"  />
        </div>
       </section>
      </div>



    {/* volunteer-Opportunities */}
    
    <section>
      <div className="row text-center vol-detail p-3">
        <h2>Volunteer Opportunities</h2>
        <p>Choose how you want to contribute and protect women's safety</p>
        <VolunteerOppo
           img="vol-patrol.png"  heading="🤝Safety Patrols" desc="Monitor areas with active patrol team" btn="🤝On-Ground" />
        <VolunteerOppo 
           img="vol-aware.png"  heading="🎙️ Campaigns" desc="Organize rallies for awareness" btn="🎙️Creative"/>
        <VolunteerOppo 
           img="vol-helpline.png"  heading="📞Helpline Support" desc="Answer calls & guide victims" btn="☎️Remote"/>
        <VolunteerOppo 
           img="vol-traning.png"  heading="🎓Workshops & Training" desc="Teach self-defence in schools" btn="📆Campus"/>
      </div>
    </section>



    

    
    {/* FAQ */}
    <div className="container mx-auto">
    <section className="volunteer-faq py-2  rounded">
     <div className="container my-5 vol-faq">
      <h3 className="text-center mb-4">❓ Frequently Asked Questions</h3>
        <div className="accordion" id="faqAccordion">

      {/* Q1 */}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q1">
          👩‍💼 Who can become a volunteer?
        </button>
      </h2>
      <div id="q1" className="accordion-collapse collapse " data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          Anyone passionate about women's safety can join — no prior experience needed.
        </div>
      </div>
    </div>

    {/* Q2 */}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q2">
          🛡️ Will I receive proper training before volunteering?
        </button>
      </h2>
      <div id="q2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          Yes! We provide self-defense, communication & emergency training.
        </div>
      </div>
    </div>

    {/* Q3 */}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q3">
          ⏰ How much time do I need to commit?
        </button>
      </h2>
      <div id="q3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          Flexible! You can choose hours based on your availability.
        </div>
      </div>
    </div>

    {/* Q4 */}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q4">
          🌍 Can I volunteer from home?
        </button>
      </h2>
      <div id="q4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          Yes, remote roles like helpline support & awareness content are available.
        </div>
      </div>
    </div>

    {/* Q5 */}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q5">
          📜 Will I get a certificate or recognition?
        </button>
      </h2>
      <div id="q5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          Absolutely! You’ll receive a certificate & real experience.
        </div>
      </div>
    </div>

  </div>
</div>
</section>
</div>


   {/* Volunteer Form */}

<div className="container mb-5">
  <div className="card shadow p-4">

    <h4 className="text-center text-danger mb-4 mt-3 fs-2">Volunteer Registration</h4>

    <form onSubmit={handleSubmit}>

      {/* Full Name */}
      <div className="row mb-3">
        <label className="form-label">Full Name</label>

        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="First Name" name="firstname" onChange={handleChange} required/>
          {error.firstname && <small className="text-danger"> {error.firstname} </small>}
        </div>

        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Last Name" name="secname" onChange={handleChange}/>
        </div>
         {error.secname && <small className="text-danger"> {error.secname} </small>}
      </div>


      {/* DOB & GENDER */}
      {/* Gender */}
      <div className="row mb-3">
        <div className="col-md-6 ">
          <label className="form-label mt-3">Gender</label><br/>
             <input type="radio" className="form-check-input"  name="gender" value="female"  onChange={handleChange} required/>
             {error.gender && <small className="text-danger"> {error.gender} </small>}
               <label className="form-check-label ps-2">Female</label>
             <input type="radio" className="form-check-input ms-4"  name="gender" value="Male"  onChange={handleChange}/>
               <label className="form-check-label ps-2">Male</label>
             <input type="radio" className="form-check-input ms-4"   name="gender" value="other" onChange={handleChange}/>
               <label className="form-check-label ps-2">Other</label>
        </div>

        {/* DOB */}
        
        <div className="col-md-6 form-check">
          <label className="form-label mt-3">DOB</label>
             <input type="date" className="form-control"  placeholder="DOB" name="dob"  onChange={handleChange} required/>
        </div>
        {error.dob && <small className="text-danger"> {error.dob} </small>}
        </div>


      {/* Address */}
      <div className="mb-3">
        <label className="form-label mt-3">Address</label>
        <textarea type="text" className="form-control" placeholder="Enter your Permanent Address" name="address" onChange={handleChange} required/>
        {error.address && <small className="text-danger"> {error.address} </small>}
      </div>

    
    {/* country */}
    <div className="row mb-3">
     <div className="col-md-6">
          <label className="form-label mt-3">Country</label>
          <select name="country" onChange={handleCountryChange} className="form-control">
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c.isoCode} value={c.isoCode}>
            {c.name}
          </option>
        ))}
        </select>
        {error.country && <small className="text-danger"> {error.country} </small>}
      </div>
    
      
    {/* state */}
      <div className="col-md-6">
        <label className="form-label mt-3">State</label>
          <select  name="state" onChange={handleStateChange} className="form-control">
            <option value=""> Select State</option>
            {states.map((s) =>
            (<option key={s.isoCode} value={s.isoCode}>{s.name}</option>))}
          </select>
          {error.state && <small className="text-danger"> {error.state} </small>}
        </div>
      </div> 
      
      
    {/* City */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label mt-3">City</label>
          <select  name="city" className="form-control" onChange={handleChange}>
            <option value="">Select City</option>
            {cities.map((c) =>
            (<option key={c.name}>{c.name}</option>))}
          </select>
          {error.city && <small className="text-danger"> {error.city} </small>}
        </div>
       
      
      {/* Zip */}
        <div className="col-md-6">
        <label className="form-label mt-3">Postal / Zip Code</label>
        <input type="text" className="form-control" name="zip" onChange={handleChange}/>
      </div>
      {error.zip && <small className="text-danger"> {error.zip} </small>}
      </div>
     
   
      {/* Email */}

      <div className="mb-3 row">
        <div className="col-md-6">
          <label className="form-label mt-3">Email</label>
          <input type="email" className="form-control" placeholder="example@email.com" name="email" onChange={handleChange} />
          {error.email && <small className="text-danger"> {error.email} </small>}
        </div>

      {/* Phone */}
      <div className="col-md-6 col-12 ">
        <label className="form-label mt-3">Phone Number</label>
               <PhoneInput country={"in"} placeholder="Enter Phone Number" value={formdata.phone} name="phone" onChange={(phone)=>
                setFormData({
                  ...formdata,phone
                })
               } />
               {error.phone && <small className="text-danger"> {error.phone} </small>}
            </div>
     </div>


    {/* General availability */}
    <div className="mb-3 row">
      <div className="col-md-6">
        <label className="form-label mt-3">General Availiability</label>
        <select name="availiability" className="form-control" onChange={handleChange}>
              <option value="">Select Your Availiability</option>
                <option>Morning (6AM - 12PM)</option>
                <option>Afternoon (12PM - 4PM)</option>
                <option>Evening (4PM - 8PM)</option>
                <option>1-2hours per week</option>
                <option>3-5hours per week</option>
                <option>Flexible(Any Time)</option>
              </select>
              {error.availiability && <small className="text-danger"> {error.availiability} </small>}
      </div>
      <div className="col-md-6">
        <label className="form-label mt-3">Skills & Interest</label>
        <select name="skills" className="form-control" onChange={handleChange}>
            <option>Select your interest</option>
            <option>Awareness Campaign Support</option>
            <option>Social Media Management</option>
            <option>Content Writing</option>
            <option>Event Management</option>
            <option>Field Work</option>
            <option>Women Counseling</option>
            <option>Emergency Support</option>
            <option>Technical Support</option>
            <option>Graphic Designing</option>
            <option>Fundraising</option>
            <option>Community Outreach</option>
            <option>Teaching / Training</option>
        </select>
        {error.skills && <small className="text-danger"> {error.skills} </small>}
      </div>
    </div>
     

      {/* Comments */}
      <div className="mb-4">
        <label className="form-label mt-3">Why you want to volunteer?</label>
        <textarea className="form-control" rows="4" name="experience"  onChange={handleChange}></textarea>
        {error.experience && <small className="text-danger"> {error.experience} </small>}
      </div>

      {/* Submit */}
      <div className="text-center">
        <button type="submit" className="btn btn-success px-4">Submit Form</button>
      </div>

    </form>

  </div>
</div>

{/* training & Benefits */}
<section>
  <div className="container mb-2">
      <div className="row text-center mt-3 py-3 vol-train">
        <h2>Training & Benefits</h2>
        <p>We prepare every volunteer to lead with confidence</p>
        <VolunteerBenefits  heading="🛡️Free Self-Defense Training" />
        <VolunteerBenefits  heading="📑Certificate of Volunteering" />
        <VolunteerBenefits  heading="⭐Real-Life Experience" />
        <VolunteerBenefits  heading="🧑🏻‍💻Skills Development" />
        <VolunteerBenefits  heading="🌍Community Leadership" />
        <VolunteerBenefits  heading="🧠Mental Health Awareness" />
      </div>
      </div>
    </section>
        
        
        </>
    )
}