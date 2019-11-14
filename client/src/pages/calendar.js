import React from "react";
import 'bulma/css/bulma.css'
import Navbar from "../components/Nav"
import CalendarContainer from "../components/Calendar/Body"
import Login from "../pages/Login"
import FormContainer from "../components/ContactForm/FormContainer";
import AptContainer from "../components/AppointmentForm/AptContainer";

function CalendarPage() {
  return(
    <div>
    
      <Navbar />
      <FormContainer />
      {/* <Login/> */}
      <CalendarContainer />
      <br></br>
      <br></br>
      <AptContainer />

    </div>
  )
};

export default CalendarPage;