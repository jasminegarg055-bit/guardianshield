import { Link } from "react-router-dom";
export default function Help()
{
    return(
        <>
            {/* Donate-Hero */}
            <div className="donate-hero">
              {/* image-donation */}
            </div>

{/*......................................................................................................... Contact */}
        
        
          <section className=" py-3">
            <div className="row justify-content-center charity-det">
              <div className="col-lg-6 col-md-6 text-center charity-detail py-3">
                 <h2>Need Help or Want to Support?</h2>
                 <p>Have questions or need help? We’re here to support you.
                    Reach out to us anytime and we’ll respond as soon as possible.
                  </p>
                <Link to="/payment" className="btn btn-success  p-2">Donate Us</Link>
                 <Link to="/contact" className="btn btn-danger p-2">Contact Us</Link>
                <img src="../images/charity-contact.png"  width="100%" height="270px" /> 
            </div>  

            </div>
          </section>
    
        {/* .......................................................................................................... */}
            {/* Donor-Show  */}
            <div className="donor my-3">
             <div className="row">
                {/* left-side */}
                <div className="col-lg-6 col-md-6 col-12 pt-5 donor-text">
                    <h5 className=" mt-2 ps-5">Turning Kindness in Action</h5>
                    <h1 className="ps-4 pt-2">INDIA'S Trusted Women <br/>Safety Platforms</h1>
                    <h5 className="ps-5 pt-3">Empower women, ensure safety and stand against violence.<br/> Your donation helps provide emergency support, awareness programs and protection services</h5>
                </div>
                
                {/* right-side */}
                <div className="col-lg-5 col-md-5 col-12 pt-5 donor-text-right d-flex ">
                    <div className="donor-box">
                        <h4>50+</h4>
                        <p>women Helped</p>
                    </div>
                    <div className="donor-box">
                        <h4>20+</h4>
                        <p>Volunteers</p>
                    </div>
                    <div className="donor-box">
                        <h4>40+</h4>
                        <p>Rescue</p>
                    </div>

                </div>
             </div>
            </div>


            {/* Why */}
        </>
    )
}