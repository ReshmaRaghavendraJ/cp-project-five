import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navbar() 
{
  return (
    <>
    <div className='menu'>
      <h1 className='text-center' style={{color:"maroon",textShadow:"2px 2px 4px rgba(0.2, 0.4, 0, 0.6)"}}>Welcome Info Center</h1>
      <Nav variant="tabs" defaultActiveKey="/"  style={{marginTop:"27px"}}>
      <Nav.Item>
        <Nav.Link className="btn-danger" as={Link} to="/"><h6 style={{color:"maroon"}}>Home</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="btn-danger" as={Link} to="/About"><h6 style={{color:"maroon"}}>About</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="btn-danger" as={Link} to="/Contact"><h6 style={{color:"maroon"}}>Contact</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="btn-danger" as={Link} to="/Register"><h6 style={{color:"maroon"}}>Register</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="btn-danger" as={Link} to="/Login"><h6 style={{color:"maroon"}}>Login</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      </Nav.Item>
    </Nav>
    </div><br></br>
    </>
  )
}
