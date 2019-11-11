import React from "react";
import SubmitButton from "../SubmitButton";
import emailjs from "emailjs-com";
import "./style.css";

class Form extends React.Component {

  state = {
    from_name: "",
    subject: "",
    from_email: "",
    message: ""
  }

  initEmail() {
    emailjs.init("user_6679HJHKrxqEfvXSqt7L6");
  }

  sendEmail = event => {
    event.preventDefault()
    var template_params = {
      "from_name": this.state.from_name,
      "from_email": this.state.from_email,
      "subject": this.state.subject,
      "message": this.state.message
    }

    var service_id = "default_service";
    var template_id = "contact_form";
    emailjs.send(service_id, template_id, template_params);

    this.setState({
      from_name: "",
      subject: "",
      from_email: "",
      message: ""
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.initEmail();
  }

  render() {
    return (
      <section>
      <form id="contact-form">
        <div className="form-line">
          <label for="from_email">Email:
          <input type="email" id="contact-email" name="from_email" value={this.state.from_email} onChange={this.handleInputChange}>

          </input>

          </label>        
          </div>
        <div className="form-line">
          <label for="from_name">Name:
          <input type="text" id="contact-name" name="from_name" value={this.state.from_name} onChange={this.handleInputChange}>

          </input>


          </label>
        </div>
        <div className="form-line">
          <label for="subject">Subject:
          <input type="text" id="email-subject" name="subject" value={this.state.subject} onChange={this.handleInputChange}>

          </input>


          </label>        
        </div>
        <div className="form-line">
          <label for="message">Message: 
          <textarea id="message" name="message" value={this.state.message} onChange={this.handleInputChange}>

          </textarea>
          </label>
        </div>
        <SubmitButton onClick={this.sendEmail} />
      </form>
      </section>
    )
  }
}

export default Form;