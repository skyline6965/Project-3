import React from "react";
import SubmitButton from "../SubmitButton";
import emailjs from "emailjs-com";

class Form extends React.Component {



  initEmail() {
    emailjs.init("user_6679HJHKrxqEfvXSqt7L6");
  }

  sendEmail() {
    var template_params = {
      "from_name": "from_name_value",
      "message": "message_value"
    }

    var service_id = "default_service";
    var template_id = "contact_form";
    emailjs.send(service_id, template_id, template_params);
  }


  render(){
    return (
      <form id="contact-form">
        <input type="email" id="contact-email">

        </input>
        <hr/>
        <input id="email-subject">

        </input>
        <hr/>
        <textarea id="message">

        </textarea>
        <SubmitButton/>
      </form>
    )
  }
}

export default Form;