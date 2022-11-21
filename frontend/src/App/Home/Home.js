import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import classes from "./Home.module.css";
import axios from "axios";

import { Link } from "react-router-dom";

const Home = (props) => {
  const [users, setusers] = useState([]);
  const displayNav = "flex";
  const myStyle={
    backgroundImage: "url('1385501.jpeg')",
    minHeight:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

useEffect(() => {
  const getData = async () => {
    const data = await axios.get("http://localhost:8080/user/getAll");
    console.log(data.data.data);
    setusers(data.data.data);
  };
  getData();
}, []);

  return (
    <div style={myStyle} >
      <Navbar display = {displayNav} />
      <div  >
      <PageCard 
        title={""}
        desc={
          ""
        }
      />
      
      <div className={classes.inputContainer} >
        <div className = {classes.sexyText} >JOB SEARCH</div>
      </div>

      <div className = {classes.information}>
        
        <div className = {classes.header}>
          <Link to = "/Jobs"><button className = {classes.btn_9}>Apply to Jobs</button></Link>
          <Link to = "/"><button className = {classes.btn_9}>Logout</button> </Link>
        </div>

        <div className = {classes.bodyfill}>
          <div className = {classes.card}>
          <div className={classes.specialcardContainer}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
         sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
         Aldus PageMaker including versions of Lorem Ipsum
      </div>
           
            
            
          </div>
          
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Home;


