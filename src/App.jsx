import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';


import Home from './pages/Home';
import Charity from './pages/Charity';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import About from './pages/About';
import Emergency from './pages/Emergency';
import Support from './pages/Support';
import Volunteer from './pages/Volunteer';
import Login from './pages/Login';
import AuthProvider from './pages/AuthProvider';
import UserLogin from './pages/UserLogin';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import Feedback from './admin/Feedback';
import AddBlog from './admin/AddBlog';
import Donate from './pages/Donate';
import ViewBlog from './admin/ViewBlog';
import Blog from './pages/Blog';
import Blogdetails from './pages/Blogdetails';
import FAQ from './pages/FAQ';
import SupportContact from './admin/SupportContact';
import VolunteerForm from './admin/VolunteerForm';
import Payment from './pages/Payment';
import PaymentType from './pages/PaymentType';
import ViewUserLogin from './admin/ViewUserLogin';
import MyProfile from './pages/MyProfile';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import SOSHistory from './admin/SOSHistory';
import Donation from './admin/Donation';
import Jobs from './pages/Jobs';
import JobApply from './admin/JobApply';
import Orphanage from './pages/Orphanage';

// main file started
export default function App() 
{
  return (
    <>
       <BrowserRouter>
       <AuthProvider>
       <Routes>
       <Route path="/userlogin" element={<UserLogin/>} />
       <Route path="/privacy" element={<Privacy/>} />
       <Route path="/terms" element={<Terms/>} />

            {/* Protected route*/}
            <Route path="/" element=
             {
                 <ProtectedRoute>
                    <Layout />
                 </ProtectedRoute>
             }
            >
                    

            {/* Public Route  */}
            <Route index element={<Home />} />
            <Route path="/charity" element={<Charity />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/login" element={<Login />} />   
            <Route path="/donate" element={<Donate/>} /> 
            <Route path="/blog" element={<Blog/>} /> 
            <Route path="/blogdetails/:id" element={<Blogdetails/>} /> 
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/myprofile" element={<MyProfile/>} />
            <Route path="/paymenttype" element={<PaymentType/>} />
            <Route path="/orphanage" element={<Orphanage/>} />
            
            </Route>

           
            {/* Admin Route */}
            <Route path="" element={<AdminLayout/>}>
            <Route index element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/addblog" element={<AddBlog />} />
            <Route path="/viewblog" element={<ViewBlog />} />
            <Route path="/supportcontact" element={<SupportContact/>} />
            <Route path="/volunteerform" element={<VolunteerForm/>} />
            <Route path="/viewusers" element={<ViewUserLogin />} />
            <Route path="/soshistory" element={<SOSHistory />} />
            <Route path="/donation" element={<Donation/>} />
            <Route path="/job" element={<JobApply/>} />
            </Route>

      
       </Routes>
       </AuthProvider>
       </BrowserRouter>
    </>
        )
      }
