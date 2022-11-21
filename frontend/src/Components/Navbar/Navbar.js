import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css"


const Navbar = (props) => {
  return (
    <div className={classes.Container} style = {{display:props.display}}>
      
      <Link to={props.path} className={classes.alink}>Home</Link>
      <Link to="/about" className={classes.alink} >About</Link>
      <Link to="/contact" className={classes.alink}>Contact</Link>
      <Link to="/jobs" className={classes.alink} >Jobs</Link>
    </div>
    
  );
};

export default Navbar;
