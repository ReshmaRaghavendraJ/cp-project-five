import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Home() 
{

  return (
    <>
       <Navbar/>

    <div className='cont'>
    <div><br></br>
      <h1 className='text-center' style={{color:"white"}}>Script Your Adventure</h1>
      <h6 className='text-center' style={{color:"white"}}>Discover the world of a thousand hidden memories!</h6>
    <h3 style={{color:"white",textShadow:"0.2px 0.3px 3px rgba(0.1,0.4,0,0.4)",marginLeft:"50px"}}>Best Hotels in Karnataka</h3>
      <div className="images">
        <Link to="/Login">
        <img
          className="theory" style={{marginLeft:"50px"}} 
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/aa/fd/2e/hotel-le-ruchi-the-prince.jpg?w=1200&h=-1&s=1"
          alt="First slide"
        />
        </Link>
        <h6 style={{color:"white",marginLeft:"100px"}}>Best Hotels in Mysore</h6>
    
      <Link to="/Login">
        <img
          className="theory" style={{marginLeft:"370px",marginTop:"-290px"}} 
          src="https://www.holidify.com/images/cmsuploads/compressed/253922697_20220223172839.jpg"
          alt="Second slide"
        /></Link>
          <h6 style={{color:"white",marginLeft:"450px",marginTop:"-45px"}}>Best Hotels in Coorg</h6>
       
       <Link to="/Login">
        <img
          className="theory"  style={{marginLeft:"690px",marginTop:"-300px"}} 
          src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/11/lalitha-mahal-palace1.jpg"
          alt="Third slide"
        /></Link>
          <h6 style={{color:"white",marginLeft:"750px",marginTop:"-49px"}}>Luxury Hotels in Mysore</h6>
  
        <Link to="/Login"> 
        <img
          className="theory" style={{marginLeft:"1010px",marginTop:"-300px"}} 
          src="https://assets.traveltriangle.com/blog/wp-content/uploads/2014/11/country-inn1.jpg"
          alt="Four slide"
        /></Link>
          <h6 style={{color:"white",marginLeft:"1050px",marginTop:"-49px"}}>5 Star Hotels in Bangalore</h6>
          </div>
         </div>
      <br></br><br></br>

    <div>
    <h3  style={{color:"White",textShadow:"0.2px 0.3px 3px rgba(0.1,0.4,0,0.4)",marginLeft:"50px"}}>Stays Collections in nearby state</h3>
      <div className="images">

      <Link to="/Login">
        <img 
          className="theory" style={{marginLeft:"50px"}} 
          src="https://www.nativeplanet.com/img/2023/08/chamundi-hill-temple_1692426407996-1200x675-20230819120201.jpg?10082024004746"
          alt="First slide"
        /></Link>   <h6 style={{color:"white",marginLeft:"100px"}}>Virupaksha Temple, Hampi</h6>


        <Link to="/Login">
        <img
          className="theory" style={{marginLeft:"370px",marginTop:"-290px"}} 
          src="https://i.pinimg.com/originals/46/55/7f/46557fd6b501ce5fd4595cac0fb80986.jpg"
          alt="Second slide"
        /></Link>   <h6 style={{color:"white",marginLeft:"450px",marginTop:"-45px"}}>KRS, Mysore</h6>
       
       <Link to="/Login">
        <img
          className="theory" style={{marginLeft:"690px",marginTop:"-300px"}} 
          src="https://w0.peakpx.com/wallpaper/1012/265/HD-wallpaper-iguazu-waterfall.jpg"
          alt="Third slide"
        /></Link>   <h6 style={{color:"white",marginLeft:"750px",marginTop:"-49px"}}>Kunchikal Falls, Shimogga</h6>

        <Link to="/Login">
        <img
          className="theory"  style={{marginLeft:"1010px",marginTop:"-300px"}}
          src="https://static.toiimg.com/thumb/msid-51680194,width=1200,height=900/51680194.jpg"
          alt="Four slide"
        /></Link> <h6 style={{color:"white",marginLeft:"1050px",marginTop:"-49px"}}>Chamundi Hills, Mysore</h6>
          </div>
         </div>
        <br></br><br></br> 

         <div>
    <h3 style={{color:"white",textShadow:"0.2px 0.3px 3px rgba(0.1,0.4,0,0.4)",marginLeft:"50px"}}>Best Places To Stay in Karnataka</h3>
      <div className="images">
      <Link to="/Login">
        <img
          className="theory" style={{marginLeft:"50px"}} 
          src="https://content.jdmagicbox.com/comp/mysore/s5/0821px821.x821.211119144638.i5s5/catalogue/premachandra-pg-alanahalli-mysore-paying-guest-accommodations-for-women-g6jpa1upu6.jpg"
          alt="First slide"
        /></Link>   <h6 style={{color:"white",marginLeft:"100px"}}>Best Paying Guest in Mysore</h6>

        <Link to="/Login">
        <img
          className="theory" style={{marginLeft:"370px",marginTop:"-290px"}} 
          src="https://content.jdmagicbox.com/comp/mysore/w5/0821px821.x821.161005125716.w4w5/catalogue/myspace-girl-s-paying-guest-saraswathipuram-mysore-paying-guest-accommodations-zj2kzzkead.jpg"
          alt="Second slide"
        /></Link> <h6 style={{color:"white",marginLeft:"420px",marginTop:"-45px"}}>Best Paying Guest in Coorg</h6>
       
       <Link to="/Login">
        <img
          className="theory" style={{marginLeft:"690px",marginTop:"-300px"}} 
          src="https://content3.jdmagicbox.com/comp/mysore/c2/0821px821.x821.210404205029.c7c2/catalogue/suraksha-ladies-paying-guest-tilaknagar-mysore-paying-guest-accommodations-for-women-zsxt6r3hai.jpg"
          alt="Third slide"
        /></Link>  <h6 style={{color:"white",marginLeft:"750px",marginTop:"-49px"}}>Best Paying Guest in Mysore</h6>
  
        <Link to="/Login">
        <img
          className="theory"  style={{marginLeft:"1010px",marginTop:"-300px"}}
          src="https://content3.jdmagicbox.com/comp/mysore/d1/0821px821.x821.180720102031.d6d1/catalogue/slv-paying-guest-hebbal-1st-stage-mysore-paying-guest-accommodations-7hk4secrdf.jpg"
          alt="Four slide"
        /></Link>  <h6 style={{color:"white",marginLeft:"1050px",marginTop:"-49px"}}>Best Paying Guest in Bangalore</h6>
          </div>
         </div>
         </div>
      <br></br><br></br>
    </>
  )
}