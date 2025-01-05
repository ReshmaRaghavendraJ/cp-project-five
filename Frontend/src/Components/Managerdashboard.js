import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Viewfachistory from './Viewfachistory';
import Viewreplyqueries from './Viewreplyqueries';
import Managefacilities from './Managefacilities';
import Addphotos from './Addphotos';
import Addtext from './Addtext';
import Addvideos from './Addvideos';
import { Link } from 'react-router-dom';

export default function Managerdashboard()
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
      <h1 className='text-center' style={{color:"white",textShadow:"2px 2px 4px rgba(0.2, 0.4, 0, 0.6)"}}>Manager Dashboard</h1>
      <Nav variant="tabs" defaultActiveKey="/" activeKey={activeButton} onSelect={handleSelect} style={{ marginTop: "27px" }}>
      <Nav.Item>
        <Nav.Link eventKey="Managefacilities"  style={Managefacilities === 'Managefacilities' ? activeStyle : inactiveStyle}><h6 style={{color:"maroon"}}>Managefacilities</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Viewfachistory"  style={Viewfachistory === 'Viewfachistory' ? activeStyle : inactiveStyle}><h6 style={{color:"maroon"}}>Viewfachistory</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Viewreplyqueries" style={Viewreplyqueries === 'Viewreplyqueries' ? activeStyle : inactiveStyle}><h6 style={{color:"maroon"}}>Viewreplyqueries</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Addtext"  style={Addtext === 'Addtext' ? activeStyle : inactiveStyle}><h6 style={{color:"maroon"}}>Addtext</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Addphotos"  style={Addphotos === 'Addphotos' ? activeStyle : inactiveStyle}><h6 style={{color:"maroon"}}>Addphotos</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Addvideos"  style={Addvideos === 'Addvideos' ? activeStyle : inactiveStyle}><h6 style={{color:"maroon"}}>Addvideos</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link as={Link} to='/'>  <h6 style={{ color: "maroon" }}>Logout</h6></Nav.Link>
      </Nav.Item>
      </Nav>
    </div>

    {activeButton === "Managefacilities" && <Managefacilities />}
    {activeButton === "Viewfachistory" && <Viewfachistory />}
    {activeButton === "Viewreplyqueries" && <Viewreplyqueries />}
    {activeButton === "Addtext" && <Addtext/>}
    {activeButton === "Addphotos" && <Addphotos/>}
    {activeButton === "Addvideos" && <Addvideos/>}
    </>
  )
}
