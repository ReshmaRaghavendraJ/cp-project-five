import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';

export default function Managemanagers() 
{
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[address,setAddress]=useState('');
  const[contactno,setContactno]=useState('');
  const[emailid,setEmailid]=useState('');
  const[managerlist,setManagerlist]=useState([]);   //Display list of managers list
  const[showmanager, setShowmanager]=useState(false);  //Hide Manager list 

  function AddManagers()   /* Post Types */
  {
    if(username==="")
      {
        toast.error("please enter username");
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
        if(address==="")
          {
            toast.error("please enter address");
            return;
          }
          if(contactno==="")
            {
              toast.error("Please enter contactno");
              return;
            }
            if (!/^\+91\d{10}$/.test(contactno)) {
              toast.error("Mobileno should start with +91 and be followed by 10 digits");
              return;
            }
            if(emailid==="")
              {
                toast.error("please enter proper emailid");
                return;
              }

    const obj={username,password,address,contactno,emailid};
      axios
      .post("http://localhost:8080/AddManagers",obj)
      .then((res)=>{
        toast.success(res.data);
        clearAll();
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
  }

  function getallmanagers()         /* display all Managers */
  {
    axios
    .get("http://localhost:8080/getallmanagers")
    .then((res)=>{
      setManagerlist(res.data);
      setShowmanager(true);
    })
    .catch((err)=>{
      toast.error(err.response.data);
    });
  }

  function clearAll()
  {
    setAddress("");
    setContactno("");
    setEmailid("");
    setPassword("");
    setUsername("");
  }

  return (
     <><br></br>
    <Card className='regmanagers'>
      <Card.Header>  <h1 style={{color:"maroon",textShadow:"2px 2px 4px rgba(0.5, 0.4, 0, 0.6)",textAlign:"center"}}>Register Managers</h1><br></br></Card.Header>
      <Card.Body>
        <Card.Text>
        <label className='form-label' style={{fontWeight:"bold"}}>Enter Manager Name:</label><br></br>
    <input type="text" className='form-control' value={username} onChange={(e)=>setUsername(e.target.value)} style={{width:"900px",marginLeft:"50px"}}/><br></br> 

    <label className='form-label' style={{fontWeight:"bold"}}>Enter Password:</label><br></br>
    <input type="password" className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} style={{width:"900px",marginLeft:"50px"}} placeholder='*****'/><br></br>    

    <label className='form-label' style={{fontWeight:"bold"}}>Enter Address:</label><br></br>
    <input type="text" className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)} style={{width:"900px",marginLeft:"50px"}}/><br></br>    

    <label className='form-label' style={{fontWeight:"bold"}}>Enter Contact-no:</label><br></br>
    <input type="text" className='form-control' value={contactno} onChange={(e)=>setContactno(e.target.value)} style={{width:"900px",marginLeft:"50px"}} placeholder='+91'/><br></br>    

    <label className='form-label' style={{fontWeight:"bold"}}>Enter Emailid:</label><br></br>
    <input type="text" className='form-control' value={emailid} onChange={(e)=>setEmailid(e.target.value)} style={{width:"900px",marginLeft:"50px"}} placeholder='@gmail.com'/><br></br>       
        </Card.Text>
    <div className='btnss'>
    <button className='btn btn-success me-4' style={{marginLeft:"80px"}} onClick={AddManagers}>Submit</button>
    <button  className='btn btn-secondary me-4' style={{marginLeft:"10px"}} onClick={clearAll}>Clear</button>
    <button  className='btn btn-danger me-4' style={{marginLeft:"10px"}} onClick={getallmanagers}>Show</button>
    </div>
      </Card.Body>
    </Card><br></br>



    {showmanager && (
     <Card className='displaymanager'>
      <Card.Header> <h1 style={{color:"maroon",textShadow:"2px 2px 4px rgba(0.5, 0.4, 0, 0.6)",fontWeight:"bold", textAlign:"center"}}>List of Managers:</h1><br></br></Card.Header>
      <Card.Body>
        <Card.Text>
        <table className='table table-striped'>
      <thead>
        <tr>
          <th style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"50px"}}>Manager id</th>
          <th style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"50px"}}>username</th>
          <th style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"50px"}}>password</th>
          <th style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"50px"}}>address</th>
          <th style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"50px"}}>contactno</th>
          <th style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"50px"}}>emailid</th>
        </tr>
      </thead>
      <tbody>
        {
          managerlist.map((item,index)=>{
            return(
              <tr key={index}>
              <td style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"50px"}}>{item.managerid}</td>
              <td style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"50px"}}>{item.username}</td>
              <td style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"50px"}}>{item.password}</td>
              <td style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"50px"}}>{item.address}</td>
              <td style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"50px"}}>{item.contactno}</td>
              <td style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"50px"}}>{item.emailid}</td>
            </tr>
            )
          })
        }
      </tbody>
     </table>
     </Card.Text>
      </Card.Body>
    </Card>
    )}
    </>
  )
}
