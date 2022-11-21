import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import classes from "./jobs.module.css";
import "./jobs.module.css";
const myStyle = {
  backgroundImage: "url('1385506.jpeg')",
  // height: '120vh',
  minHeight:'100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const Jobs = () => {
  
  return (
    <div style={myStyle}>
      <Navbar path = "/Home" />
      <PageCard
        title={"Jobs Page"}
        desc={
          ""
          }
      />
      <div className = {classes.tablesize}>
      <table>
        <thead>
          <tr>
          <th>Job name</th>
            <th>Job Id</th>
            <th>Job description</th>
            <th>Salary</th>
          </tr>
          </thead>
            <tbody>
            <tr>
            <td><span>Ship To </span>Armed Forces Americas (excluding Canada)</td>
            <td><span> </span>3502566</td>
            <td><span></span>The Product Marketing Intern works collaboratively with teams in automating the production of quarterly presentation material, and in enabling the client-facing teams to customize these materials in a scale-able way.</td>
            <td><span></span>60,000$</td>
            </tr>
            <tr>
            <td><span>Ship To </span>Armed Forces</td>
            <td><span> </span>3223466</td>
            <td><span></span>The Channel Marketing Intern will provide support to the US Intermediary and Institutional channel segments on creation, execution, and reporting on key aspects of the marketing strategy. They will also work closely with the marketing team members to improve the organization and promotion of marketing resources to help them effectively communicate our resources and capabilities to stakeholders.</td>
            <td><span></span>93,000$</td>
            </tr>
            <tr>
            <td><span>Ship To </span>Armed Forces Pacific</td>
            <td><span></span>8293466</td>
            <td><span></span>The Technology Process Intern enables software development projects to run smoothly with a focus on tooling, processes and people. The individual in this role supports the best use of our tools, supports our current Technology processes, and looks for opportunities for improvement.</td>
            <td><span></span>145,000$</td>
          </tr>
          <tr>
            <td><span>Ship To </span>Armed Forces Pacific</td>
            <td><span> </span>9876543</td>
            <td><span></span>The Software Engineer Intern provides excellent experience in designing and implementing creative and complete solutions to complex business problems.  Intern will train extensively in current enterprise development practices. Will occasionally work directly with business on macros, scripts, et al. Will work on production team as a test engineer with tools on various applications.</td>
            <td><span></span>125,000$</td>
          </tr>
          <tr>
            <td><span>Ship To </span>Armed Forces Pacific</td>
            <td><span></span>2343666</td>
            <td><span></span>The DevOps Intern supports the software delivery teams to build, deploy, and monitor custom software applications critical to Parametric’s core business. The individual in this role supports the best use of our tools, supports our current Technology processes, and looks for opportunities for improvement through automation of our CI/CD pipeline.</td>
            <td><span></span>85,000$</td>
          </tr>
        </tbody>
      </table>
        </div>

        <div className = {classes.space}></div>
       
    </div>
  );
};

export default Jobs;
