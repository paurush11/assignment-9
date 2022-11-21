import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import axios from "axios";
import classes from "./About.module.css";

const About = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:8080/user/getAll");
      console.log(data.data.data);
      setusers(data.data.data);
    };
    getData();
  }, []);

  const myStyle = {
    backgroundImage: "url('/1385508.jpeg')",
    // height: '120vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div style={myStyle}>
      <Navbar display = {"flex"} path = "/Home"/>
      <PageCard
        title={"About Page"}
        desc={
          ""
        }
      />

<div className={classes.topic}>Our Members</div>
      <div className={classes.cardContainer}>

        {users.map((element) => (
         
          <UserCard email={element.email} name = {element.full_name}/>
        ))}
      </div>
      <div className={classes.topic}>Our Ambition</div>
      <div className={classes.specialcardContainer}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
         sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
         Aldus PageMaker including versions of Lorem Ipsum
      </div>

      <div className={classes.topicright}>Our Achievements</div>
      <div className={classes.specialcardContainer}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
         sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
         Aldus PageMaker including versions of Lorem Ipsum
      </div>
      <div className = {classes.space}></div>
      
    </div>
  );
};

const UserCard = ({ email , name}) => {
  return <div className={classes.card}>
    Name - {name} <br/>
    Email - {email}
    </div>;
};

export default About;
