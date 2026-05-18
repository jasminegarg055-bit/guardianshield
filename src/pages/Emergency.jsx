import { Link } from "react-router-dom";
import React,{useState, useRef, useEffect} from "react";
import {SOS} from "../utils/Sos";

function CallNumber()
{
        const confirmcall = window.confirm("Do you want to call this number?");
        if(confirmcall)
        {
            window.location.href="tel:9872425592";
        }
}

function CallWSNumber()
{
        const confirmcall = window.confirm("Do you want to call this number?");
        if(confirmcall)
        {
            window.location.href="https://wa.me/918567987695?text=I%20need%20help";
        }
}

// function NearbyHelp(){

 
// }

function Number(Props)
{
  return(
    <>
           <div className="col-lg-4">
            <div className="  text-center emer-detail my-3 mx-auto">
                <h5>{Props.heading}</h5>
                <h3>{Props.num}</h3>
                <p>{Props.desc}</p>
                <div className="d-flex">
                  <button className="btn btn-danger call-btn"  onClick={(CallNumber)}> <img src="../public/images/telephone.png"></img>  Call Now</button>
                  <button className="btn btn-success call-btn"  onClick={(CallWSNumber)}>  💬Message</button>
                </div>
              </div>
          </div>
    </>
  )
}

export default function Emergency(){
  
 //for MAP TRACKING 
  const [mapUrl,setMapUrl] = useState("");

  const ShowHelpCenter = ()=>{
    navigator.geolocation.getCurrentPosition((pos)=>{
      const lat= pos.coords.latitude;
      const lon= pos.coords.longitude;

      const url = `https://www.google.com/maps?q=police+station+near+me=${lat},${lon}&z=14&output=embed`;

      setMapUrl(url);
    });
};

//  FOR GENERATE FAKE CALL

const [fakeCall, setFakeCall] = useState(false);
const [callStart, setCallStart] = useState(false);
const [callConnect, setcallConnect] = useState(false);
const [seconds, setSeconds] = useState(0);
const audioRef = useRef(null);

//fake call
const generatefakecall = ()=>
{
  setTimeout(()=>
  {
    setFakeCall(true);
    if(audioRef.current)
    {
      audioRef.current.play();
    }
  },1000);
}

 useEffect(()=>{

  let timer;
  
  if(callConnect){
  timer = setInterval(()=>{
  setSeconds(prev => prev + 1);
  },1000);
  }
  
  return ()=> clearInterval(timer);
  
  },[callConnect]);

//Accept call
const acceptCall = ()=>
{
  setCallStart(true);
  setcallConnect(true);
  setSeconds(0);
  if(audioRef.current)
  {
    audioRef.current.pause();
  }
}

//End Call
const endCall = ()=>
{
  setFakeCall(false);
  setCallStart(false);
  setcallConnect(false);
  setSeconds(0);
  if(audioRef.current)
  {
    audioRef.current.pause();
    audioRef.current.currentTime=0;
  }
}

    return(
    <>
    
      <div className="container-fluid px-0">

        {/* Heading */}
        <section className="emer-heading px-0">
          <div className="row">
            <h3 className="text-center   py-5 ">🚨 Emergency Help Center</h3>
          </div>  
        </section>
        
        
        {/* Emergency Numbers */}
        <div className="row" >

          <Number heading="👮‍♂️Police" num="100" desc="Immediate Police Assistance"  />
          <Number heading="🚒Fire Brigade" num="101" desc="Immediate Fire & Rescue Support"   />
          <Number heading="🚑Ambulance" num="102" desc="Medical Emergency Service"   />
          <Number heading="🙍‍♀️Women Helpline" num="1091" desc="Support for Women Safety Issues"   />
          <Number heading="🤝Domestic Violence Helpline" num="181" desc="Help for Women Facing Violence"   />
          <Number heading="👶Child Helpline" num="1098" desc="Support For Children in Danger"   />
          
        </div>


      
        {/* SOS and Emergency Contact */}
        {/* SOS Button */}
        <section className="sos-emergency my-3">
          {/* <div className="row">
            <div className="text-center back mt-5">
              <Link to="/Sos"> <button className="btn btn-danger emer-sos ">🚨 SEND SOS ALERT</button>
              </Link>
            </div>
          </div> */}

        {/* Safety Tips */}
        <div className="container-fluid my-4">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-12 col-md-6 mt-3 card safe-card py-3">
              <h3 className="mb-3">🛡️ Safety Tips</h3><hr className="mt-0"/>
              <div className="safe-tip">
                <p>💟Share your live location with trusted contacts.</p>
                <p>💟Avoid isolated places at night.</p>
                <p>💟Keep emergency numbers saved on speed dial.</p>
                <p>💟Keep your phone charged.</p>
                <p>💟Avoid wearing headphones at high volume.</p>
               
              </div>
            </div>

            {/* nearby help centers */}
            <div className="col-lg-5 col-12 col-md-6 card py-3 safe-card mt-3 ms-3">
                <h3 className="mb-3">🔍 Nearby Help centers</h3><hr className="mt-0"/>
                <div className="safe-btn">
                  <button className="btn btn-primary mb-3" onClick={ShowHelpCenter}>Find Nearby Help</button>
                </div>
                
                {mapUrl && (
                  <iframe title="Nearby Help Center" width="100%" height="190px" style={{borderRadius:"12px",border:"10"}}
                  src={mapUrl} loading="lazy" />
                )}
            </div>
            </div>

            {/* GENERATE FAKE CALL */}
            <div className="row justify-content-center">
              <div className="col-lg-5 col-12 col-md-6 card py-3 safe-card mt-3 ">
                 <h3 className="mb-3"><i className="fa-solid fa-phone-volume fake-clr" />  Generate Fake Call</h3><hr className="mt-0"/>
                 <p className="ps-0">Get a fake call if you feel unsafe</p>
                 <button className="btn btn-danger fake-call-btn rounded-pill p-2"  onClick={(generatefakecall)}> <img src="../public/images/telephone.png"></img>Generate Fake Call</button>
              </div>

              {fakeCall &&(
                <div className={`fake-call-screen ${!callStart ? "vibrate" : ""}`}>
                  
                   <h1>Mom </h1>
                  <img src="../images/telephone-img.jpg" className="caller-name " height="120px" width="120px" />  

                  {!callStart &&(
                      <h4>📞 Incoming Call</h4>
                  )}        
                

                  {!callStart &&(
                    <div className="call-buttons">
                      <button className="accept" onClick={acceptCall}>Accept</button>
                      <button className="reject" onClick={endCall}>Decline</button>
                    </div>
                  )}

                  {callConnect && (
                    <div className="call-buttons">
                  <h3>
                      {Math.floor(seconds/60)}:
                      {seconds % 60 <10 ? "0" : ""}
                      {seconds % 60}
                  </h3>
                  </div>
                   )}


                  {callStart &&(
                    <div className="call-buttons mb-5">
                      <div className="end-call justify-content-center ">
                         <h5>Call Connected</h5>
                         <button className="reject ms-4" onClick={endCall}>End Call</button>
                      </div>
                    </div>
                  )}
                  
                 
                   
             </div> 
              )}

            </div>
            <audio ref={audioRef}  src="../sounds/ringtone1.mp3" ></audio>
         
        </div>
       </section>

      </div>

    </>
    )
}