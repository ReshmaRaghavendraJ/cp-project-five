import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';

export default function Managefacilities() 
{
    const ursid=sessionStorage.getItem('userid');  // Getting managerid from session storage
    const[logo,setLogo]=useState('');
    const[name,setName]=useState('');
    const[location,setLocation]=useState('');
    const[facilitydescription,setFacilitydescription]=useState('');
    const[selectedcity,setSelectedcity]=useState('');
    const[citylist,setCitylist]=useState([]);   /* Drop down list of cities */
    const[selectedtype,setSelectedtype]=useState('');
    const[typelist,setTypelist]=useState([]);   /* Drop down list of Types */
 

    useEffect(()=>{
      getallcities();
    },[])

    useEffect(() => {
      if (selectedcity !== '') {
          gettypes();  // Only fetch types if a city is selected
      }
  }, [selectedcity])  // Triggered when selectedcity changes

  
    function clearAll()
    {
        setFacilitydescription("");
        setLogo("");
        setSelectedcity("");
        setSelectedtype("");
        setName('');
        setLocation('');
        
    }

    function addfacilities()    /* Post Facilities */
    {
      const obj={selectedcity,selectedtype,facilitydescription,logo,name,location};
        axios
        .post(`http://localhost:8080/addfacilities/${ursid}/${selectedcity}/${selectedtype}`,obj)
        .then((res)=>{
          toast.success(res.data);
       clearAll();
        })
        .catch((err)=>{
          toast.error(err.response.data);
        });
    }

    function getallcities()   /* Drop down list of cities */
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

    
    function gettypes()   /* Drop down list of Types based on city */
    {
      axios
      .get(`http://localhost:8080/gettypes/${selectedcity}`)
      .then((res)=>{
        setTypelist(res.data);
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
    }

  

  return (
    <><br></br>
    <Card className='addfacility'>
      <Card.Header> <h1 style={{color:"black",textShadow:"2px 2px 4px rgba(0.5, 0.4, 0, 0.6)",textAlign:"center"}}>Manage Facilities</h1><br></br></Card.Header>
      <Card.Body>
        <Card.Text>
        <label className='form-label' style={{fontWeight:"bold"  }}>Select City:</label>
    <select className='form-select'  value={selectedcity} onChange={(e)=>setSelectedcity(e.target.value)}>
      <option value={0}>--Select Options--</option>
      {
        citylist.map((item,index)=>{
          return(
            <option key={index} value={item.cityid}>{item.cityid}-{item.city}</option>
          )
        })
      }
    </select><br></br>

    <label className='form-label' style={{fontWeight:"bold"}}>Select Type:</label>
    <select className='form-select' value={selectedtype} onChange={(e)=>setSelectedtype(e.target.value)}>
      <option value={0}>--Select Options--</option>
      {
        typelist.map((item,index)=>{
          return(
            <option key={index} value={item.typeid}>{item.typeid}-{item.type}</option>
          )
        })
      }
    </select><br></br>

    <label className='form-label' style={{fontWeight:"bold"}}>Add Name of Place:</label><br></br>
    <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)} /><br></br>    
   
    <label className='form-label' style={{fontWeight:"bold"}}>Facility Description:</label><br></br>
    <input type="text" className='form-control'  value={facilitydescription} onChange={(e)=>setFacilitydescription(e.target.value)}/><br></br>

    <label className='form-label' style={{fontWeight:"bold"}}>Enter Logo Url:</label><br></br>
    <input type="text" className='form-control' value={logo} onChange={(e)=>setLogo(e.target.value)}/><br></br>

    <label className='form-label' style={{fontWeight:"bold"}}>Add Location url:</label><br></br>
    <input type="text" className='form-control' value={location} onChange={(e)=>setLocation(e.target.value)} /><br></br>    
   
      <div className='btnss'>
    <button className='btn btn-success me-4' style={{marginLeft:"80px"}} onClick={addfacilities}>Submit</button>
    <button  className='btn btn-secondary me-4' style={{marginLeft:"10px"}} onClick={clearAll}>Clear</button>
    </div>
        </Card.Text>
      </Card.Body>
    </Card>
    </>  
  )
}
