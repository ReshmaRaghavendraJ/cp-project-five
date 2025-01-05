import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';


export default function Addtext() 
{
  const[facilitylist,setFacilitylist]=useState([]);  /* Drop down list of Facility */ 
  const ursid=sessionStorage.getItem('userid');  // Getting managerid from session storage
  const[selectedfacility,setSelectedfacility]=useState(''); 
  const[heading,setHeading]=useState('');
  const[description,setDescription]=useState('');

  useEffect(()=>{
    Getallfacilities();
},[])

function Getallfacilities()      /* Get all Facilities */
{
    axios
    .get(`http://localhost:8080/Getallfacilities/${ursid}`)
    .then((res)=>{
      setFacilitylist(res.data);
    })
    .catch((err)=>{
      toast.error(err.response.data);
    });
}

function addtext()   /* Post Text */
{
  const obj={selectedfacility,heading,description};
  axios
    .post(`http://localhost:8080/addtext/${selectedfacility}`,obj)
    .then((res)=>{
      toast.success(res.data);
      clearAll();
    })
    .catch((err)=>{
      toast.error(err.response.data);
    });
}

function clearAll()
{
  setDescription("");
  setHeading("");
  setSelectedfacility("");
}
  
  return (
    <><br></br>
    <Card className='addtext'>
      <Card.Header>  <h1 style={{color:"black",textShadow:"2px 2px 4px rgba(0.5, 0.4, 0, 0.6)",textAlign:'center'}}>Add Text</h1><br></br></Card.Header>
      <Card.Body>
        <Card.Text>
        <label className='form-label' style={{fontWeight:"bold"}}>Select Name of Place:</label>
    <select className='form-select'  style={{width:"700px"}} value={selectedfacility} onChange={(e)=>setSelectedfacility(e.target.value)}> 
    <option value={0}>--Select Otpions--</option>
    {
      facilitylist.map((item,index)=>{
        return(
            <option key={index} value={item.facilityid}>{item.facilityid}-{item.name}</option>
        )
      })
    }
    </select>
    <label className='form-label' style={{fontWeight:"bold"}}>Enter Heading:</label>
    <input type="text" className='form-control' style={{width:"700px"}} value={heading} onChange={(e)=>setHeading(e.target.value)}/>
    <label className='form-label' style={{fontWeight:"bold"}}>Enter Description:</label>
    <input type="textarea" className='form-control' style={{width:"700px"}} value={description} onChange={(e)=>setDescription(e.target.value)}/>
    </Card.Text>
    <div className='btnss'>
    <button className='btn btn-success me-4' onClick={addtext}>Submit</button>
    <button  className='btn btn-secondary me-4'  onClick={clearAll}>Clear</button>
    </div>
   
      </Card.Body>
    </Card>
    </>
  )
}
