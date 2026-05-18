import { Link } from "react-router-dom";

export default function Charity(){
    return(
    <>
      <div>
      
        {/* Hero Section */}
        <section className="hero1">
          <h1>Together We Can Make a Difference</h1>
          <p>Join Us in Supporting women's safety initiatives and empowerment programs.</p>
          <Link to="/donate" className="btn btn-primary p-3 ps-3 pe-3 fw-bold"> 💸Donate Now</Link>
          <Link to="/volunteer"><button className="btn  btn-success p-3 ps-3 pe-3 fw-bold">💁‍♀️Volunteer</button></Link>
        </section>

        {/* Who We ARE */}
        <div className="container">
        <section className="charity-about" id="charity-about">
               <div className="row py-1 my-3 ">
                  <div className="col-lg-6 col-12 text-center py-4 charity-text position-relative">
                  <h1>👩‍💻Who We Are</h1>
                  <p>Guardian Shield is a dedicated women safety and support platform committed to empowering women with     security, awareness, and immediate assistance. <br/><br/>
                     Our mission is to create a safe digital space where women can access emergency help, share real-time stories,
                     learn safety guidelines, and connect with trusted resources.<br/><br/>
                     We are committed to building a world where every woman feels confident, protected, and fearless.
                  </p>
                    
                  </div>
                  <div className="col-lg-6 col-12 p-3 py-1 charity-img">
                      <img src="../images/support.png" className="object-fit-cover rounded" height="380px" width="100%" />
                  </div>
               </div>
            </section>
            </div>


             {/* About */}
            <div className="container">
             <section className="charity-about" id="charity-about">
               <div className="row py-1 my-3 ">
                  
                  <div className="col-lg-6 col-12 p-3 py-1 charity-img">
                      <img src="../images/charity-about.png" className="object-fit-cover rounded" height="380px" width="100%" />
                  </div>

                  <div className="col-lg-6 col-12 text-center py-4 charity-text  position-relative mt-4">
                  <h1>💓About Us</h1>
                  <p className="mt-3">We are dedicated to empowering women through safety, resources and education ensuring they have the support they need to stay safe and confident. Because every voice matters and every life deserves respect.
                  </p>
                  <h4 className="fw-bold charity-tag mt-4">"Safe. Strong. Fearless" </h4>  
                  <div className="charity-btn">
                     <Link to="/about" className="btn btn-primary rounded   p-2 my-3">Learn More</Link>
                  </div>
                </div>

               </div>
            </section>
            </div>



        {/* Causes / Mission */}
        <div className="container-fluid px-0"> 
        <section className="causes">    
        <h1 className="text-center mb-3 fw-bold">Our Mission</h1>

      {/* Row */}
      <div className="row p-2 charity-causes mx-0">

        {/* Card 1 */}
        <div className="col-md-4 col-12  col-lg-4">
          <div className="card text-center py-2 charity-causes1">
            <h3 className="fw-bold">🛡️Women Safety</h3>
            <p>Real-time SOS alerts and location tracking to ensure immediate help.</p>
            <img src="../images/charity-causes1.png"  height="243px" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 col-12 col-lg-4">
          <div className="card text-center py-2 charity-causes2">
            <h3 className="fw-bold">🏃‍➡️Self Defense</h3>
            <p> Practical training programs to build confidence and protect yourself. </p>
            <img src="../images/charity-causes2.png" height="243px" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 col-12 col-lg-4">
          <div className="card text-center py-2 charity-causes3">
            <h3 className="fw-bold">🎧Support System</h3>
            <p>Connecting women with guidance and a trusted support network.</p>
            <img src="../images/charity-causes3.png"  height="243px" />

          </div>
        </div>
      </div>
                     
      </section>
      </div>
    
    <br/>
        {/* Contact */}
        <div className="container">
          <section className=" py-3">
            <div className="row justify-content-center charity-det">
              <div className="col-lg-6 col-md-6 text-center charity-detail py-3">
                 <h2>Need Help or Want to Support?</h2>
                 <p>Have questions or need help? We’re here to support you.
                    Reach out to us anytime and we’ll respond as soon as possible.
                  </p>
                <Link to="/contact" className="btn btn-danger  p-2">Contact Us</Link>
                <img src="../images/charity-contact.png"  width="100%" height="270px" /> 
            </div>  

            </div>
          </section>
        </div>
        

      </div>
    </>
    )
}