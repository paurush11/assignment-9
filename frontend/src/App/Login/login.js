import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import classes from "./Login.module.css";
import axios from "axios";
import { passwordStrength } from "check-password-strength";

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
      
      try{
        if(data.email === ""){
          throw new Error("Empty Email");
        }
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;
        const result = pattern.test(data.email);
        if(result!== true){
          throw new Error("Invalid email format");  
        }
        if(data.password === ""){
          throw new Error("Empty Password");
        }
        const ans = passwordStrength(data.password).value;
        console.log(ans);
        if (ans === "Weak" || ans === "Too weak") 
        throw new Error("Password is Weak!! Kindly use minimum 1 Uppercase, 1 Lowercase and a minimum lemgth of 8 characters");
        
      }catch(error){
        console.log(error.message);
        setdisplay("block")
        setmessage(error.message);
        return;
      }

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