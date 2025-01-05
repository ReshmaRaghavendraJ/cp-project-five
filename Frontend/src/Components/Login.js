import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from './Navbar';

export default function Login() 
{
  const userslist = ["Admin", "Manager", "Guest"];
  const [usertype, setUsertype] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [emailid, setEmailid] = useState('');
  const[login,setlogin]=useState({});


  function clearAll() {
    setPassword('');
    setUsertype('');
    setEmailid('');
  }

  function handlelogin() 
  {
    if (usertype === "") {
      toast.error("Please select usertype");
      return;
    }
    if(usertype==="Admin" || usertype==="admin")
    {
      if (emailid === "" || password === "") {
        toast.error("Please enter valid emailid and password");
        return;
      }
      axios
      .get(`http://localhost:8080/adminlogin/${emailid}/${password}`)
      .then((res) => {
        setlogin(res.data);
        const adminid=res.data.adminid;
        sessionStorage.setItem('userid', adminid);
        navigate(`/Admindashboard`);
        clearAll();
      })
      .catch((err) => {
        toast.error(err.response ? err.response.data : "An error occurred");
      });
    }
    else if(usertype==="Manager" || usertype==="manager")
    {
      if (emailid === "" || password === "") {
        toast.error("Please enter valid emailid and password");
        return;
      }
    axios
      .get(`http://localhost:8080/managerlogin/${emailid}/${password}`)
      .then((res) => {
        setlogin(res.data);
        const managerid=res.data.managerid;
        sessionStorage.setItem('userid', managerid);
        navigate(`/Managerdashboard`);
        clearAll();
      })
      .catch((err) => {
        toast.error(err.response ? err.response.data : "An error occurred");
      });
  }
  else if(usertype==="Guest" || usertype==="guest")
  {
    if (emailid === "" || password === "") {
      toast.error("Please enter valid emailid and password");
      return;
    }
    axios
      .get(`http://localhost:8080/guestlogin/${emailid}/${password}`)
      .then((res) => {
        setlogin(res.data);
        const guestid=res.data.guestid;
        sessionStorage.setItem('userid', guestid);
        navigate(`/Guestdashboard`);
        clearAll();
      })
      .catch((err) => {
        toast.error(err.response ? err.response.data : "An error occurred");
      });
  }
  }
  
  return (
    <>
      <Navbar/>

      <div className='loginact'>
        <br />
        <h1 className='head1'>Login Page</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png" alt="user" width="80px" style={{ marginLeft: "630px" }} />

        <br />
        <label className='form-label' style={{ color: "white", fontSize: "large", marginLeft: "450px" }}>Select Usertypes:</label>
        <select className='form-select' style={{ width: "500px", marginLeft: "450px" }} value={usertype} onChange={(e) => setUsertype(e.target.value)}>
          <option value="">--Select Options--</option>
          {userslist.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        <br />
        <div className='form-group'>
          <label className='form-label' style={{ color: "white", fontSize: "large", marginLeft: "450px" }}>Enter Emailid:</label>
          <input type="text" className="form-control" style={{ width: "500px", marginLeft: "450px" }} value={emailid} onChange={(e) => setEmailid(e.target.value)} placeholder='@gmail.com'/>
        </div>
        <div className='form-group'>
          <label className='form-label' style={{ color: "white", fontSize: "large", marginLeft: "450px" }}>Enter Password:</label>
          <input type="password" className="form-control" style={{ width: "500px", marginLeft: "450px" }} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*****'/>
        </div>
        <div className='btnss'>
          <button className='btn btn-primary me-3' onClick={handlelogin}>Login</button>
          <button className='btn btn-danger me-3' onClick={clearAll}>Cancel</button>
        </div>
      </div>
    </>
  )
}

