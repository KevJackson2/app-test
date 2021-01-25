import React, { Component } from "react";

import Widecard from "../components/Widecard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title=" BBA Information Systems"
          where="Iona College"
          from="August 2016"
          to="May 2020"
        />

        <Widecard
          where="Bergen Catholic High School"
          from="September 2012"
          to="May 2016"
        />
      </div>
    );
  }
}

export default Education;
