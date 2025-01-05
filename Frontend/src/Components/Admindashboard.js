import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Managefacilitytypes from './Managefacilitytypes';
import Managecities from './Managecities';
import Managemanagers from './Managemanagers';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Admindashboard()
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
      <h1 className='text-center' style={{color:"white",textShadow:"2px 2px 4px rgba(0.2, 0.4, 0, 0.6)"}}>Welcome to Admin Dashboard</h1>
      <Nav variant="tabs" defaultActiveKey="/" activeKey={activeButton} onSelect={handleSelect}  style={{ marginTop: "27px" }}>
      <Nav.Item>
        <Nav.Link eventKey="Managefacilitytypes"  style={Managefacilitytypes === 'Postqueries' ? activeStyle : inactiveStyle}><h6 style={{color:"maroon"}}>Managefacilitytypes</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Managecities" style={Managecities === 'Postqueries' ? activeStyle : inactiveStyle} ><h6 style={{color:"maroon"}}>Managecities</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Managemanagers" style={Managemanagers === 'Postqueries' ? activeStyle : inactiveStyle}><h6 style={{color:"maroon"}}>Managemanagers</h6></Nav.Link>
      </Nav.Item>
      <Nav.Link as={Link} to="/">
      <h6 style={{ color: "maroon" }}>Logout</h6>
     </Nav.Link>
      </Nav>
    </div>

{activeButton==='' && (
      <img src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2023_05_Feature-Image-Templates-9.jpg" width="1343px" height="800px" style={{marginLeft:"5px"}} alt="pic8"/>
    )}

    {activeButton === "Managefacilitytypes" && <Managefacilitytypes />}
    {activeButton === "Managecities" && <Managecities />}
    {activeButton === "Managemanagers" && <Managemanagers />}
    
    </>
  )
}
