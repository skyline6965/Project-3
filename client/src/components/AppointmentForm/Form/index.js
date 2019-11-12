import React from "react";
import SubmitButton from "../SubmitButton";
import "./style.css";
import axios from "axios";

class AptForm extends React.Component {
  state = {
    title: "",
    start: "",
    end: "",
    allDay: "",
    resource: ""
  }

  makeAppointment = event => {
    event.preventDefault()
    var appointment_object = {
      "title": this.state.title,
      "start": this.state.start,
      "end": this.state.end,
      "allDay": this.state.allDay,
      "resource": this.state.resource
    }
    axios.post("api/appointments")

    this.setState({
      title: "",
      start: "",
      end: "",
      allDay: "",
      resource: ""
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <section>
      <form id="contact-form">
        <div className="form-line">
          <label for="title">About:
          <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleInputChange}>

          </input>

          </label>        
          </div>
        <div className="form-line">
          <label for="start">Start Time:
          <input type="text" id="start" name="start" value={this.state.start} onChange={this.handleInputChange}>

          </input>


          </label>
        </div>
        <div className="form-line">
          <label for="end">Subject:
          <input type="text" id="end" name="end" value={this.state.end} onChange={this.handleInputChange}>

          </input>


          </label>        
        </div>
        <div className="form-line">
          <label for="allDay">Will This Be An All Day Event?: 
          <textarea id="boolean" name="allDay" value={this.state.allDay} onChange={this.handleInputChange}>

          </textarea>
          </label>
        </div>
        <SubmitButton onClick={this.makeAppointment} />
      </form>
      </section>
    )
  }
};

export default AptForm;