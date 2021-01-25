import React, { Component } from "react";
import profilepic from "../img/grad.jpg";
import ReactTypingEffect from "react-typing-effect";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} className="profilepic"></img>
        <ReactTypingEffect
          className="typingeffect"
          text={["Hello, World!"]}
          speed={65}
          eraseDelay={800}
          eraseSpeed={100}
        />
      </div>
    );
  }
}

export default Home;
