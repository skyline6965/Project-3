import React from "react";
import SubmitButton from "../SubmitButton";

class Form extends React.Component {
  


  render(){
    return (
      <form>
        <input type="email" id="contact-email">

        </input>
        <hr/>
        <input type="text-area" id="email-message">

        </input>
        <SubmitButton/>
      </form>
    )
  }
}

export default Form;