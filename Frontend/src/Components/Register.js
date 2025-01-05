import React from 'react';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from './Navbar';




export default function Register() 
{
    const[guestname,setGuestname]=useState('');
    const[gender,setGender]=useState('');
    const[mobileno,setMobileno]=useState('');
    const[emailid,setEmailid]=useState('');
    const[password,setPassword]=useState('');

    function guestregister()   /* Guest Registeration */
    {
      if(guestname==="")
      {
        toast.error("Please enter guestname");
        return;
      }
      if(gender==="")
        {
          toast.error("Please select the gender type");
          return;
        }
        if(mobileno==="")
          {
            toast.error("Please enter mobileno");
            return;
          }
          if (!/^\+91\d{10}$/.test(mobileno)) {
            toast.error("Mobileno should start with +91 and be followed by 10 digits");
            return;
          }
          if(emailid==="")
            {
              toast.error("Please enter proper emailid");
              return;
            }
            if(password==="")
              {
                toast.error("Please enter password");
                return;
              }
              if (password.length > 0 && password.length < 5) 
              {
                toast.error("Password should be minimum of 5 Characters");
                return;
              }
              if (password.length > 0 && (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password))) 
                {
                toast.warning("Password should contain both letters and numbers");
              }
              if (!/^[A-Z]/.test(password)) {
                toast.error("Password should start with an uppercase letter");
                return;
              }
        const obj={guestname,gender,mobileno,emailid,password};
        axios
        .post("http://localhost:8080/guestregister",obj)
        .then((res)=>{
            toast.success(res.data);
            ClearAll();
        })
        .catch((err)=>{
            toast.error(err.response.data);
        });
    }


    function ClearAll()
    {
        setEmailid("");
        setGender("");
        setGuestname("");
        setMobileno("");
        setPassword("");
    }


  return (
    <>
    <Navbar/>

    <Card className='guestreg'>
        <Card.Body>
            <h1 style={{color:"maroon",textAlign:"center"}}>Guest Registeration</h1>
            <Form>
      <Form.Group className="mb-3">
        <Form.Label><h6>Enter Guestname</h6></Form.Label>
        <Form.Control type="text" value={guestname} onChange={(e)=>setGuestname(e.target.value)}/>
      </Form.Group>

      <label className='form-label'><h6>Gender:</h6></label><br></br>
    <Form.Check type="radio" label="Male" name="gender" value="Male" onChange={(e) => setGender(e.target.value)}/>
    <Form.Check type="radio" label="Female" name="gender" value="Female" onChange={(e) => setGender(e.target.value)}/>

      <Form.Group className="mb-3">
        <Form.Label><h6>Enter Mobileno:</h6></Form.Label>
        <Form.Control type="text" value={mobileno} onChange={(e)=>setMobileno(e.target.value)} placeholder='+91'/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label><h6>Enter Emailid:</h6></Form.Label>
        <Form.Control type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} placeholder='@gmail.com'/>
      </Form.Group> 

      <Form.Group className="mb-3">
        <Form.Label><h6>Enter Password:</h6></Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='*****'/>
      </Form.Group> 
      </Form>
      <div className='btnss'>
        <button className='btn btn-primary me-2' onClick={guestregister}>Submit</button>
        <button className='btn btn-secondary' onClick={ClearAll}>Cancel</button>
      </div>
        </Card.Body>
    </Card>
    </>
  )
}
