import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import PageCard from '../../Components/PageCard/PageCard';
import classes from "./contact.module.css";
const myStyle = {
    backgroundImage: "url('1385509.jpeg')",
   
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
const Contact = () => {
  return (
    <div style={myStyle}>
      <Navbar path = "/Home" />
      <PageCard
        title={"Contact Us"}
        desc={
          "" }
      />
      <div className = {classes.grid}>
        <div className = {classes.card}>
          <img src="avatar1.png" alt="Avatar" style={{ width: '100%', "border-radius": '80px', height:'80%' }}/>
            <div class="container">
            <h4><b>John Doe</b></h4> 
              <p>Product Engineer</p>
            </div>
        </div>
        <div className = {classes.card}>
          <img src="avatar2.jpeg" alt="Avatar" style={{ width: '100%', "border-radius": '80px' , height:'80%' }}/>
            <div class="container">
              <h4><b>Jessica Pearson</b></h4> 
              <p>Principal Engineer</p> 
            </div>
        </div>
        
        <div className = {classes.card}>
          <img src="avatar3.png" alt="Avatar" style={{ width: '100%', "border-radius": '80px' , height:'80%' }}/>
            <div class="container">
            <h4><b>Sandra Bullock</b></h4> 
              <p>Relations Officer</p> 
               
            </div>
        </div>
      </div>
      <div className = {classes.grid}>
        <div className = {classes.card}>
          <img src="avatar4.jpeg" alt="Avatar" style={{ width: '100%', "border-radius": '80px', height:'80%' }}/>
            <div class="container">
              <h4><b>Rajnikant Singh</b></h4> 
              <p>Web Developer and Designer Engineer</p> 
            </div>
        </div>
        <div className = {classes.card}>
          <img src="avatar2.jpeg" alt="Avatar" style={{ width: '100%', "border-radius": '80px' , height:'80%' }}/>
            <div class="container">
              <h4><b>Katie Prucell</b></h4> 
              <p>Hiring Manager</p> 
            </div>
        </div>
        
        
      </div>
      <div className = {classes.space}></div>
      
    </div>
  );
}

export default Contact