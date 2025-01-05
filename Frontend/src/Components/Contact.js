import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; // Import Container
import Navbar from './Navbar';

export default function Contact() 
{

  return (
    <>
   <Navbar/>

    <div className='cont'><br></br>  
    <h1 className='text-center'><b>PHOTO GALLERY</b></h1><br></br> 
    <p></p>
    

    <div className='contactdiv'>
        <Container >
      <Row>
        <Col style={{width:"300px",border:"2px solid white",height:"300px"}}><img src="https://i0.wp.com/antimakhanna.com/wp-content/uploads/2014/06/img_5282.jpg?resize=700%2C466" alt='pic6' width="563px" height="295px" style={{marginLeft:"-10px"}}/></Col>
        <Col style={{width:"300px",border:"2px solid white",height:"300px"}}><img src="https://karnatakatourism.org/wp-content/uploads/2020/06/P10-gallery.jpg" alt='pic6' width="563px" height="295px" style={{marginLeft:"-10px"}}/></Col>
      </Row>
      <Row>
        <Col style={{width:"200px",border:"2px solid white",height:"300px"}}><img src="https://www.holidify.com/images/bgImages/SRINGERI.jpg" alt='pic6' width="375px" height="295px" style={{marginLeft:"-10px"}}/></Col>
        <Col style={{width:"100px",border:"2px solid white",height:"300px"}}><img src="https://thumbs.dreamstime.com/b/indian-vegetarian-thali-dishes-healthy-eating-fresh-food-background-315941431.jpg" alt='pic6' width="375px" height="295px" style={{marginLeft:"-10px"}}/></Col>
        <Col style={{width:"100px",border:"2px solid white",height:"300px"}}><img src="https://i.pinimg.com/originals/3c/e6/7a/3ce67aee4029bb6d6047a2dbcce1ce60.jpg" alt='pic6' width="373px" height="295px" style={{marginLeft:"-10px"}}/></Col>
      </Row>
    </Container>
    </div>
    <hr></hr><br></br>
        <h2 style={{fontWeight:"bold",marginLeft:"500px",marginTop:"-20px",textDecoration:"underline",color:"white",backgroundColor:"black"}}>Contact Us</h2>
        <ul className='one'>
            <li>About</li>
            <li>Team</li>   
            <li>Career</li>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
        </ul>
        </div>
    </>
  )
}
