function Protect(Props)
{
    return(
        <>
            <div className="col-lg-3 col-md-6 ">
                <div className="card about-protect  w-100 text-center mx-auto ">
                   <h1>{Props.icon}</h1><hr className="mt-0"/>
                   <h4 className="mt-0">{Props.heading}</h4>
                   <p>{Props.desc}</p>

                </div>
                  
             </div>
        </>
    )
}

export default function About()
{
    return(
        <>
            
             {/*--------------- hero-section start--------------- */}

            <section>
               <div className="container-fluid">
                  <div className="row">
                      <div className="col-lg-12 col-md-6 col-12 about-detail mb-3 text-center">
                        <h1>Safety Should Never Be a Question.</h1>
                        <p>The Guardian Shield is built to protect, support, and <br/>empower     every woman — anytime, anywhere.
                        </p>
                      </div>
                  </div>
               </div>
            </section>

            {/* ---------------hero-section-end-------------- */}

         <div className="container about-page">
            {/* ---------------OUR-MISSION-STARTED-------------- */}

            <section className="mission-part p-5 position-relative" id="mission ">
               <div className="row">
                  <div className="col-lg-6 col-12">
                      <img src="../images/mission.jpeg" height="300px" width="100%" />
                  </div>
                  <div className="col-lg-6 col-12 text-center mission-text">
                    <h2>OUR MISSION</h2>
                    <p> We provide real-time emergency tools, trusted contact alerts,and location   tracking to ensure immediate support during critical moments. </p>
                    <h6>Safety is not a privilege — it is a right.</h6>
                  </div>
               </div>
            </section>

            {/* ---------------OUR-MISSION-ENDED---------------- */}

            {/* ---------------OUR-VISION-STARTED--------------- */}

            <section className="vision-part p-5" id="vision">
               <div className="row">
                  <div className="col-lg-6 col-12 text-left mission-text">
                    <h2>OUR VISION</h2>
                    <p>  We envision a society where women can walk freely
                    without fear at home, at work, or in public spaces.</p>
                    <p> A future where technology acts as a protective shield,
                    communities stand together, and no woman ever feels alone in danger.</p>
                    
                  </div>
                  <div className="col-lg-6 col-12 vision-img">
                      <img src="../images/vision.jpeg" height="300px" width="100%" />
                  </div>
               </div>
            </section>

            {/* ---------------OUR-VISION-ENDED----------------- */}

            {/* -----------------HOW-WE-PROTECT----------------- */}

            <section id="why">
                
                    <div className="protect-detail text-center my-4 py-4">
                        <h2>How We Protect</h2>
                        <p> Rising cases of harassment and unsafe situations made one thing clear-<br />Women need immediate, accessible protection.</p>
                
                     <div className="row   justify-content-center p-2 m-2">
                        <Protect icon="🚨" heading= "Instant SOS Alert"  desc="Send emergency alerts to trusted contacts one tap." /> 
                       <Protect   icon="📍" heading="Live Location Tracking"  desc="Share real-time location." />
                       <Protect  icon="👨‍👩‍👧‍👦" heading="Trusted Safety Circle"  desc="Connect with trusted people." />
                       <Protect  icon="🦺" heading="24/7 Support"  desc=" Immediate helplines and assistance." />
                        
                     </div>
                    </div>
                
            </section>
        {/* -----------------HOW-WE-PROTECT-ENDED---------------- */}
        </div>
        
        
        {/* -----------------COMMITMENT-STARTED------------------ */}

            
             <section className="commit-detail" id="meet">
                  <div className="row text-center p-4">
                     <h2>Our Commitment</h2>
                     <p>We are committed to building a secure digital platform
                     that prioritizes privacy and immediate response.</p>
                  </div>
             </section>
             

        {/* -----------------COMMITMENT-ENDED------------------ */}  


        {/* -----------------MEET-THE-CREATOR------------------ */}
        <div className="container">
          <section className=" creator-story">
           <div className="row text-center creator-detail m-3 pt-3">
               <h2>Our Story & Meet the Creator</h2>
               <p>The Guardian Shield was created with one simple belief. Every woman deserves to feel safe, confident, and protected.</p>
               <p>As we witnessed the growing concerns around women’s safety in daily life. Whether traveling alone, working late, or walking home. It became clear that immediate and accessible support was essential. This project was born from that concern and a strong desire to create meaningful change.</p>
               <p>As the creator of this platform, I wanted to build more than just a website. I wanted to design a digital shield. A system that ofers instant SOS alerts, live location sharing, and trusted support when it matters most.The Guardian Shield is not just a project; it is a commitment to empowering women with technology, awareness, and strength.</p>
               <h5>"Safety is not optional. It's a right and no woman should ever feel alone in fear."</h5>
           </div>
          </section>
        </div>
        </>
    )
}