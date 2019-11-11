import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
moment.locale("en-GB");

const localizer = momentLocalizer(moment);
const myEventsList = [] //empty array for now
class CalendarContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      cal_events: [],
    }
}

  componentDidMount(){
  
    let self = this
    axios.get()
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
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    )
  }
};

export default CalendarContainer;
