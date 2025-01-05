import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import road from './road.jpg';
import Navbar from './Navbar';


export default function About() 
{
 
  return (
    <>
   <Navbar/>

    <div className='about'>
<h5 className='text-center' style={{marginLeft:"10px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
   <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:"100pt"}}/>
Usually the out station students are unaware of the details such as
canteen facilities, hostel facilities, PG facilities, tourist spots near the college or
college surroundings etc.
As they are new to the college and the city[location]. This online based application
provides the information related to these things and helps the out station students.</h5><br></br><br></br>
</div>
<div>
  <img src={road} alt="road" width="1200px"/>

</div>
    </>
  )
}