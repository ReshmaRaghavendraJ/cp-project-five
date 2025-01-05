import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Components/Home'
import About from './Components/About'
import './Components/styles.css'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Admindashboard from './Components/Admindashboard'
import Managerdashboard from './Components/Managerdashboard'
import Managefacilitytypes from './Components/Managefacilitytypes'
import Postqueries from './Components/Postqueries'
import Browsefacility from './Components/Browsefacility'
import Addtext from './Components/Addtext'
import Addphotos from './Components/Addphotos'
import Addvideos from './Components/Addvideos'
import Managefacilities from './Components/Managefacilities'
import Viewfachistory from './Components/Viewfachistory';
import Viewreplyqueries from './Components/Viewreplyqueries';
import Viewmore from './Components/Viewmore';
import Register from './Components/Register';
import Guestdashboard from './Components/Guestdashboard';

export default function App() {
  return (
 <Router>
  <ToastContainer/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Admindashboard" element={<Admindashboard/>}/>
    <Route path="/Managefacilitytypes" element={<Managefacilitytypes/>}/>
    <Route path="/Managerdashboard" element={<Managerdashboard/>}/>
    <Route path="/Managefacilities" element={<Managefacilities/>}/>
    <Route path="/Viewfachistory" element={<Viewfachistory/>}/>
    <Route path="/Viewreplyqueries" element={<Viewreplyqueries/>}/>
    <Route path="/Postqueries" element={<Postqueries/>}/>
    <Route path="/Browsefacility" element={<Browsefacility/>}/>
    <Route path="/Addtext" element={<Addtext/>}/>
    <Route path="/Addphotos" element={<Addphotos/>}/>
    <Route path="/Addvideos" element={<Addvideos/>}/>
    <Route path="/Viewmore/:facilityid" element={<Viewmore/>}/>

    <Route path="/Guestdashboard" element={<Guestdashboard/>}/>
  </Routes>
 </Router>
  )
}
