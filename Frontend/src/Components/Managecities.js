import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';

export default function Managecities()
 {
    const[city,setCity]=useState('');
    const[citylist,setCitylist]=useState([]);    /* Display City list */
    const[showcity,setShowcity]=useState(false);  /* Hide List of cities */

    function clearAll()
    {
        setCity("");
    }

    function addcity()       /* Post City */
    {
      if(city==="")
        {
          toast.error("please enter city");
          return;
        }
      const obj={city};
        axios
        .post("http://localhost:8080/addcity",obj)
        .then((res)=>{
          toast.success(res.data);
          clearAll();
        })
        .catch((err)=>{
          toast.error(err.response.data);
        });
    }

    function getallcities()         /* display all city */
    {
      axios
      .get("http://localhost:8080/getallcities")
      .then((res)=>{
        setCitylist(res.data);
        setShowcity(true);
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
    }

  return (
    <><br></br>
     <Card className='addcity'>
      <Card.Header> <h1 style={{color:"maroon",textShadow:"2px 2px 4px rgba(0.5, 0.4, 0, 0.6)",textAlign:"center"}}>Manage Cities</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <label className='form-label' style={{marginLeft:"100px",fontWeight:"bold"}}>Enter City Name:</label><br></br>
        <input type="text" className='form-control' value={city} onChange={(e)=>setCity(e.target.value)} style={{width:"400px",marginLeft:"50px"}}/><br></br>
        </Card.Text>
        <div className='btnss'>
        <button className='btn btn-success me-4' style={{marginLeft:"80px"}} onClick={addcity}>Submit</button>
    <button  className='btn btn-secondary me-4' style={{marginLeft:"10px"}} onClick={clearAll}>Clear</button>
    <button  className='btn btn-danger me-4' style={{marginLeft:"10px"}} onClick={getallcities}>Show</button>
    </div>
      </Card.Body>
    </Card>


    {showcity && (
    <Card className='displaycity'>
      <Card.Header><h1 style={{color:"maroon",textShadow:"2px 2px 4px rgba(0.5, 0.4, 0, 0.6)",fontWeight:"bold",textAlign:"center"}}>List of Cities:</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <table className='table table-striped '>
        <thead>
          <tr>
            <th style={{ textAlign: 'Left', paddingLeft: '100px',marginBottom:"50px"}} >Cityid</th>
            <th style={{ textAlign: 'Left', paddingLeft: '100px'}}>City Name</th>
          </tr>
        </thead>
        <tbody>
          {
            citylist.map((item,index)=>{
              return(
                <tr key={index} >
                  <td style={{ textAlign: 'Left', paddingLeft: '100px',marginBottom:"500px"}} >{item.cityid}</td>
                  <td style={{ textAlign: 'Left', paddingLeft: '100px'}}>{item.city}</td>
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
