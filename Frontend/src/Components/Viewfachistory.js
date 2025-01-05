import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';

export default function Viewfachistory() 
{
  const[facilitylist,setFacilitylist]=useState([]);  /* Display list of Facility list */ 
  const ursid=sessionStorage.getItem('userid');  // Getting managerid from session storage

  useEffect(()=>{
      Getallfacilities();
  })

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

  return (
    <><br></br>
   <Card className='displayfacility'>
      <Card.Header><h1 style={{color:"black",textShadow:"2px 2px 4px rgba(0.5, 0.4, 0, 0.6)",fontWeight:"bold",textAlign:"center"}}>List of Facilities:</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <table className='table table-striped'>
        <thead>
      <tr>
          <th style={{ textAlign: 'Left', paddingLeft: '20px'}}>Facility id</th>
          <th style={{ textAlign: 'Left', paddingLeft: '20px'}}>Fac-Description</th>
          <th style={{ textAlign: 'Left', paddingLeft: '20px'}}>City</th>
          <th style={{ textAlign: 'Left', paddingLeft: '20px'}}>Type</th>
          <th style={{ textAlign: 'Left', paddingLeft: '20px'}}>Manager</th>
          <th style={{ textAlign: 'Left', paddingLeft: '20px'}}>Uploaded Date</th>
          <th style={{ textAlign: 'Left', paddingLeft: '100px'}}>Logo</th>
      </tr>
        </thead>
        <tbody>
          {
            facilitylist.map((item,index)=>{
              return(
                <tr key={index}>
                <td style={{ textAlign: 'left ', paddingLeft: '20px'}}>{item.facilityid}</td>
                <td style={{ textAlign: 'left', paddingLeft: '20px'}}>{item.facilitydescription}</td>
                <td style={{ textAlign: 'left', paddingLeft: '20px'}}>{item.city.city}</td>
                <td style={{ textAlign: 'left', paddingLeft: '20px'}}>{item.types.type}</td>
                <td style={{ textAlign: 'left', paddingLeft: '20px'}}>{item.managers.username}</td>
                <td style={{ textAlign: 'left', paddingLeft: '20px'}}>{item.uploadeddate}</td>
                <td style={{ textAlign: 'left', paddingLeft: '50px'}}><img src={item.logo} alt="logo" width="200px" height="150px"/></td>
              </tr>
              ) 
            })
          }
        </tbody>
      </table>
        </Card.Text>
      </Card.Body>
    </Card>
    </>  
  )
}
