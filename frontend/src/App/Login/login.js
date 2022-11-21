import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import classes from "./Login.module.css";
import axios from "axios";

const Login = (props) => {
  
    const [display, setdisplay] = useState("none");
    console.log("we are here");
    
    let displayNav = "none";
    const [myPath, setPath] = useState("/");
  
    const [navbarDisplay, setnavbarDisplay] =  useState(displayNav);
    
   
    const [data, setdata] = useState({
      email: "",
      password: "",
    });
    const [message, setmessage] = useState("");
    
  
    const change = (e) => {
      const temp = { ...data };
      temp[e.target.name] = e.target.value;
      setdata(temp);
    };
  
    const submit = async () => {
      try {
        const apiData = await axios.post(
          "http://localhost:8080/user/login",
          data
        );
        setmessage(apiData.data.data.message);
        setdisplay("block")
        setPath("/Home")
        window.location.href = "/Home"
        setnavbarDisplay("flex");
        console.log(apiData.data.data.message);
      } catch (error) {
        console.log(error.response);
        setdisplay("block")
        setmessage(error.response.data.error);
      }
    };
    const myStyle={
      backgroundImage: "url('1385507.png')",
      height:'100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  }
  console.log("display ",display)
  console.log("display ",navbarDisplay)
    return (
      <div style={myStyle} >
        <Navbar display = {navbarDisplay}  path = {myPath}/>
        <div  >
        <PageCard 
          title={"Welcome to XYZ Company"}
          desc={
            ""
          }
        />
        
        <div className={classes.inputContainer} >
          <div className = {classes.sexyText} >Login Here</div>
          <div className = {classes.hrcontainer}>
        <hr className = {classes.hr}/>
        </div>
          <input
            className={classes.Input}
            name="email"
            type="email"
            placeholder="batish@gmail.com"
            value={data.email}
            onChange={change}
          />
          <input
            password="*******"
            type="password"
            className={classes.Input}
            name="password"
            placeholder="Enter Password"
            value={data.password}
            onChange={change}
          />
          
          <button onClick={submit} className={classes.Submit}>
            Submit
          </button>
          <br />
          <div className = {classes.messageclass} style = {{display:display}}>{message}</div>
        </div>
  
        </div>
       
      </div>
    );
  };

  export default Login;