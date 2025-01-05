import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';


export default function Managefacilitytypes()
 {
  const[type,setTypes]=useState('');
  const[citylist,setCitylist]=useState([]);   /* Drop downlist */
  const[selectedcity,setSelectedcity]=useState('');
   const[typelist,setTypelist]=useState([]);   /* List of types */
   const[showtypes,setShowtypes]=useState(false);  /* Hide List of types */

  useEffect(()=>{
    getallcities('');
  },[])

  function getallcities()   /* Drop down list for citylist */
    {
      axios
      .get("http://localhost:8080/getallcities")
      .then((res)=>{
        setCitylist(res.data);
      })
      .catch((err)=>{
        toast.error(err.response.data); 
      });
    }

    function addtypes()   /* Post Types */
    {
      if(selectedcity==="")
      {
        toast.error("please choose City");
        return;
      }
      if(type==="")
        {
          toast.error("please enter type");
          return;
        }
      const obj={type};
        axios
        .post(`http://localhost:8080/addtypes/${selectedcity}`,obj)
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
      setTypes('');
      setSelectedcity('');
    }

    function getalltypes()         /* display all types */
    {
      axios
      .get("http://localhost:8080/getalltypes")
      .then((res)=>{
        setTypelist(res.data);
        setShowtypes(true);
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
    }

  return (
    <><br></br>
      <Card className='addfacilitytypes'>
      <Card.Header>  <h1 style={{color:"maroon",textShadow:"2px 2px 4px rgba(0.5, 0.4, 0, 0.6)",textAlign:"center"}}>Manage Facility Types</h1><br></br></Card.Header>
      <Card.Body>
        <Card.Text>
        <label className='form-label' style={{marginLeft:"30px",fontWeight:"bold"}}>Choose City:</label>
    <select className='form-select'  value={selectedcity} onChange={(e)=>setSelectedcity(e.target.value)}>
      <option value={0}>--Select Options--</option>
      {
        citylist.map((item,index)=>{
          return(
            <option key={index} value={item.cityid}>{item.cityid}-{item.city}</option>
          )
        })
      }
    </select>
    <label className='form-label' style={{marginLeft:"30px",fontWeight:"bold"}}>Add Facilities:</label><br></br>
    <input type="text" className='form-control' value={type} onChange={(e)=>setTypes(e.target.value)} /><br></br>    
      <div className='btnss'> 
      <button className='btn btn-success me-4' style={{marginLeft:"80px"}} onClick={addtypes}>Submit</button>
    <button  className='btn btn-secondary me-4' style={{marginLeft:"10px"}} onClick={clearAll}>Clear</button>
    <button  className='btn btn-danger me-4' style={{marginLeft:"10px"}} onClick={getalltypes}>Show</button>
      </div>
        </Card.Text>
      </Card.Body>
    </Card>


    {showtypes && (
    <Card className='displaytype'>
      <Card.Header> <h1 style={{color:"maroon",textShadow:"2px 2px 4px rgba(0.5, 0.4, 0, 0.6)",fontWeight:"bold", textAlign:"center"}}>List of Facilities:</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <table className='table table-striped'>
      <thead>
        <tr>
          <th style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"50px"}} >Typeid</th>
          <th style={{ textAlign: 'Left', paddingLeft: '50px',marginBottom:"50px"}} >TypeName</th>
          <th style={{ textAlign: 'Left', paddingLeft: '50px',marginBottom:"50px"}} >CityName</th>
        </tr>
      </thead>
      <tbody>
        {
          typelist.map((item,index)=>{
            return(
              <tr value={index}>
                <td style={{ textAlign: 'Left', paddingLeft: '20px',marginBottom:"500px"}} >{item.typeid}</td>
                <td style={{ textAlign: 'Left', paddingLeft: '50px'}} >{item.type}</td>
                <td style={{ textAlign: 'Left', paddingLeft: '50px'}}>{item.city2.city}</td>
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
