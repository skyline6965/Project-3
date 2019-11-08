import React from "react";
import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);
const myEventsList = {} //empty object for now

class App extends Component{
  constructor(){
   //We will populate this function later
  }
  componentDidMount(){
   //We will populate this function later
  }
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
}