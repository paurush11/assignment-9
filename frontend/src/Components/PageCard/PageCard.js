import React from "react";
import classes from "./PageCard.module.css";

const PageCard = ({ title, desc }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.titleTag} >{title}</div>
      <div >{desc}</div>
    </div>
  );
};

export default PageCard;
