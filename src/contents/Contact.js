import React, { Component } from "react";
import Social from "../components/Social";

class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Lets get in touch.</h1>
        <h3>Email : kevinjackson2@gmail.com</h3>
        <h3>GitHub : Kevjackson2</h3>
        <h3>LinkedIn : KevJackson2</h3>
        <Social />
      </div>
    );
  }
}

export default Contact;
