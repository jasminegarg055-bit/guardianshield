import { useState } from "react"
import { Link } from "react-router-dom"

export default function Contact()
{
      const [formdata, setformdata]=useState({
        name:"",
        email:"",
        message:""
      })

      const handlechange=async (e)=>{
         const {name, value}=e.target
         setformdata({
            ...formdata,
            [name]:value
         })
      }

      const handlesubmit=async (e)=>
      {
         e.preventDefault()
         console.log(formdata)
         const formdatanew=JSON.stringify(formdata)
         try{

            const response=await fetch("http://localhost:5000/api/insertcontact",{
                headers:{'content-Type' : 'application/json'},
                method:"POST",
                body:formdatanew
            })
            if(response.ok)
                {
                    alert('Message Sent')
    
                }
                else{
                    alert('Error in Sending')
                }
            }
                catch(error)
                {
                    console.log(error)
                    alert("error")
                }
                
             }
    return(
        <>
          <div className="main-body">
            
            {/* contact-hero-section */}
            <section className="section-hero">
                <div className="container-fluid">
                    <div className="row text-center">
                      <h1>You Are Not Alone</h1>
                      <p>Reach out to us. We are here to listen, support and Protect.</p>
                    </div> 
                </div>
            </section>
            {/* contact-hero-section-end */}

            {/* contact-detail-start */}
            <section className="contact-section mt-3 ">
               <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-lg-12 col-md-6 col-12 text-center mt-5 contact-text">
                            <h1>Contact Us</h1>
                        </div> 
                    </div>
                </div>

                <div className="container offset-2 mx-auto">
                    <form id='contactform' onSubmit={handlesubmit}>
                    <div className="row ">
                        <div className="col-lg-6 ">
                            {/* left-side-form */}
                            <div className="card p-5 shadow border-1 rounded-4">
                                <div className="mb-3">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Full Name" className="form-control" required 
                                      name="name" value={formdata.name} onChange={handlechange} />
                                </div>

                                <div className="mb-3">
                                    <label>E-Mail</label>
                                    <input type="text" placeholder="Email" className="form-control" required 
                                      name="email" value={formdata.email} onChange={handlechange}/>
                                </div>

                                <div className="mb-3">
                                    <label>Message (optional)</label>
                                    <textarea type="text" placeholder="Message" className="form-control" rows="3"
                                      name="message" value={formdata.message} onChange={handlechange} />
                                </div>

                                {/* <div className="checkbox">
                                    <input type="checkbox" />
                                    <p>This is an emergency</p>
                                  </div> */}

                                <button type="submit" className="btn btn-primary rounded-pill px-3"> Send Message </button>
                            </div>
                        </div>
                        {/* left-form-section-end */}


                        {/* form-right-section-start */}
                            <div className="col-lg-6">
                                <div className="card p-4 shadow border-1 rounded-4 text-center">
                                      <h3 className="mb-2">📍 Contact Information</h3>
                                      <p>Ajit Road street No.18, <br/> Bathinda, Punjab</p>
                                      <hr />

                                      <h4 className="text-danger fw-bold mt-3"><i class="fa-solid fa-phone-volume"></i> <span className="fs-4" >24/7 Emergency Helpline</span></h4>
                                      <p>+91 79863-17783 , +91 85679-87695</p>
                                      <hr />

                                      <h5><i classname="fa-solid fa-alarm-clock"></i>Theshield@gmail.com </h5>
                                      <hr/>

                                      <h4 className="fw-bold mt-3"><i classname="fa-solid fa-envelope"></i> Working Hours:</h4>
                                      <p>Monday-Sunday: Open 24 Hours</p>

                                     {/* social-app-link-start */}
                                  <div className="contact-social mx-4">
                                    <button onClick={()=>
                                         window.open("https://www.facebook.com/", "_blank")}
                                         className="contact-social-f">
                                         <i className="fa-brands fa-facebook"></i> 
                                    </button>

                                    <button onClick={()=>
                                        window.open("https://www.instagram.com/", "_blank")}
                                        className="contact-social-i">
                                        <i class="fa-brands fa-square-instagram"></i> 
                                    </button>

                                    <button onClick={()=>
                                        window.open("https://x.com/?lang=en-in/", "_blank")}
                                        className="contact-social-t">
                                        <i class="fa-brands fa-x-twitter"></i>
                                    </button>

                                    <button onClick={()=>
                                        window.open("https://www.youtube.com/", "_blank")}
                                        className="contact-social-y">
                                        <i class="fa-brands fa-youtube"></i>
                                    </button> 
                               </div> 
                            </div>
                            {/* right-section-end */}
                        </div>

                        {/* Map tracking  */}
                        <div className="contact-map p-4">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13792.565778192411!2d74.93471095541992!3d30.204510199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917329141d2fbf7%3A0x2d2eac6c368e2068!2sEk%20Noor%20Welfare%20Society!5e0!3m2!1sen!2sin!4v1772112127513!5m2!1sen!2sin" width="100%" height="300px"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        
                    </div> 
                    </form>  
                </div>
            
            </section>
           {/* contact-section-end */}

           {/* immediate danger button-start */}
            <div className="row">
                 <div className="col-lg-12 col-12 col-md-6 p-3 text-center">
                      <h5>In Immediate Danger? Send Us an Emergency Alert</h5>
                      {/* <Link to="/sos"><button className="btn btn-danger px-5 py-2 rounded-pill">Send Emergency Alert</button></Link> */}
                 </div>
            </div>
           {/* immediate danger button-end */}

        </div>
        {/* main div ended */}
        </>
    )
}