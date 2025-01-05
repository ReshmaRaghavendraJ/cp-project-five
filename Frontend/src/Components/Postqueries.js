import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';


export default function Postqueries()
{
  const[name,setName]=useState('');
  const[contactno,setContactno]=useState('');
  const[emailid,setEmailid]=useState('');
  const[query,setQuery]=useState('');
  const facid=sessionStorage.getItem('facid');

  function addquery(event)
  {
    event.preventDefault(); // Prevent form submission
    if(name==="")
      {
        toast.error("please enter name");
        return;
      }
      if(contactno==="")
        {
          toast.error("please enter contactno");
          return;
        }
        if(emailid==="")
          {
            toast.error("please enter emailid");
            return;
          }
          if(query==="")
            {
              toast.error("please enter query");
              return;
            }
    const obj={name,contactno,emailid,query};
    axios
    .post(`http://localhost:8080/addquery/${facid}`,obj)
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
    setContactno("");
    setEmailid("");
    setName("");
    setQuery("");
  }

 

  return (
    <>
    <Card className='postqueries'>
      <Card.Header><h1 style={{color:"black",textShadow:"2px 2px 4px rgba(0.5, 0.4, 0, 0.6)",textAlign:"center"}}>Post Queries</h1><br></br></Card.Header>
      <Card.Body>
        <Card.Text>
        <Form className='post'>
      <Form.Group className="mb-3"><br></br>
        <Form.Label style={{fontWeight:"bold"}}>Name:</Form.Label>
        <Form.Control type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{width:"500px",fontWeight:"bold"}}>Contact-no:</Form.Label>
        <Form.Control type="text" value={contactno} onChange={(e)=>setContactno(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{width:"500px",fontWeight:"bold"}}>Email-id:</Form.Label>
        <Form.Control type="text"  value={emailid} onChange={(e)=>setEmailid(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{width:"500px",fontWeight:"bold"}}>Query:</Form.Label>
        <Form.Control type="text"  value={query} onChange={(e)=>setQuery(e.target.value)}/>
      </Form.Group>
      <div className='btnss'>
      <button className='btn btn-success me-4'  onClick={addquery}>Submit</button>
    <button  className='btn btn-secondary me-4'  onClick={ClearAll}>Clear</button>
    </div>
    </Form>
        </Card.Text>
      </Card.Body>
    </Card>
    </>  
  )
}
