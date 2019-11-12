import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
moment.locale("en-GB");

const localizer = momentLocalizer(moment);
class CalendarContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      cal_events: [],
    }
}

  componentDidMount(){
  
    let self = this
    axios.get("/api/appointments")
    .then(response => {
    
    let appointments = response.data;
    
    for (let i = 0; i < appointments.length; i++) {
      appointments[i].start =    moment.utc(appointments[i].start).toDate();
      appointments[i].end = moment.utc(appointments[i].end).toDate();
      
    }
    self.setState({
      cal_events:appointments
    })

  })
  .catch(function (error) {
    console.log(error);
  });
};
   
  
  render(){
    return(
      <Calendar
        localizer={localizer}
        events={this.state.cal_events}
        startAccessor="start"
        endAccessor="end"
        style={{height: 500, width:700}} //style placeholder so calendar will render. Will move to css file. 
      />
    )
  }
};

export default CalendarContainer;
