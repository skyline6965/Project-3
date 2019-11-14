import React from "react";
import SubmitButton from "../SubmitButton";
import "./style.css";
import axios from "axios";

class AptForm extends React.Component {
  state = {
    title: "",
    start: "",
    end: "",
    //allDay: false,
    //resource: ""
  }

  makeAppointment = event => {
    //event.preventDefault()
    var appointment_object = {
      "title": this.state.title,
      "start": this.state.start,
      "end": this.state.end,
      // "allDay": this.state.allDay,
      // "resource": this.state.resource
    }
    axios.post("api/appointments", appointment_object).then(response =>  {
      console.log(response);
    }).catch(err => {
      console.log(err);
    })

    this.setState({
      title: "",
      start: "",
      end: "",
      //allDay: "",
      //resource: ""
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
          <input className='input' type="text" id="title" name="title" value={this.state.title} onChange={this.handleInputChange}>

          </input>

          </label>        
          </div>
        <div className="form-line">
          <label for="start">Start Time and date:
          <input className='input' type="text" id="start" placeholder='YYYY-MM-DD 24hr time' name="start" value={this.state.start} onChange={this.handleInputChange}>

          </input>


          </label>
        </div>
        <div className="form-line">
          <label for="end">End Time and date:
          <input className='input' type="text" id="end" placeholder='YYYY-MM-DD 24hr time' name="end" value={this.state.end} onChange={this.handleInputChange}>

          </input>


          </label>        
        </div>
        <SubmitButton onClick={this.makeAppointment} />
      </form>
      </section>
    )
  }
};

export default AptForm;