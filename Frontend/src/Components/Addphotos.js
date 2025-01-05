import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Addphotos() 
{
  const[facilitylist,setFacilitylist]=useState([]);  /* Drop down list of Facility */ 
  const ursid=sessionStorage.getItem('userid');  // Getting managerid from session storage
  const[selectedfacility,setSelectedfacility]=useState(''); 
  const[title,setTitle]=useState('');
  const[description,setDescription]=useState('');
  const[photo,setPhoto]=useState('');

  
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

function clearAll()
{
  setTitle("");
  setDescription("");
  setSelectedfacility("");
  setPhoto("");
}

function addphotos()      /* Post Photos */
{
  const obj={selectedfacility,title,description,photo};
  axios
    .post(`http://localhost:8080/addphotos/${selectedfacility}`,obj)
    .then((res)=>{
      toast.success(res.data);
      clearAll();
    })
    .catch((err)=>{
      toast.error(err.response.data);
    });
}

  return (
    <><br></br>
     <Card className='addphotos'>
      <Card.Header>  <h1 style={{color:"black",textShadow:"2px 2px 4px rgba(0.5, 0.4, 0, 0.6)",textAlign:"center"}}>Add Photos</h1><br></br></Card.Header>
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
    <label className='form-label' style={{fontWeight:"bold"}}>Enter Title:</label>
    <input type="text" className='form-control' style={{width:"700px"}} value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <label className='form-label' style={{fontWeight:"bold"}}>Enter Description:</label>
    <input type="textarea" className='form-control' style={{width:"700px"}} value={description} onChange={(e)=>setDescription(e.target.value)}/>
    <label className='form-label' style={{fontWeight:"bold"}}>Enter Photo url:</label>
    <input type="text" className='form-control' style={{width:"700px"}} value={photo} onChange={(e)=>setPhoto(e.target.value)}/><br></br>
    <div className='btnss'>
    <button className='btn btn-success me-4' onClick={addphotos}>Submit</button>
    <button  className='btn btn-secondary me-4'  onClick={clearAll}>Clear</button>
    </div>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}
