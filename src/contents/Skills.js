import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myskills: ["HTML", "CSS", "JS", "SQL", "REACT", ],
    };
  }
  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">Skills</h1>
        <ul>
          {this.state.myskills.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}
/* map() is used to iterate over the items in an array and call a function on every element of the array */
export default Skills;
