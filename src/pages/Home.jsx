import { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

// intro part 
function Introduction(Props)
{
   return(
      <>
      <div className='d-flex p-2'>
         <div className='icons'>
            <i className={Props.icon}></i>
            <p>{Props.heading}</p>
         </div>
      </div>  
      </>
   )
}
// intro part ended




// stepwise work part started

function Stepwise(Props){
   return(
      <>  
         <div className='col-lg-4 col-12 col-md-6'>
             <div className='card step-detail '>
                 <div className='text mb-2'>{Props.btnText}</div>
                 <img src={`/images/${Props.img}`}  />
                 < hr/>
                 <h4 className='mt-1'>{Props.heading}</h4>
                 <p>{Props.desp}</p>
             </div>
         </div> 
      </>
   )
}
//  stepwise work part ended


// real stories started
function Realstory(Props){
  return(
    <>
             <div className='mx-auto'>
              <div className='card story-card text-center my-5 '>
                 <img src={`/images/${Props.img}`} className='story-img '/>
                    <p>{Props.desc}</p>
                    <h3>{Props.name}</h3>
                    
              </div>
              </div>
    </>
  )
}

// main file started
export default function Home() {

  return (
    <>
        {/* main div container started */}
       

            

            
         


        {/* hero section start */}
        {/* hero section start */}
          <div className='container-fluid'>
          <section className='hero'>
          
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  
  
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
       <h1></h1>
      <img src="../images/hero-1.jpeg" class="d-block w-100" height="500px" />
    </div>
    <div class="carousel-item">
      <img src="../images/hero-2.jpeg" class="d-block w-100"  height="500px"/>
    </div>
    <div class="carousel-item">
      <img src="../images/hero-3.jpeg" class="d-block w-100"  height="500px"/>
    </div>
    <div class="carousel-item">
      <img src="../images/hero-4.jpeg" class="d-block w-100"  height="500px"/>
    </div>
   
   
  </div>
  
</div>
          </section>
          </div>
          {/* hero section ended */}
        {/* hero section ended */}

      
      {/* introduction part started */}
      <div className='container mt-3 '>
          
             <section className='intro  col-sm'>
               <div className='intro-head'>
                  <button className='btn btn-primary'>Introducing Safety</button>
                  <h1>What's a Safety Circle?</h1>
                  <p className='mt-3'>A Safety Circle is a trusted network where women can instantly share live 
                     location, send SOS alerts, and stay connected with guardians in real-time. 
                     It ensures help reaches you quickly whenever you feel unsafe.</p>

                   <div className='row ms-4 p-2 intro-icons'>
                     <div className='col-lg-6'>
                   <Introduction 
                        icon="fa-solid fa-user-shield"
                        heading="Trusted Contacts only (Family & Guardians)" />

                   <Introduction
                         icon="fa-solid fa-triangle-exclamation "
                         heading="One-tap SOS emergency alert" />
                   <Introduction 
                         icon="fa-solid fa-location-dot"
                         heading="Live location tracking in real time" />
                   <Introduction
                         icon="fa-solid fa-shield-heart"
                         heading="Safe Check-In – notify, I reached safely" /> 
                   <Introduction 
                         icon="fa-solid fa-radiation"
                         heading="Danger zone alerts & quick help request" />
                   <Introduction
                         icon="fa-solid fa-phone-volume"
                         heading="Emergency helpline & nearby support" /> 
                   </div>
                   <div className='intro-img col-lg-6'>
                       <img src="./images/intro-img.jpg" width="100%" />
                  </div> 
                   </div> 
               </div>
 
                  
             </section> 
      </div>
      {/* introduction ended */}


      {/*  stepwise started */}
      <div className='container mt-3 '>
         <section  className='step-part'>
            <div className='step-text'>
                <h2>How It Works</h2>
                <div className='row mt-1'>
                   <Stepwise 
                  btnText="Step 01" 
                  img ="circle.jpeg"width="100%" height='100%' 
                  heading="Create a Safety Circle"
                  desp="Add trusted contacts"
                   />

               <Stepwise
                btnText="Step 02" 
                img ="live-location.jpeg" 
                
                heading="Share Live Location"
                desp="Guardian track you "/>

               <Stepwise
                btnText="Step 03" 
                img ="Sos.webp" 
                heading="Send SOS/ Get Help"
                desp="One tap emergency alert"/>
            </div>   
         </div>
         </section>
      </div>
      {/*  worked stepwise ended*/}


       {/* Emergency started */}
       <section className='emergency m-5'>
           <div className='row'>
            <div className='emergency-text d-flex  justify-content-between'>
              <h2>Emergency Assistance</h2>
              <hr/>
            </div>
            <div className="contact-map py-4 mt-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13792.565778192411!2d74.93471095541992!3d30.204510199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917329141d2fbf7%3A0x2d2eac6c368e2068!2sEk%20Noor%20Welfare%20Society!5e0!3m2!1sen!2sin!4v1772112127513!5m2!1sen!2sin" width="100%" height="300px"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
           </div>
           
        </section>
        {/* emergency ended */}

        {/* safety companion started */}
        <div className="container my-5 text-center">

<h2 className="mb-4 fw-bold">
  Your <span className="text-danger fs-2">Safety</span> Companion
</h2>

<div className="row g-3">

  <div className="col-md-4">
    <div className="card1  shadow p-4">
      <h4 className='mt-1'>🚨 Emergency Alerts</h4>
      <p>Send instant alerts to your contacts in danger.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card1 p-4 shadow ">
      <h4 className='mt-1'>🛡️ Self Protection</h4>
      <p>Learn safety techniques to protect yourself.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card1 p-4 shadow ">
      <h4 className='mt-1'>📍 Live Location</h4>
      <p>Share your location with trusted people.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card1 p-4 shadow ">
      <h4 className='mt-1'>🤝 Community Support</h4>
      <p>Get help and support from a safe community.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card1 p-4 shadow ">
      <h4 className='mt-1'>⚖️ Legal Help</h4>
      <p>Access guidance for legal safety and rights.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card1 p-4 shadow ">
      <h4 className='mt-1'>💡 Safety Tips</h4>
      <p>Stay informed with useful daily safety tips.</p>
    </div>
  </div>

</div>
</div>


      {/* real stories started */}
      <div className='container'>
          
          <section className='story my-4 p-5'>
          <div className='row'>
              <div className='story-text text-center my-0'>
                   <h2>Real stories from Women.<br/> Real peace of mind.</h2>
                   <p>Women Share their experiences of feeling secure and supported with our safety app.</p>
               </div>
               </div>
              <div className='row '>
              <Swiper
                 
                 modules={[Navigation, Pagination, Scrollbar,Autoplay]}
                  spaceBetween={10}
                  breakpoints=
                  {
                    
                    {
                         0:{slidesPerView: 1},
                         768:{slidesPerView: 2},
                         1024:{slidesPerView: 3}
                    }
                }
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
              >
              <SwiperSlide><Realstory img="face1.jpeg"
              desc="“I was returning home late after coaching. 
              I felt uneasy, so I used the SOS feature. Within minutes, my brother got my location and stayed on call till I reached home.
               I felt safe the whole time.” ❤️
–" name="Anjali"  /></SwiperSlide>
              <SwiperSlide><Realstory img="face2.jpeg"desc="“Traveling alone used to scare me. Yesterday, I shared my live location with my parents through the app, and it gave all of us peace of mind.”"name="Riya"/></SwiperSlide>
              <SwiperSlide><Realstory  img="face3.jpeg"desc="“
              “This app is truly multi-purpose.
The emergency alert feature makes me feel safe at all times.
I also love that I can support shelters through donations.”.”"name="Aditi"/></SwiperSlide>
              <SwiperSlide><Realstory img="face4.jpeg"desc="“I used the emergency alert feature once, and it really helped me feel supported in a stressful moment.” 🚨"name="Jasmine"/></SwiperSlide>
               <SwiperSlide><Realstory  img="face5.jpeg"desc="“I was traveling alone and suddenly felt like someone was following me.
I got really scared and didn’t know what to do.
Then I used the fake call feature, and it instantly made me feel safer.” 💛"name="Simran"/></SwiperSlide> 
              
              

            </Swiper>
              </div>
          </section>
      </div>
      {/* real stories ended */}




        {/* service started */}
        <div className='container mt-3'>
          <section className='service-section'>
             <h1>Services</h1>  
             <div className='row service'>
                <div className="col-lg-3 card e-icon">
                     <div className="icon-circle">🚑</div>
                      <hr />
                      <Link to="emergency" className='text-decoration-none'><p>Emergency Help</p></Link>
                </div>

             <div className="col-lg-3 card e-icon">
               <div className="icon-circle">❤️</div>
               <hr/>
               <Link to="donate" className='text-decoration-none'><p>Donate Support</p></Link>
             </div>
         
            <div className='col-lg-3 card e-icon'>
               <div className="icon-circle">💼</div>
               <hr/>
               <Link to="jobs" className='text-decoration-none'><p> Jobs & Skills</p></Link>
            </div>

            <div className='col-lg-3 card e-icon'>
               <div className="icon-circle">📞</div>
               <hr/>
               <Link to="contact" className='text-decoration-none'><p>Help Center</p></Link>
            </div>
         
        </div>
        </section>
        </div>
        {/* service ended */}
       
        {/*support started  */}
        <div className='container-fluid '>
      <section className="support">
           <h2>Support Women in Need</h2>
           <div className="support-cards p-2">
              <Link to="donate" className='text-decoration-none'><div className="card">🥗 Donate Food</div></Link>
             
              <Link to="donate" className='text-decoration-none'><div className="card">👕 Donate Clothes</div> </Link>
              <Link to="donate" className='text-decoration-none'><div className="card">🛍 Donate Essentials</div> </Link>
           </div>
      </section>
      </div>
        {/* support ended */}

        {/* Stats started*/}
        
        <section className="stats p-5">
           <div className='row text-center stats-text'>
              <div className='col-lg-4 col-md-4 col-12'>  
                <h2>50+</h2>
                <h6>Women Helped</h6>
              </div>
              
              <div className='col-lg-4 col-md-4 col-12'>  
                <h2>40+</h2>
                <h6>Emergency Rescues</h6>
              </div>
        
              <div className='col-lg-4 col-md-4 col-12'>
               <h2>20+</h2>
               <h6>Volunteers</h6>
              </div>
           </div>
         </section>
      {/* states ended */}


     

    
    
    </>
  )
}