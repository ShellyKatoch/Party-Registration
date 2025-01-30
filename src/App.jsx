import { useEffect, useState } from 'react'
import React from "react";
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import Layout from './components/Layout.jsx';
import RegistrationPage from "./components/RegistrationPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import ContactPage from "./pages/Contact.jsx";
import Login from "./components/Login.jsx";
import MemberDashboard from "./pages/MemberDashboard.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import axios from 'axios';
import Cards from "./components/Cards.jsx"
import AddCourses from './components/AddCourses.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AuthGaurd from './components/AuthGaurd.jsx';
function App() {

  const location = useLocation()

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      }
      script.onerror = () => {
        resolve(false);
      }
      document.body.appendChild(script)
    }

    )
  }
  useEffect(() => {
   loadScript('https://checkout.razorpay.com/v1/checkout.js')
  },[])


  const onPayment = async (amount) => {
    try {
        const options = {
          courseId: 1,
          amount: amount,
        };
        const res = await axios.post('http://localhost:3000/api/createOrder', options,{
          headers: {
            'Content-Type': 'application/json', 
        },
        });
        const data = res.data;
        console.log(data,"data");

        const paymentObject = new window.Razorpay({
            key: "rzp_test_DyYneL8OQ049ZP",
            order_id: data.id,
            ...data, 
            handler: function (response) {
                console.log(response);

                // Options for verifying payment
                const option2 = {
                    order_id: response.razorpay_order_id,
                    payment_id: response.razorpay_payment_id,
                    signature: response.razorpay_signature,
                };

                // Verify payment
                axios
                    .post('http://localhost:3000/api/verifyPayment', option2)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            alert("Payment successful");
                        } else {
                            alert("Payment failed");
                        }
                    })
                    .catch(err => {
                        console.error("Verification error:", err);
                    });
            },
        });

        // Open Razorpay payment popup
        paymentObject.open();
    } catch (error) {
        console.error("Payment error:", error);
    }
};
 const showNavbarLocations = ['/','/about','/events','/contact','/dashboard','/adminDashboard','/cards','/add-course'];
 const showNavbar = showNavbarLocations.includes(location.pathname)

  return (
    <>
    {/* {showNavbar && 
      <Navbar />} */}

               <Routes >
          <Route element = {<AuthGaurd />} >
               <Route element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<MemberDashboard />} />
        <Route path="/adminDashboard" element={<AdminPanel />} />
        <Route path="/add-course" element={<AddCourses />} />
        <Route path="/cards" element={<Cards onPayment = {onPayment} />}  />
         </Route></Route>
         <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<Login />} />
      
     
      </Routes>
     
      </>


    
  )
}

export default App
