import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
// import Services from './Services';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Postqueries from './Postqueries';
import Browsefacility from './Browsefacility';
import { Link } from 'react-router-dom';

export default function Guestdashboard() 
{
    const [activeButton, setActiveButton] = useState('');

    const handleSelect = (selectedkey) => {
      setActiveButton(selectedkey);
    };

       // Define styles for active and inactive states
       const activeStyle = { color: 'maroon' };
       const inactiveStyle = { color: 'maroon' };

  return (
    <>
    <div className='menu'>
       <h1 className='text-center' style={{color:"White",textShadow:"2px 2px 4px rgba(0.2, 0.4, 0, 0.6)"}}>Guest Dashboard</h1>
       <Nav variant="tabs" defaultActiveKey="/" activeKey={activeButton} onSelect={handleSelect} style={{ marginTop: "27px" }}>
      <Nav.Item>
        <NavDropdown style={{color:"maroon",fontWeight:"bold"}} title="Services" id="nav-dropdown">
        <NavDropdown.Item eventKey="Browsefacility" style={Browsefacility === 'Browsefacility' ? activeStyle : inactiveStyle}><h6 style={{color:"maroon"}}>Browsefacility</h6></NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/"><h6 style={{color:"maroon"}}>Logout</h6></Nav.Link>
        </Nav.Item>
      </Nav>
    </div>

    {activeButton==='' && (
    <div className='guestdash'><br></br>
    <h1 className='text-center'>Facilities & Amenities</h1><br></br>
    <img className="imgs" src="https://media.istockphoto.com/id/2166821163/photo/frame-pool-with-clean-water-in-the-garden-resting-by-the-pool-in-nature.jpg?s=612x612&w=0&k=20&c=je_Zx6PPzR-77acUW4D_19HmqCGh1UbVHxzqmdCxeFQ=" alt="pic9" style={{marginLeft:"200px",border:"4px dotted black"}}/><br></br><br></br>
    <h6 style={{marginLeft:"200px"}}>
      <ul><li>Swimming Pool Facilities</li></ul>
      </h6>

      <img className="imgs" src="https://images.unsplash.com/photo-1659614871735-e133639e4b28?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic9" style={{marginLeft:"550px",marginTop:"-350px",border:"4px dotted black"}}/><br></br><br></br>
    <h6 style={{marginLeft:"560px",marginTop:"-80px"}}>
      <ul><li>Fitness Centre Facilities</li></ul>
      </h6><br>
      </br>

      <img className="imgs" src="https://plus.unsplash.com/premium_photo-1661392877411-8a4c5ba70462?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic9" style={{marginLeft:"900px",marginTop:"-400px",border:"4px dotted black"}}/><br></br><br></br>
    <h6 style={{marginLeft:"930px",marginTop:"-100px"}}>
      <ul><li>Room Service Facilities</li></ul>
      </h6>

      <img className="imgs" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWVldGluZyUyMEZhY2lsaXRpZXN8ZW58MHx8MHx8fDA%3D" alt="pic9" style={{marginLeft:"300px",border:"4px dotted black"}}/><br></br><br></br>
    <h6 style={{marginLeft:"300px"}}>
      <ul><li>Meeting Facilities</li></ul>
      </h6>

      <img className="imgs" src="https://images.unsplash.com/photo-1620219365994-f443a86ea626?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWluaSUyMEJhcnxlbnwwfHwwfHx8MA%3D%3D" alt="pic9" style={{marginLeft:"700px",marginTop:"-350px",border:"4px dotted black"}}/><br></br><br></br>
    <h6 style={{marginLeft:"720px",marginTop:"-80px"}}>
      <ul><li>Mini Bar Facilities</li></ul>
      </h6>
      </div>
    )}

    {activeButton === "Postqueries" && <Postqueries />}
    {activeButton === "Browsefacility" && <Browsefacility />}
    </>
  )
}
